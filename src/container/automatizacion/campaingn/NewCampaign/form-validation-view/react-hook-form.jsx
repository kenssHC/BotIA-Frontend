import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

// Mock data for content types
const contentTypes = [
  { value: 'texto', label: 'Texto' },
  { value: 'imagen', label: 'Imagen' },
  { value: 'video', label: 'Video' },
];

export const ReactHookForm = ({ handleBack, setValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const contentType = watch('contentType');

  const onSubmit = (data) => {
    setValues(data);
  };

  return (
    <Card
      sx={{
        boxShadow: 'none',
        backgroundColor: '#FFFFFF',
        height: '100%',
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '20px', sm: '24px' },
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        Configuración de contenido
      </Typography>

      <Typography
        sx={{
          color: '#6B7280',
          fontSize: { xs: '16px', sm: '18px' },
          mb: 3,
        }}
      >
        Completa los detalles del contenido de tu campaña.
      </Typography>

      <Divider
        sx={{
          borderColor: '#E5E7EB',
          mb: 3,
          width: '100%',
        }}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl fullWidth>
            <InputLabel>Tipo de contenido</InputLabel>
            <Select
              {...register('contentType', { required: 'Este campo es obligatorio' })}
              label="Tipo de contenido"
              error={!!errors.contentType}
            >
              {contentTypes.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
            {errors.contentType && (
              <Typography color="error" variant="caption">
                {errors.contentType.message}
              </Typography>
            )}
          </FormControl>

          <TextField
            {...register('title', { required: 'Este campo es obligatorio' })}
            label="Título"
            fullWidth
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            {...register('description', { required: 'Este campo es obligatorio' })}
            label="Descripción"
            fullWidth
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          {contentType === 'imagen' && (
            <TextField
              {...register('imageUrl', { required: 'Este campo es obligatorio' })}
              label="URL de la imagen"
              fullWidth
              error={!!errors.imageUrl}
              helperText={errors.imageUrl?.message}
            />
          )}

          {contentType === 'video' && (
            <TextField
              {...register('videoUrl', { required: 'Este campo es obligatorio' })}
              label="URL del video"
              fullWidth
              error={!!errors.videoUrl}
              helperText={errors.videoUrl?.message}
            />
          )}

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              onClick={handleBack}
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                borderRadius: '10px',
              }}
            >
              Volver
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                borderRadius: '10px',
              }}
            >
              Crear campaña
            </Button>
          </Stack>
        </Stack>
      </form>
    </Card>
  );
}; 