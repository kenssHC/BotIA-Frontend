import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  IconButton,
  Typography,
  Grid,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

// Mock data for filter types
const filterTypes = [
  { value: 'temperatura', label: 'Temperatura' },
  { value: 'edad', label: 'Edad' },
  { value: 'genero', label: 'Género' },
  { value: 'ubicacion', label: 'Ubicación' },
  { value: 'intereses', label: 'Intereses' },
];

// Mock data for filter values
const filterValues = {
  temperatura: [
  { value: 'frio', label: 'Frío' },
  { value: 'tibio', label: 'Tibio' },
  { value: 'caliente', label: 'Caliente' },
],
  edad: [
    { value: '18-24', label: '18-24 años' },
    { value: '25-34', label: '25-34 años' },
    { value: '35-44', label: '35-44 años' },
    { value: '45+', label: '45+ años' },
  ],
  genero: [
    { value: 'masculino', label: 'Masculino' },
    { value: 'femenino', label: 'Femenino' },
    { value: 'otro', label: 'Otro' },
  ],
  ubicacion: [
    { value: 'lima', label: 'Lima' },
    { value: 'arequipa', label: 'Arequipa' },
    { value: 'trujillo', label: 'Trujillo' },
  ],
  intereses: [
    { value: 'tecnologia', label: 'Tecnología' },
    { value: 'deportes', label: 'Deportes' },
    { value: 'musica', label: 'Música' },
  ],
};

export const DynamicFilterNew = ({ filters, setFilters }) => {
  const [newFilter, setNewFilter] = useState({ type: '', value: '' });

  const handleAddFilter = () => {
    if (newFilter.type && newFilter.value) {
      setFilters([...filters, newFilter]);
      setNewFilter({ type: '', value: '' });
    }
  };

  const handleRemoveFilter = (index) => {
    const newFilters = filters.filter((_, i) => i !== index);
    setFilters(newFilters);
  };

  const handleTypeChange = (event) => {
    setNewFilter({ ...newFilter, type: event.target.value, value: '' });
  };

  const handleValueChange = (event) => {
    setNewFilter({ ...newFilter, value: event.target.value });
  };

  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={5}>
          <FormControl fullWidth size="small">
            <InputLabel>Tipo de filtro</InputLabel>
            <Select
              value={newFilter.type}
              onChange={handleTypeChange}
              label="Tipo de filtro"
            >
              {filterTypes.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={5}>
          <FormControl fullWidth size="small">
            <InputLabel>Valor</InputLabel>
            <Select
              value={newFilter.value}
              onChange={handleValueChange}
              label="Valor"
              disabled={!newFilter.type}
            >
              {newFilter.type &&
                filterValues[newFilter.type].map((value) => (
                  <MenuItem key={value.value} value={value.value}>
                    {value.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            onClick={handleAddFilter}
            disabled={!newFilter.type || !newFilter.value}
            startIcon={<AddIcon />}
            fullWidth
            sx={{
              backgroundColor: '#e8edfb',
              color: '#3451a1',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '18px',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#d2e0fa',
                color: '#3451a1',
                boxShadow: 'none',
              },
            }}
          >
            Añadir filtro
          </Button>
        </Grid>
      </Grid>

      {filters.map((filter, index) => (
        <Box
          key={index}
          sx={{
            mt: 2,
            p: 2,
            border: '1px solid #E5E7EB',
            borderRadius: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>
            {filterTypes.find((t) => t.value === filter.type)?.label}:{' '}
            {filterValues[filter.type]?.find((v) => v.value === filter.value)?.label}
          </Typography>
          <IconButton onClick={() => handleRemoveFilter(index)} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
}; 