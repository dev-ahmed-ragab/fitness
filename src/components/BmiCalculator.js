import React, { useState } from 'react';
import { Box, Stack, Typography, TextField, Button, Card, CardContent, Chip } from '@mui/material';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [statusColor, setStatusColor] = useState('default');

  const calculateBmi = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setMessage('Underweight — Consider a nutrient-dense diet and strength training.');
        setStatusColor('info');
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setMessage('Healthy Weight — Great job! Maintain your routine and keep pushing.');
        setStatusColor('success');
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        setMessage('Overweight — Focus on regular cardio, resistance training, and calorie balance.');
        setStatusColor('warning');
      } else {
        setMessage('Obese — Prioritize consistent workouts and consult a healthcare professional.');
        setStatusColor('error');
      }
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
    setStatusColor('default');
  };

  return (
    <Box
      id="bmi-calculator"
      sx={{
        mt: { lg: '100px', xs: '60px' },
        p: { lg: '40px', xs: '20px' },
        backgroundColor: '#fff',
        borderRadius: '24px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
        mx: { lg: '50px', xs: '15px' },
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#3A1212"
        textAlign="center"
        sx={{ fontSize: { lg: '40px', xs: '28px' } }}
        mb="10px"
      >
        Calculate Your <span style={{ color: '#FF2625' }}>BMI</span> & Fitness Status
      </Typography>
      <Typography
        variant="body1"
        color="#7A7A7A"
        textAlign="center"
        mb="40px"
        sx={{ fontSize: { lg: '18px', xs: '15px' } }}
      >
        Easily check your Body Mass Index to tailor your workout intensity and dietary goals.
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {/* Input Form Card */}
        <Card
          sx={{
            flex: 1,
            p: { xs: 2, sm: 3 },
            borderRadius: '16px',
            border: '1px solid #FFE5E5',
            boxShadow: 'none',
            backgroundColor: '#FFF8F8',
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="700" color="#3A1212" mb="20px">
              Enter Your Metrics
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Weight (kg)"
                variant="outlined"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 75"
                fullWidth
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
              />
              <TextField
                label="Height (cm)"
                variant="outlined"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 178"
                fullWidth
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                }}
              />
              <Stack direction="row" spacing={2} pt={1}>
                <Button
                  variant="contained"
                  onClick={calculateBmi}
                  fullWidth
                  sx={{
                    bgcolor: '#FF2625',
                    color: '#fff',
                    py: '12px',
                    fontWeight: '700',
                    fontSize: '16px',
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#E01E1D' },
                  }}
                >
                  Calculate Now
                </Button>
                {bmi && (
                  <Button
                    variant="outlined"
                    onClick={resetCalculator}
                    sx={{
                      color: '#7A7A7A',
                      borderColor: '#D4D4D4',
                      textTransform: 'none',
                      borderRadius: '8px',
                      '&:hover': { borderColor: '#999' },
                    }}
                  >
                    Reset
                  </Button>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        {/* Results / Pillars Card */}
        <Card
          sx={{
            flex: 1,
            p: { xs: 2, sm: 3 },
            borderRadius: '16px',
            border: '1px solid #EFEFEF',
            boxShadow: 'none',
            backgroundColor: '#FAFBFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <CardContent>
            {bmi ? (
              <Box textAlign="center" py={2}>
                <Typography variant="body2" color="#7A7A7A" textTransform="uppercase" letterSpacing={1}>
                  Your Body Mass Index
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight="800"
                  color="#FF2625"
                  my={1}
                  sx={{ fontSize: { lg: '64px', xs: '48px' } }}
                >
                  {bmi}
                </Typography>
                <Chip
                  label={message.split('—')[0].trim()}
                  color={statusColor}
                  sx={{ fontWeight: '700', fontSize: '15px', py: 2, px: 1, mb: 2 }}
                />
                <Typography variant="body1" color="#4F4C4C" mt={1}>
                  {message}
                </Typography>
              </Box>
            ) : (
              <Box>
                <Typography variant="h6" fontWeight="700" color="#3A1212" mb="16px">
                  Training Pillars
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography fontSize="24px">🎯</Typography>
                    <Box>
                      <Typography fontWeight="700" fontSize="15px" color="#3A1212">
                        Precision Execution
                      </Typography>
                      <Typography fontSize="13px" color="#7A7A7A">
                        Proper posture maximizes muscle activation and protects joints.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography fontSize="24px">⏱️</Typography>
                    <Box>
                      <Typography fontWeight="700" fontSize="15px" color="#3A1212">
                        Consistent Recovery
                      </Typography>
                      <Typography fontSize="13px" color="#7A7A7A">
                        Allow 48 hours for trained muscle groups to repair and grow.
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography fontSize="24px">💧</Typography>
                    <Box>
                      <Typography fontWeight="700" fontSize="15px" color="#3A1212">
                        Optimal Hydration
                      </Typography>
                      <Typography fontSize="13px" color="#7A7A7A">
                        Drink at least 2.5–3 liters of water to sustain high energy levels.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            )}
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default BmiCalculator;
