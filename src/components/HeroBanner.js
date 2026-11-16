import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '60px', md: '40px', xs: '20px' },
      px: { lg: '50px', md: '30px', sm: '20px', xs: '15px' },
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Subtle Watermark in background */}
    <Typography
      fontWeight={900}
      color="#FF2625"
      sx={{
        opacity: '0.03',
        display: { lg: 'block', xs: 'none' },
        fontSize: { xl: '200px', lg: '150px' },
        letterSpacing: '8px',
        position: 'absolute',
        bottom: '-20px',
        left: '20px',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1,
        zIndex: 0,
      }}
    >
      FITNESS
    </Typography>

    <Stack
      direction={{ lg: 'row', xs: 'column' }}
      alignItems="center"
      justifyContent="space-between"
      spacing={{ lg: 6, md: 4, xs: 5 }}
      sx={{ position: 'relative', zIndex: 1, width: '100%' }}
    >
      {/* Left Column: Text & Actions */}
      <Box sx={{ flex: '1 1 55%', maxWidth: { lg: '620px', xs: '100%' }, zIndex: 2 }}>
        {/* Category Pill */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FFEAEA',
            color: '#FF2625',
            px: '14px',
            py: '6px',
            borderRadius: '20px',
            fontWeight: '700',
            fontSize: '13px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            mb: '22px',
            boxShadow: '0 2px 10px rgba(255, 38, 37, 0.12)',
          }}
        >
          <span style={{ fontSize: '10px' }}>🔴</span> PRO WORKOUT INTELLIGENCE • 1,000+ DRILLS
        </Box>

        {/* Main Headline */}
        <Typography
          fontWeight={800}
          sx={{
            fontSize: { lg: '54px', md: '44px', xs: '34px' },
            lineHeight: { lg: '64px', xs: '44px' },
            color: '#1A1A1A',
          }}
          mb="20px"
        >
          Unleash Your <span style={{ color: '#FF2625' }}>Strength</span>.<br />
          Master Every Movement.
        </Typography>

        {/* Subtitle */}
        <Typography
          fontSize={{ lg: '18px', xs: '15px' }}
          fontFamily="Josefin Sans"
          color="#595959"
          lineHeight="30px"
          maxWidth="520px"
          mb="32px"
        >
          Discover scientifically categorized workout routines, HD animated demonstrations, and muscle targeting guides tailored for maximum results.
        </Typography>

        {/* Quick Metrics */}
        <Stack direction="row" spacing={{ sm: 4, xs: 2.5 }} mb="36px" flexWrap="wrap">
          <Box>
            <Typography fontWeight="800" fontSize={{ sm: '26px', xs: '20px' }} color="#FF2625">
              1,300+
            </Typography>
            <Typography fontSize="13px" color="#7A7A7A" fontWeight="600">
              Workouts Library
            </Typography>
          </Box>
          <Box sx={{ borderLeft: '1px solid #E5E5E5', pl: { sm: 4, xs: 2.5 } }}>
            <Typography fontWeight="800" fontSize={{ sm: '26px', xs: '20px' }} color="#1A1A1A">
              10+
            </Typography>
            <Typography fontSize="13px" color="#7A7A7A" fontWeight="600">
              Target Muscles
            </Typography>
          </Box>
          <Box sx={{ borderLeft: '1px solid #E5E5E5', pl: { sm: 4, xs: 2.5 } }}>
            <Typography fontWeight="800" fontSize={{ sm: '26px', xs: '20px' }} color="#1A1A1A">
              4K HD
            </Typography>
            <Typography fontSize="13px" color="#7A7A7A" fontWeight="600">
              Video Tutorials
            </Typography>
          </Box>
        </Stack>

        {/* Dual CTA Buttons */}
        <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2} mb="20px">
          <a
            href="#exercises"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #FF2625 0%, #D61A19 100%)',
              padding: '16px 36px',
              fontSize: '17px',
              fontWeight: '700',
              color: '#fff',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(255, 38, 37, 0.35)',
              transition: '0.3s ease',
            }}
          >
            Explore Exercises ↓
          </a>
          <a
            href="#programs"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center',
              background: '#fff',
              border: '2px solid #FF2625',
              padding: '14px 28px',
              fontSize: '17px',
              fontWeight: '700',
              color: '#FF2625',
              borderRadius: '12px',
              transition: '0.3s ease',
            }}
          >
            Training Programs ⚡
          </a>
        </Stack>
      </Box>

      {/* Right Column: Contained Responsive Image with Floating Badges */}
      <Box
        sx={{
          flex: '1 1 45%',
          display: 'flex',
          justifyContent: { lg: 'flex-end', xs: 'center' },
          alignItems: 'center',
          position: 'relative',
          width: '100%',
        }}
      >
        <Box sx={{ position: 'relative', display: 'inline-block', maxWidth: '100%' }}>
          <img
            src={HeroBannerImage}
            alt="hero-banner"
            className="hero-banner-img"
          />

          {/* Floating Card: Precision Form */}
          <Box
            sx={{
              position: 'absolute',
              top: { sm: '20%', xs: '15%' },
              left: { sm: '-25px', xs: '-8px' },
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              p: { sm: '12px 18px', xs: '8px 12px' },
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: { sm: '12px', xs: '8px' },
              border: '1px solid rgba(255, 38, 37, 0.15)',
              zIndex: 3,
            }}
          >
            <Box sx={{ bgcolor: '#FFEAEA', p: { sm: '8px', xs: '6px' }, borderRadius: '10px', fontSize: { sm: '20px', xs: '16px' } }}>
              🎯
            </Box>
            <Box>
              <Typography fontWeight="800" fontSize={{ sm: '13px', xs: '11px' }} color="#1A1A1A">
                Precision Form
              </Typography>
              <Typography fontSize={{ sm: '11px', xs: '10px' }} color="#7A7A7A">
                Joint-safe biomechanics
              </Typography>
            </Box>
          </Box>

          {/* Floating Card: Calorie Burn */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { sm: '12%', xs: '8%' },
              right: { sm: '-20px', xs: '-8px' },
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              p: { sm: '12px 18px', xs: '8px 12px' },
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: { sm: '12px', xs: '8px' },
              border: '1px solid rgba(255, 38, 37, 0.15)',
              zIndex: 3,
            }}
          >
            <Box sx={{ bgcolor: '#FFF5E5', p: { sm: '8px', xs: '6px' }, borderRadius: '10px', fontSize: { sm: '20px', xs: '16px' } }}>
              🔥
            </Box>
            <Box>
              <Typography fontWeight="800" fontSize={{ sm: '13px', xs: '11px' }} color="#1A1A1A">
                High Metabolic Burn
              </Typography>
              <Typography fontSize={{ sm: '11px', xs: '10px' }} color="#7A7A7A">
                Optimal calorie expenditure
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  </Box>
);

export default HeroBanner;
