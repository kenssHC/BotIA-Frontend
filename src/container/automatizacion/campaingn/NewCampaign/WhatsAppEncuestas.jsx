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
  Radio,
  RadioGroup,
  FormControlLabel,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function WhatsAppEncuestas() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "",
      type: "text",
      options: [],
      notificationOptionIndex: null,
    },
  ]);
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState("00:00");
  const [blockDays, setBlockDays] = useState("Lunes");
  const [blockFrom, setBlockFrom] = useState("09:00");
  const [blockTo, setBlockTo] = useState("12:00");
  const [specificDate, setSpecificDate] = useState("");
  const [specificHour, setSpecificHour] = useState("09:00");
  const [sendType, setSendType] = useState("lead");
  const [blockedTimes, setBlockedTimes] = useState([
    { day: "Lunes", from: "09:00", to: "12:00" },
  ]);
  const [newBlock, setNewBlock] = useState({
    day: "Lunes",
    from: "09:00",
    to: "12:00",
  });
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        text: "",
        type: "text",
        options: [],
        notificationOptionIndex: null,
      },
    ]);
  };

  const handleRemoveQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleQuestionChange = (id, field, value) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const handleAddOption = (questionId) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId ? { ...q, options: [...q.options, ""] } : q
      )
    );
  };

  const handleRemoveOption = (questionId, optionIndex) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.filter((_, i) => i !== optionIndex),
            }
          : q
      )
    );
  };

  const handleOptionChange = (questionId, optionIndex, value) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((opt, i) =>
                i === optionIndex ? value : opt
              ),
            }
          : q
      )
    );
  };

  const handleNotificationOptionChange = (questionId, optionIndex) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              notificationOptionIndex:
                q.notificationOptionIndex === optionIndex ? null : optionIndex,
            }
          : q
      )
    );
  };

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

      {/* Layout principal */}
      <Box sx={{ display: "flex", gap: 3 }}>
        {/* Columna izquierda */}
        <Box sx={{ flex: 2 }}>
          <Card sx={{ p: 4, mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              WhatsApp - Encuestas
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    fontSize: "15px",
                    color: "#2f3542",
                  }}
                >
                  Nombre del contenido
                </Typography>
                <TextField
                  placeholder="Escribe el nombre de tu contenido o impacto"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{
                    background: "#fff",
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#3451a1",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3451a1",
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "#2f3542",
                  }}
                >
                  Configuración de encuesta
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    fontSize: "15px",
                    color: "#2f3542",
                  }}
                >
                  Encabezado de la encuesta
                </Typography>

                <TextField
                  placeholder="Escribe el texto introductorio de la encuesta"
                  fullWidth
                  multiline
                  minRows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{
                    background: "#fff",
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#3451a1",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3451a1",
                      },
                    },
                  }}
                />
                <Typography
                  sx={{
                    color: "#707275",
                    fontSize: "12px",
                    mt: 1,
                    textAlign: "right",
                  }}
                >
                  {message.length}/1024 caracteres
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    fontSize: "15px",
                    color: "#2f3542",
                  }}
                >
                  Lista de preguntas y respuestas
                </Typography>
              </Box>
            </Box>

            {questions.map((question) => (
              <Card
                key={question.id}
                sx={{
                  background: "#f8faff",
                  p: 3,
                  mb: 3,
                  borderRadius: 2,
                  border: "1px solid #e0e7ff",
                  boxShadow: "none",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#2f3542",
                    fontSize: "16px",
                    mb: 2,
                  }}
                >
                  Pregunta {question.id}
                </Typography>

                <TextField
                  placeholder="Escribe tu pregunta aquí"
                  fullWidth
                  multiline
                  rows={2}
                  value={question.text}
                  onChange={(e) =>
                    handleQuestionChange(question.id, "text", e.target.value)
                  }
                  sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                      background: "#ffffff",
                      borderRadius: "8px",
                      "&:hover fieldset": {
                        borderColor: "#3451a1",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3451a1",
                      },
                    },
                  }}
                />

                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#2f3542",
                      fontSize: "16px",
                      mb: 2,
                    }}
                  >
                    Respuesta
                  </Typography>

                  {question.options.map((option, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <TextField
                        placeholder="Escribe tu opción de respuesta aquí"
                        fullWidth
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(question.id, idx, e.target.value)
                        }
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            background: "#ffffff",
                            borderRadius: "8px",
                            "&:hover fieldset": {
                              borderColor: "#3451a1",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3451a1",
                            },
                          },
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "14px",
                              color: "#2f3542",
                              fontWeight: 500,
                            }}
                          >
                            Notificación
                          </Typography>
                          <ClickAwayListener
                            onClickAway={() => setTooltipOpen(false)}
                          >
                            <Tooltip
                              PopperProps={{
                                disablePortal: true,
                              }}
                              onClose={() => setTooltipOpen(false)}
                              open={tooltipOpen}
                              disableFocusListener
                              disableHoverListener
                              disableTouchListener
                              title="Elige la respuesta que disparará la notificación."
                              placement="top"
                            >
                              <InfoOutlinedIcon
                                onClick={() => setTooltipOpen(!tooltipOpen)}
                                sx={{
                                  fontSize: 16,
                                  color: "#666",
                                  cursor: "pointer",
                                }}
                              />
                            </Tooltip>
                          </ClickAwayListener>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <IconButton
                            onClick={() =>
                              handleNotificationOptionChange(question.id, idx)
                            }
                            sx={{
                              color: "#3451a1",
                              padding: "4px",
                              "&:hover": {
                                background: "rgba(52, 81, 161, 0.1)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: 17,
                                height: 17,
                                borderRadius: "50%",
                                border: "2px solid #3451a1",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background:
                                  question.notificationOptionIndex === idx
                                    ? "#3451a1"
                                    : "transparent",
                                transition: "all 0.2s",
                              }}
                            >
                              {question.notificationOptionIndex === idx && (
                                <Box
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "white",
                                  }}
                                />
                              )}
                            </Box>
                          </IconButton>
                          <IconButton
                            onClick={() => handleRemoveOption(question.id, idx)}
                            sx={{
                              color: "#3451a1",
                              padding: "4px",
                              "&:hover": {
                                background: "rgba(52, 81, 161, 0.1)",
                              },
                            }}
                          >
                            <RemoveCircleOutlineIcon sx={{ fontSize: 20 }} />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  ))}

                  <Button
                    variant="primary"
                    onClick={() => handleAddOption(question.id)}
                    startIcon={<AddIcon />}
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
                  >
                    Añadir respuesta
                  </Button>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    onClick={() => handleRemoveQuestion(question.id)}
                    sx={{
                      color: "#3451a1",
                      "&:hover": {
                        background: "rgba(52, 81, 161, 0.1)",
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Card>
            ))}

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleAddQuestion}
                sx={{
                  mb: 4,
                  color: "#3451a1",
                  borderColor: "#3451a1",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#e6ebff",
                    color: "#2a437c",
                    boxShadow: "none",
                  },
                }}
              >
                Añadir pregunta
              </Button>
            </Box>

            {/* Configuración de envío */}
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Configuración de envío
            </Typography>
            <Typography sx={{ color: "#8a8fa7", mb: 3 }}>
              En esta sección, podrás configurar el envío de tu campaña.
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Stack spacing={3}>
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
                      Envío después del impacto anterior
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
                      de tu campaña.
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
                        Selecciona los días en los que no se deberá enviar la
                        campaña.
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
                      Envío en una fecha específica
                    </Typography>
                  </Stack>
                </FormControl>
                {sendType === "fecha" && (
                  <Box sx={{ pl: 4, pt: 2 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography>Fecha</Typography>
                      <TextField
                        size="small"
                        type="date"
                        value={specificDate}
                        onChange={(e) => setSpecificDate(e.target.value)}
                        sx={{ width: 150 }}
                      />
                      <Typography>Horas</Typography>
                      <TextField
                        size="small"
                        value={specificHour}
                        onChange={(e) => setSpecificHour(e.target.value)}
                        sx={{ width: 80 }}
                      />
                    </Stack>
                  </Box>
                )}
              </Box>
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
              <Button
                variant="secondary"
                sx={{
                  ontSize: { xs: "14px", sm: "16px" },
                  borderRadius: "10px",
                  color: "#3451a1",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#f5f8ff",
                    color: "#3451a1",
                    boxShadow: "none",
                  },
                }}
              >
                Solicitar aprobación
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
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Typography sx={{ fontSize: 15, color: "#222" }}>
                    {message || "Mensaje inicial de la encuesta"}
                  </Typography>
                  {questions.map((question) => (
                    <Box
                      key={question.id}
                      sx={{
                        background: "#fff",
                        borderRadius: 2,
                        p: 2,
                      }}
                    >
                      <Typography sx={{ fontWeight: 500, mb: 1 }}>
                        {question.text || "Pregunta de la encuesta"}
                      </Typography>
                      {question.type === "text" ? (
                        <TextField
                          placeholder="Tu respuesta"
                          size="small"
                          fullWidth
                        />
                      ) : (
                        <Stack spacing={1}>
                          {question.options.map((option, idx) => (
                            <FormControlLabel
                              key={idx}
                              control={<Radio size="small" />}
                              label={option || `Opción ${idx + 1}`}
                            />
                          ))}
                        </Stack>
                      )}
                    </Box>
                  ))}
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
}
