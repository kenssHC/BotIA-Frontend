import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Step, Stepper, StepLabel } from '@mui/material';
import { toast } from 'react-toastify';
import { PasoUno } from './StepOne';
import { PasoDos } from './StepTwo';
import { ReactHookForm } from './form-validation-view/react-hook-form';

const steps = ['Datos de campaña', 'Seleccion de contenido', 'Enviar campaña'];

// Mock data for campaigns
const mockCampaigns = [
  {
    id: 1,
    nombre: 'Campaña de Bienvenida',
    canal: 1,
    filtros: [],
    contenidos: []
  }
];

export const NewCampaigns = () => {
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState([]);
  const [errors, setErrors] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [dataSend, setDataSend] = useState({ nombre: '', canal: 1, filtros: [] });
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
  
    if (!value.trim()) {
      newErrors.value = 'El nombre de la campaña es obligatorio.';
    }
  
    if (filter.length === 0) {
      newErrors.filter = 'Debe añadir al menos un filtro.';
    } else {
      filter.forEach((f, index) => {
        if (!f.type) {
          newErrors.filter = `Debe seleccionar al menos un tipo de filtro.`;
        } else if (!f.value || f.value.trim() === '') {
          newErrors.filter = `Debe seleccionar mínimo una opción.`;
        }
      });
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const setValuesContent = (data) => {
    const dataToSent = { ...dataSend };
    dataToSent.contenidos = [data];
    
    // Mock API call
    setTimeout(() => {
      const newCampaign = {
        ...dataToSent,
        id: mockCampaigns.length + 1
      };
      mockCampaigns.push(newCampaign);
      
      toast.success('Campaña creada exitosamente');
      navigate(`/dashboard/campaigns/view`, { state: { idCampana: newCampaign.id } });
    }, 1000);
  };

  const handleNext = (text, filters) => {
    const transformedFilters = filters.map((f) => ({
      tipo: f.type,
      valor: f.value,
    }));

    setDataSend((prevState) => ({
      ...prevState,
      nombre: text,
      filtros: transformedFilters,
    }));

    if (validate()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleNext2 = (text, filters) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const stepContent = [
    <PasoUno 
      key='step1' 
      value={value} 
      setValue={setValue} 
      filter={filter} 
      setFilter={setFilter} 
      errors={errors} 
      setErrors={setErrors} 
      handleNext={handleNext} 
    />,
    <PasoDos 
      key='step2' 
      handleBack={handleBack} 
      handleNext={handleNext2} 
    />
  ];

  return (
    <Box sx={{ display: 'flex', flex: '1 1 auto', backgroundColor: '#FFFFFF', flexDirection: 'column', p: 3 }}>
      <Box sx={{ width: '100%', maxWidth: '1900px' }}>
        <Stepper
          activeStep={activeStep}
          sx={{
            mb: 3,
            '& .MuiStepIcon-root.Mui-active': {
              color: '#6a8bff',
            },
            '& .MuiStepIcon-root.Mui-completed': {
              color: '#6a8bff',
            },
            '& .MuiStepLabel-label.Mui-active': {
              color: '#6a8bff',
              fontWeight: 'bold',
            },
            '& .MuiStepLabel-label.Mui-completed': {
              color: '#6a8bff',
              fontWeight: 'bold',
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep !== 2 && <>{stepContent[activeStep]}</>}
        {activeStep === 2 && <ReactHookForm key='step3' handleBack={handleBack} setValues={setValuesContent} />}
      </Box>
    </Box>
  );
}; 