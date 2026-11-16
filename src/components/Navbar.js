import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      gap: { sm: '123px', xs: '20px' },
      mt: { sm: '32px', xs: '16px' },
      justifyContent: 'flex-start',
    }}
    px={{ sm: '40px', xs: '16px' }}
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: '48px', height: '48px', margin: '0px 10px' }}
      />
    </Link>
    <Stack
      direction="row"
      gap={{ sm: '40px', xs: '20px' }}
      fontFamily="Alegreya"
      fontSize={{ sm: '24px', xs: '18px' }}
      alignItems="center"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
        }}
      >
        Home
      </Link>
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
