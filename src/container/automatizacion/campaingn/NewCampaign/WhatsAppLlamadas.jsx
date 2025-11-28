import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

const objetivos = [
  "Generar cita",
  "Confirmar cita",
  "Encuesta",
  "Venta",
  "Seguimiento de venta",
];

export default function WhatsAppLlamadas() {
  const [bot, setBot] = useState("");
  const [objetivo, setObjetivo] = useState("");

  return (
    <Box sx={{ background: "#f7f8fc", minHeight: "100vh", p: 4 }}>
      {/* Stepper y breadcrumb */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ color: "#8a8fa7", fontWeight: 500, fontSize: 16 }}>
          Automatización {">"} <b style={{ color: "#222" }}>Campañas</b>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "2px solid #6a8bff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
              }}
            >
              <svg width="20" height="20" fill="#6a8bff">
                <polyline
                  points="6,10 9,13 14,7"
                  fill="none"
                  stroke="#6a8bff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Typography
              sx={{ color: "#6a8bff", fontWeight: 500, fontSize: 18 }}
            >
              Datos de campaña
            </Typography>
          </Box>
          <Box sx={{ height: 2, width: 40, background: "#e0e4f7", mx: 2 }} />
          <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#6a8bff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
              }}
            >
              <Typography sx={{ color: "#fff", fontWeight: 500, fontSize: 18 }}>
                2
              </Typography>
            </Box>
            <Typography
              sx={{ color: "#6a8bff", fontWeight: 500, fontSize: 18 }}
            >
              Selección de contenido
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Card principal */}
      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <Card
          sx={{
            p: 5,
            width: "100%",
            maxWidth: 1000,
            borderRadius: 4,
            boxShadow: "none",
            background: "#fff",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Llamadas
          </Typography>
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 18,
                color: "#23232B",
                mb: 1.5,
              }}
            >
              Seleccionar bot
            </Typography>
            <FormControl fullWidth sx={{ mt: 0 }}>
              <Select
                value={bot}
                onChange={(e) => setBot(e.target.value)}
                displayEmpty
                sx={{
                  borderRadius: 2,
                  background: "#fff",
                  border: "1.5px solid #D1D5DB",
                  fontSize: 20,
                  color: "#23232B",
                  fontWeight: 500,
                  px: 2,
                  py: 1.5,
                  height: 56,
                  width: "50%",
                  "& .MuiSelect-select": {
                    padding: "16.5px 14px",
                  },
                  "& fieldset": {
                    border: "none",
                  },
                }}
                inputProps={{
                  sx: {
                    fontSize: 15,
                    color: "#23232B",
                    fontWeight: 500,
                  },
                }}
              >
                <MenuItem
                  value="Bot de llamada"
                  sx={{ fontSize: 18, color: "#23232B", fontWeight: 500 }}
                >
                  Bot de llamada
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography sx={{ fontWeight: 600, mb: 2, fontSize: 18 }}>
              Seleccionar objetivo
            </Typography>
            <Grid container spacing={2}>
              {objetivos.map((obj, idx) => (
                <Grid item xs={12} sm={6} md={4} key={obj}>
                  <Button
                    variant={objetivo === obj ? "contained" : "outlined"}
                    onClick={() => setObjetivo(obj)}
                    sx={{
                      width: "100%",
                      justifyContent: "flex-start",
                      borderRadius: 3,
                      borderColor: objetivo === obj ? "#6a8bff" : "#cfd8ff",
                      background: objetivo === obj ? "#e6ebff" : "#fff",
                      color: objetivo === obj ? "#3451a1" : "#222",
                      fontWeight: 500,
                      fontSize: 14,
                      textTransform: "none",
                      boxShadow: "none",
                      px: 3,
                      py: 2,
                      borderWidth: 2,
                      "&:hover": {
                        background: "#e6ebff",
                        borderColor: "#6a8bff",
                        color: "#3451a1",
                        boxShadow: "none",
                      },
                    }}
                    startIcon={
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          border:
                            objetivo === obj
                              ? "2px solid #6a8bff"
                              : "2px solid #cfd8ff",
                          background: objetivo === obj ? "#e6ebff" : "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {objetivo === obj && (
                          <Box
                            sx={{
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              background: "#6a8bff",
                            }}
                          />
                        )}
                      </Box>
                    }
                  >
                    {obj}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
            <Button
              variant="text"
              sx={{
                color: "#3451a1",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#f5f8ff",
                  color: "#3451a1",
                  boxShadow: "none",
                },
              }}
            >
              Regresar
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#2a437c",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "none",
                borderRadius: "10px",
                px: 4,
                boxShadow: "none",
                "&:hover": {
                  background: "#3451a1",
                  color: "#fff",
                  boxShadow: "none",
                },
              }}
              disabled={!bot || !objetivo}
            >
              Continuar
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
