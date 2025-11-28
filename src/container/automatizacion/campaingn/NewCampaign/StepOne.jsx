import { Box, Button, Card, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import { DynamicFilterNew } from './DynamicFilterNew';

export const PasoUno = ({ value, setValue, filter, setFilter, errors, handleNext }) => {
  const onNext = () => {
    handleNext(value, filter);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        p: 3,
      }}>
      <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 1 }}>
        Datos de campañas
      </Typography>
      <Typography sx={{ color: '#6B7280', fontSize: { xs: '16px', sm: '18px' }, mb: 3 }}>
        En esta sección podrás personalizar tu campaña según tus necesidades.
      </Typography>

      <Divider sx={{ borderColor: '#E5E7EB', mb: 3, width: '100%' }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Nombre de campaña
        </Typography>
        <TextField
          placeholder="Escribe el nombre de tu campaña"
          variant="outlined"
          size="medium"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!!errors.value}
          helperText={errors.value}
          InputProps={{
            style: { fontSize: '16px' },
          }}
        />
      </Box>

      <Typography variant='h6' sx={{ fontSize: { xs: '16px', sm: '18px' }, fontWeight: 'bold', mt: 4, mb: 2 }}>
        Selección de audiencia
      </Typography>
      <Typography sx={{ color: '#6B7280', fontSize: { xs: '14px', sm: '16px' }, mb: 3 }}>
        Segmenta tu audiencia aplicando filtros para definir tu público objetivo en la campaña.
      </Typography>

      <Box
        sx={{
          border: '1px solid #B0B0B0',
          width: '100%',
          borderRadius: '5px',
          p: 2,
        }}>
        <Typography sx={{ fontSize: '14px', mb: 1, color: '#B0B0B0' }}>Filtros</Typography>
        {errors.filter && <Typography sx={{ color: 'red', fontSize: '14px' }}>{errors.filter}</Typography>}
        <hr/>
        <DynamicFilterNew filters={filter} setFilters={setFilter} />
      </Box>

      <Stack direction='row' justifyContent='flex-end' spacing={2} sx={{ mt: 5, mb: 1 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2c4172',
            color: '#fff',
            fontSize: { xs: '14px', sm: '16px' },
            borderRadius: '20px',
            boxShadow: 'none',
            textTransform: 'none',
            paddingX: 4,
            paddingY: 1.5,
            '&:hover': {
              backgroundColor: '#22325a',
              boxShadow: 'none',
            },
          }}
          onClick={onNext}
        >
          Continuar
        </Button>
      </Stack>
    </Card>
  );
}; 