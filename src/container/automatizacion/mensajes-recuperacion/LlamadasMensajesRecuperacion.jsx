import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "../gestor-citas/gestor-citas.scss";

const diasSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default function LlamadasNuevoContenido() {
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState("00:00");
  const [intentos, setIntentos] = useState(3);
  const [blockedTimes, setBlockedTimes] = useState([
    { day: "Lunes", from: "09:00", to: "12:00" },
  ]);
  const [newBlock, setNewBlock] = useState({
    day: "Lunes",
    from: "09:00",
    to: "12:00",
  });
  const [sendType, setSendType] = useState("lead");
  const [specificDate, setSpecificDate] = useState("");
  const [specificHour, setSpecificHour] = useState("");

  const handleAddBlockedTime = () => {
    setBlockedTimes([...blockedTimes, { ...newBlock }]);
  };
  const handleRemoveBlockedTime = (idx) => {
    setBlockedTimes(blockedTimes.filter((_, i) => i !== idx));
  };
  const handleNewBlockChange = (field, value) => {
    setNewBlock({ ...newBlock, [field]: value });
  };

  return (
    <Box sx={{ background: "#f7f8fc", minHeight: "100vh", p: 4 }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ color: "#8a8fa7", fontWeight: 500, fontSize: 16 }}>
          Automatización {">"}{" "}
          <b style={{ color: "#222" }}>Mensajes de recuperación</b>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Box sx={{ flex: 2 }}>
          <Card sx={{ p: 4, mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Llamadas
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 500, mb: 1 }}>
                Nombre del contenido
              </Typography>
              <TextField
                placeholder="Escribe el nombre de tu contenido o impacto"
                fullWidth
                sx={{ background: "#fff" }}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 500, mb: 1 }}>Prompt</Typography>
              <TextField
                placeholder="Configura el contenido de tu mensaje aquí"
                fullWidth
                multiline
                minRows={4}
                sx={{ background: "#fff", mt: 1 }}
                inputProps={{ maxLength: 1024 }}
              />
            </Box>
            {/* Configuración de envío */}
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Configuración de envío
            </Typography>
            <Typography sx={{ color: "#8a8fa7", mb: 3 }}>
              En esta sección, podrás configurar el envío de tu campaña.
            </Typography>

            <Stack spacing={3}>
              <Box>
                <FormControl>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      onClick={() => setSendType("fecha")}
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border:
                          sendType === "fecha"
                            ? "2px solid #6386f9"
                            : "2px solid #7b9cff",
                        background:
                          sendType === "fecha"
                            ? "rgba(99,134,249,0.15)"
                            : "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        boxShadow:
                          sendType === "fecha" ? "0 0 0 4px #e8edfb" : "none",
                        "&:hover": {
                          border: "2px solid #3451a1",
                          background: "rgba(52,81,161,0.10)",
                        },
                      }}
                    >
                      {sendType === "fecha" && (
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: "#6386f9",
                          }}
                        />
                      )}
                    </Box>
                    <Typography sx={{ fontWeight: 500 }}>
                      Envío cuando el cliente no contestó el mensaje de texto inicial.
                    </Typography>
                  </Stack>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      onClick={() => setSendType("lead")}
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border:
                          sendType === "lead"
                            ? "2px solid #6386f9"
                            : "2px solid #7b9cff",
                        background:
                          sendType === "lead"
                            ? "rgba(99,134,249,0.15)"
                            : "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        boxShadow:
                          sendType === "lead" ? "0 0 0 4px #e8edfb" : "none",
                        "&:hover": {
                          border: "2px solid #3451a1",
                          background: "rgba(52,81,161,0.10)",
                        },
                      }}
                    >
                      {sendType === "lead" && (
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: "#6386f9",
                          }}
                        />
                      )}
                    </Box>
                    <Typography sx={{ fontWeight: 500 }}>
                      Envío después de que el cliente no responda
                    </Typography>
                  </Stack>
                </FormControl>
                {sendType === "lead" && (
                  <Box sx={{ pl: 4, pt: 2 }}>
                    <Typography
                      sx={{
                        fontSize: 16,
                        color: "#555",
                        mb: 2,
                        fontWeight: 400,
                      }}
                    >
                      Ingresa el número de días u horas para realizar el envío
                      de tu mensaje de recuperación.
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={3}
                      alignItems="flex-end"
                      sx={{ mb: 2 }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            mb: 1,
                            fontSize: 15,
                            color: "#444",
                          }}
                        >
                          Días
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1.5px solid #bdbdbd",
                            borderRadius: "8px",
                            px: 0,
                            py: 0,
                            width: 160,
                            height: 44,
                            background: "#fff",
                          }}
                        >
                          <Button
                            variant="text"
                            size="small"
                            onClick={() => setDays(days - 1)}
                            sx={{
                              minWidth: 0,
                              fontSize: 30,
                              color: "#444",
                              fontWeight: 400,
                              p: 0,
                              height: 44,
                            }}
                          >
                            -
                          </Button>
                          <Typography
                            sx={{
                              mx: 3,
                              fontSize: 16,
                              color: "#222",
                              fontWeight: 400,
                              minWidth: 32,
                              textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              height: "100%",
                            }}
                          >
                            {days}
                          </Typography>
                          <Button
                            variant="text"
                            size="small"
                            onClick={() => setDays(days + 1)}
                            sx={{
                              minWidth: 0,
                              fontSize: 20,
                              color: "#444",
                              fontWeight: 400,
                              p: 0,
                              height: 44,
                            }}
                          >
                            +
                          </Button>
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            mb: 1,
                            fontSize: 15,
                            color: "#444",
                          }}
                        >
                          Horas
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            border: "1.5px solid #bdbdbd",
                            borderRadius: "8px",
                            px: 0,
                            py: 0,
                            width: 160,
                            height: 44,
                            background: "#fff",
                          }}
                        >
                          <TextField
                            type="time"
                            size="small"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                            sx={{
                              width: 110,
                              border: "none",
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: 0,
                              },
                              "& input": {
                                textAlign: "center",
                                fontSize: 16,
                                color: "#888",
                                p: 0,
                                height: 44,
                                background: "transparent",
                              },
                              background: "transparent",
                            }}
                            InputLabelProps={{ shrink: true }}
                          />
                        </Box>
                      </Box>
                    </Stack>
                    <Box sx={{ mt: 2 }}>
                      <Typography sx={{ fontWeight: 500 }}>
                        Bloquear horarios
                      </Typography>
                      <Typography
                        sx={{ color: "#8a8fa7", mb: 2, fontSize: 15 }}
                      >
                        Selecciona los días y rango de horas en los que no se
                        deberá enviar el mensaje de recuperación.
                      </Typography>
                      {blockedTimes.map((block, idx) => (
                        <Stack
                          key={idx}
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          mb={1}
                        >
                          <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel>Días</InputLabel>
                            <Select
                              value={block.day}
                              label="Días"
                              onChange={(e) => {
                                const updated = [...blockedTimes];
                                updated[idx].day = e.target.value;
                                setBlockedTimes(updated);
                              }}
                            >
                              <MenuItem value="Lunes">Lunes</MenuItem>
                              <MenuItem value="Martes">Martes</MenuItem>
                              <MenuItem value="Miércoles">Miércoles</MenuItem>
                              <MenuItem value="Jueves">Jueves</MenuItem>
                              <MenuItem value="Viernes">Viernes</MenuItem>
                              <MenuItem value="Sábado">Sábado</MenuItem>
                              <MenuItem value="Domingo">Domingo</MenuItem>
                            </Select>
                          </FormControl>
                          <TextField
                            label="Desde (horas)"
                            type="time"
                            size="small"
                            value={block.from}
                            onChange={(e) => {
                              const updated = [...blockedTimes];
                              updated[idx].from = e.target.value;
                              setBlockedTimes(updated);
                            }}
                            sx={{ width: 120 }}
                            InputLabelProps={{ shrink: true }}
                          />
                          <TextField
                            label="Hasta (horas)"
                            type="time"
                            size="small"
                            value={block.to}
                            onChange={(e) => {
                              const updated = [...blockedTimes];
                              updated[idx].to = e.target.value;
                              setBlockedTimes(updated);
                            }}
                            sx={{ width: 120 }}
                            InputLabelProps={{ shrink: true }}
                          />
                          <IconButton
                            onClick={() => handleRemoveBlockedTime(idx)}
                            color="primary"
                          >
                            <RemoveCircleOutlineIcon />
                          </IconButton>
                        </Stack>
                      ))}
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mt={1}
                      >
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                          <InputLabel>Días</InputLabel>
                          <Select
                            value={newBlock.day}
                            label="Días"
                            onChange={(e) =>
                              handleNewBlockChange("day", e.target.value)
                            }
                          >
                            <MenuItem value="Lunes">Lunes</MenuItem>
                            <MenuItem value="Martes">Martes</MenuItem>
                            <MenuItem value="Miércoles">Miércoles</MenuItem>
                            <MenuItem value="Jueves">Jueves</MenuItem>
                            <MenuItem value="Viernes">Viernes</MenuItem>
                            <MenuItem value="Sábado">Sábado</MenuItem>
                            <MenuItem value="Domingo">Domingo</MenuItem>
                          </Select>
                        </FormControl>
                        <TextField
                          label="Desde (horas)"
                          type="time"
                          size="small"
                          value={newBlock.from}
                          onChange={(e) =>
                            handleNewBlockChange("from", e.target.value)
                          }
                          sx={{ width: 120 }}
                          InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                          label="Hasta (horas)"
                          type="time"
                          size="small"
                          value={newBlock.to}
                          onChange={(e) =>
                            handleNewBlockChange("to", e.target.value)
                          }
                          sx={{ width: 120 }}
                          InputLabelProps={{ shrink: true }}
                        />
                        <Button
                          variant="text"
                          sx={{
                            fontSize: { xs: "12px", sm: "14px" },
                            textTransform: "none",
                            borderRadius: "10px",
                            "&:hover": {
                              backgroundColor: "#e6ebff",
                              color: "#2a437c",
                              boxShadow: "none",
                            },
                          }}
                          onClick={handleAddBlockedTime}
                        >
                          + Añadir horarios
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                )}
              </Box>
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
              <Button
                variant="secondary"
                sx={{
                  background: "#6a8bff",
                  color: "#fff",
                  borderRadius: 2,
                  fontWeight: 400,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#3f64b8",
                  },
                }}
              >
                Crear mensaje
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
