import React, { useState } from "react";
import { Button, Card, Divider, Stack, Typography, Box, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';

export const PasoDos = ({ handleBack, handleNext }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (type) => {
    if (type === 'audiovisuales') {
      navigate('/dashboard/automatizacion/campaigns/new/audiovisuales');
    } else if (type === 'encuesta') {
      navigate('/dashboard/automatizacion/campaigns/new/encuestas');
    } else if (type === 'llamadas') {
      navigate('/dashboard/automatizacion/campaigns/new/llamadas');
    } else {
      handleNext(type);
    }
    handleMenuClose();
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "#FFFFFF",
        height: "100%",
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "20px", sm: "24px" },
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Selección de contenido
      </Typography>

      <Typography
        sx={{
          color: "#6B7280",
          fontSize: { xs: "16px", sm: "18px" },
          mb: 3,
        }}
      >
        Para comenzar a configurar tu campaña, selecciona el tipo de contenido que deseas utilizar.
      </Typography>

      <Divider
        sx={{
          borderColor: "#E5E7EB",
          mb: 3,
          width: "100%",
        }}
      />

      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 4, sm: 6 },
          position: 'relative',
          minHeight: '80px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", sm: "22px" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Contenidos
        </Typography>
        <Typography
          sx={{
            color: "#6B7280",
            fontSize: { xs: "16px", sm: "18px" },
            mb: 3,
          }}
        >
          Crea contenidos de tipo texto - audiovisual, encuesta o llamadas. 
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleMenuClick}
            sx={{
              border: '2px solid #3451a1',
              color: '#3451a1',
              fontWeight: 'bold',
              borderRadius: '12px',
              textTransform: 'none',
              backgroundColor: '#fff',
              fontSize: { xs: '14px', sm: '16px' },
              '&:hover': {
                backgroundColor: '#f5f8ff',
                border: '2px solid #3451a1',
              },
            }}
          >
            Añadir contenido
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                borderRadius: 3,
                boxShadow: 3,
                mt: 1,
                minWidth: 260,
              },
            }}
          >
            <MenuItem
              onClick={() => handleSelect('audiovisuales')}
              sx={{
                fontSize: '20px',
                color: '#222',
                '&:hover': { background: '#e8edfb' },
              }}
            >
              <ListItemIcon>
                <InsertPhotoIcon fontSize="medium" sx={{ color: '#3451a1' }} />
              </ListItemIcon>
              <ListItemText primary="WhatsApp - Audiovisuales" />
            </MenuItem>
            <MenuItem
              onClick={() => handleSelect('encuesta')}
              sx={{
                fontSize: '20px',
                color: '#222',
                '&:hover': { background: '#e8edfb' },
              }}
            >
              <ListItemIcon>
                <AssignmentIcon fontSize="medium" sx={{ color: '#3451a1' }} />
              </ListItemIcon>
              <ListItemText primary="WhatsApp - Encuesta" />
            </MenuItem>
            <MenuItem
              onClick={() => handleSelect('llamadas')}
              sx={{
                fontSize: '20px',
                color: '#222',
                '&:hover': { background: '#e8edfb' },
              }}
            >
              <ListItemIcon>
                <CallIcon fontSize="medium" sx={{ color: '#3451a1' }} />
              </ListItemIcon>
              <ListItemText primary="Llamadas" />
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ position: 'absolute', left: 0, bottom: 0 }}>
          <Button
            variant="secondary"
            onClick={handleBack}
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              borderRadius: "10px",
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f5f8ff',
                color: '#3451a1',
                boxShadow: 'none',
              },
            }}
          >
            Regresar
          </Button>
        </Box>
      </Box>
    </Card>
  );
}; 