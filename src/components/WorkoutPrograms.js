import React from 'react';
import { Box, Typography, Stack, Card, CardContent, Chip, Button, Grid } from '@mui/material';

const programs = [
  {
    title: 'Push • Pull • Legs (PPL)',
    category: 'Hypertrophy & Size',
    level: 'Intermediate',
    duration: '45-60 min / session',
    frequency: '6 Days / Week',
    muscles: ['Chest', 'Back', 'Shoulders', 'Legs', 'Arms'],
    color: '#FF2625',
    emoji: '⚡',
    description: 'The golden standard bodybuilding split. Alternates pushing, pulling, and lower body exercises for optimal muscle protein synthesis.',
  },
  {
    title: 'Upper / Lower Power Split',
    category: 'Pure Strength',
    level: 'Advanced',
    duration: '50-65 min / session',
    frequency: '4 Days / Week',
    muscles: ['Upper Body', 'Lower Body', 'Core'],
    color: '#E01E1D',
    emoji: '🏋️',
    description: 'Combines heavy compound lifts with targeted accessories to break strength plateaus while guaranteeing adequate recovery.',
  },
  {
    title: 'Full Body Conditioning',
    category: 'Fat Loss & Stamina',
    level: 'Beginner',
    duration: '35-45 min / session',
    frequency: '3 Days / Week',
    muscles: ['Cardio', 'Waist', 'Back', 'Legs'],
    color: '#FF6B6B',
    emoji: '🔥',
    description: 'High-density workout routine designed to spike metabolic burn, strengthen functional core muscles, and elevate athletic endurance.',
  },
  {
    title: 'Mobility & Active Recovery',
    category: 'Joint Health & Flex',
    level: 'All Levels',
    duration: '20-30 min / session',
    frequency: '2-3 Days / Week',
    muscles: ['Neck', 'Spine', 'Hips', 'Hamstrings'],
    color: '#FA8072',
    emoji: '🧘',
    description: 'Essential restorative drills to enhance range of motion, alleviate muscle soreness, and safeguard your joints against sports injuries.',
  },
];

const WorkoutPrograms = () => {
  return (
    <Box
      id="programs"
      sx={{
        mt: { lg: '110px', xs: '60px' },
        p: { lg: '40px', xs: '20px' },
        mx: { lg: '40px', xs: '10px' },
      }}
    >
      <Box textAlign="center" mb="50px">
        <Typography
          color="#FF2625"
          fontWeight="700"
          fontSize="14px"
          letterSpacing="1px"
          textTransform="uppercase"
          mb="10px"
        >
          Curated Training Splits
        </Typography>
        <Typography
          fontWeight="800"
          sx={{ fontSize: { lg: '42px', xs: '30px' }, color: '#1A1A1A' }}
          mb="15px"
        >
          Featured Workout <span style={{ color: '#FF2625' }}>Programs</span>
        </Typography>
        <Typography
          color="#666"
          sx={{ fontSize: { lg: '18px', xs: '15px' }, maxWidth: '680px', mx: 'auto' }}
        >
          Structured training regimens engineered to match your schedule, fitness experience, and athletic ambitions.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {programs.map((program, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '20px',
                p: { xs: 2.5, sm: 3 },
                backgroundColor: '#fff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid #F0F0F0',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(255, 38, 37, 0.12)',
                  borderColor: '#FFE0E0',
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Header Badge */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Box
                    sx={{
                      fontSize: '28px',
                      bgcolor: '#FFF0F0',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '14px',
                    }}
                  >
                    {program.emoji}
                  </Box>
                  <Chip
                    label={program.level}
                    size="small"
                    sx={{
                      fontWeight: '700',
                      fontSize: '12px',
                      bgcolor: program.level === 'Beginner' ? '#E8F5E9' : program.level === 'Intermediate' ? '#FFF8E1' : '#FFEBEE',
                      color: program.level === 'Beginner' ? '#2E7D32' : program.level === 'Intermediate' ? '#F57F17' : '#C62828',
                    }}
                  />
                </Stack>

                <Typography variant="body2" color="#7A7A7A" fontWeight="600" textTransform="uppercase" fontSize="12px">
                  {program.category}
                </Typography>
                <Typography variant="h6" fontWeight="800" color="#1A1A1A" my={1} sx={{ fontSize: '20px', lineHeight: '28px' }}>
                  {program.title}
                </Typography>
                <Typography variant="body2" color="#555" mb={2.5} sx={{ lineHeight: '22px', minHeight: '66px' }}>
                  {program.description}
                </Typography>

                {/* Specs */}
                <Stack spacing={1} mb={2.5} sx={{ bgcolor: '#FAFBFC', p: 1.5, borderRadius: '12px' }}>
                  <Typography fontSize="13px" color="#333" fontWeight="600">
                    ⏱️ {program.duration}
                  </Typography>
                  <Typography fontSize="13px" color="#333" fontWeight="600">
                    📅 {program.frequency}
                  </Typography>
                </Stack>

                {/* Muscle Tags */}
                <Stack direction="row" flexWrap="wrap" gap={0.8} mb={2}>
                  {program.muscles.map((muscle, idx) => (
                    <Chip
                      key={idx}
                      label={muscle}
                      size="small"
                      sx={{
                        fontSize: '11px',
                        bgcolor: '#FFF5F5',
                        color: '#FF2625',
                        fontWeight: '600',
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>

              <Button
                component="a"
                href="#exercises"
                variant="outlined"
                fullWidth
                sx={{
                  color: '#FF2625',
                  borderColor: '#FF2625',
                  borderRadius: '10px',
                  fontWeight: '700',
                  textTransform: 'none',
                  py: '10px',
                  '&:hover': {
                    bgcolor: '#FF2625',
                    color: '#fff',
                    borderColor: '#FF2625',
                  },
                }}
              >
                Browse Exercises →
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkoutPrograms;
