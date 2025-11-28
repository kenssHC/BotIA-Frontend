import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Divider,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
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

const WhatsAppMensajeRecuperacion = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState("00:00");
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleRemoveFile = () => setFile(null);

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
      {/* Layout principal */}
      <Box sx={{ display: "flex", gap: 3 }}>
        {/* Columna izquierda */}
        <Box sx={{ flex: 2 }}>
          <Card sx={{ p: 4, mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              WhatsApp
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 500, mb: 1 }}>
                Nombre del contenido
              </Typography>
              <TextField
                placeholder="Escribe el nombre de tu contenido o impacto"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ background: "#fff" }}
              />
            </Box>
            <Typography sx={{ fontWeight: 500, mb: 1 }}>
              Tipo de contenidos
            </Typography>
            <Card sx={{ background: "#f3f6fd", p: 3, mb: 3, borderRadius: 3 }}>
              <Typography sx={{ fontWeight: 600, mb: 2 }}>
                Audiovisual
              </Typography>
              <Box
                sx={{
                  border: "1px dashed #bfc8e6",
                  borderRadius: 2,
                  p: 3,
                  textAlign: "center",
                  background: "#f7f8fc",
                  mb: 2,
                }}
              >
                {!file ? (
                  <>
                    <CloudUploadIcon
                      sx={{ fontSize: 40, color: "#bfc8e6", mb: 1 }}
                    />
                    <Typography sx={{ color: "#8a8fa7", mb: 2 }}>
                      Suelta tu archivo aquí para cargarlo o
                    </Typography>
                    <Button
                      variant="outlined"
                      component="label"
                      sx={{
                        borderColor: "#bfc8e6",
                        color: "#3451a1",
                        fontWeight: "bold",
                        borderRadius: 2,
                      }}
                    >
                      Seleccionar archivo
                      <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#fff",
                      borderRadius: 2,
                      p: 2,
                      border: "1px solid #e0e4f7",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <InsertDriveFileIcon sx={{ color: "#3451a1", mr: 1 }} />
                      <Typography>{file.name}</Typography>
                    </Box>
                    <IconButton onClick={handleRemoveFile}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Box>
                )}
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 500, mb: 1 }}>Mensaje</Typography>
                <TextField
                  placeholder="Configura el contenido de tu mensaje aquí"
                  fullWidth
                  multiline
                  minRows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{ background: "#fff", mt: 1 }}
                  inputProps={{ maxLength: 1024 }}
                />
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#8a8fa7",
                    mr: 2,
                    minWidth: 200,
                    textAlign: "right",
                    width: "100%",
                  }}
                >
                  Límite de caracteres: {message.length}/1024
                </Typography>
              </Box>
            </Card>
            {/* Configuración de envío */}
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Configuración de envío
            </Typography>
            <Typography sx={{ color: "#8a8fa7", mb: 3 }}>
              En esta sección, podrás configurar el envío de tu mensaje de recuperación.
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
                      Envío cuando el cliente no contestó la llamada inicial.
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
                      de mensaje de recuperación.
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
        {/* Columna derecha: Vista previa */}
        <Box sx={{ flex: 1 }}>
          <Card sx={{ p: 3, minHeight: 400, background: "#ffffff" }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Vista previa
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  width: 260,
                  height: 520,
                  background: "#fff",
                  borderRadius: 5,
                  boxShadow: 3,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 40,
                    background: "#f7f8fc",
                    borderRadius: 3,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ color: "#3973f7", fontWeight: "bold" }}>
                    NOVALY
                  </Typography>
                  <Box
                    sx={{
                      ml: 1,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: "#b6e6c9",
                      display: "inline-block",
                    }}
                  />
                  <Typography sx={{ color: "#b6e6c9", ml: 1, fontSize: 12 }}>
                    Cuenta de empresa
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    width: "100%",
                    background: "#ece5dd",
                    borderRadius: 3,
                    p: 2,
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: 15, color: "#222" }}>
                    {message ||
                      "¡Hola Carlos!\nSoy Novaly,hace un tiempo que no te vemos por aquí.¡Te extrañamos!\nQueremos invitarte a regresar y disfrutar de todas las novedades que tenemos para ti!"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    placeholder="Mensaje"
                    size="small"
                    fullWidth
                    sx={{ background: "#fff" }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      ml: 1,
                      minWidth: 40,
                      minHeight: 40,
                      borderRadius: "50%",
                      background: "#25d366",
                    }}
                  >
                    <svg width="24" height="24" fill="#fff">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l4.93-1.36A9.953 9.953 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.07 14.93c-.13.13-.3.2-.47.2-.09 0-.18-.02-.27-.05-1.13-.45-2.36-.7-3.33-.7s-2.2.25-3.33.7c-.09.03-.18.05-.27.05-.17 0-.34-.07-.47-.2a.996.996 0 0 1 0-1.41c.13-.13.3-.2.47-.2.09 0 .18.02.27.05 1.13.45 2.36.7 3.33.7s2.2-.25 3.33-.7c.09-.03.18-.05.27-.05.17 0 .34.07.47.2.39.39.39 1.02 0 1.41z" />
                    </svg>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsAppMensajeRecuperacion;
