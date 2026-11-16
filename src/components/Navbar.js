import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      gap: { md: '60px', sm: '30px', xs: '15px' },
      mt: { sm: '28px', xs: '14px' },
      justifyContent: 'flex-start',
    }}
    px={{ sm: '40px', xs: '14px' }}
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: '46px', height: '46px', margin: '0px 8px' }}
      />
    </Link>
    <Stack
      direction="row"
      gap={{ md: '36px', sm: '24px', xs: '14px' }}
      fontFamily="Alegreya"
      fontSize={{ sm: '22px', xs: '16px' }}
      alignItems="center"
      flexWrap="wrap"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
          paddingBottom: '2px',
        }}
      >
        Home
      </Link>
      <a href="#programs" style={{ textDecoration: 'none', color: '#3A1212' }}>
        Programs
      </a>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
        Exercises
      </a>
      <a href="#bmi-calculator" style={{ textDecoration: 'none', color: '#3A1212' }}>
        BMI
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
