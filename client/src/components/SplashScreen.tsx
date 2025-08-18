import React from 'react';
import { Box, Typography, CircularProgress, Fade, Button } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <Fade in={true} timeout={700}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: '#000',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #000 60%, #fff 30%, #f5f5f5 10%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
            position: 'relative',
            animation: 'popIn 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
            '@keyframes popIn': {
              '0%': { transform: 'scale(0.7)', opacity: 0 },
              '100%': { transform: 'scale(1)', opacity: 1 },
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontWeight: 800,
              letterSpacing: 2,
              textShadow: '0 2px 8px #0008',
              userSelect: 'none',
            }}
          >
            BD
          </Typography>
          <CircularProgress
            size={130}
            thickness={2.5}
            sx={{
              color: '#fff',
              position: 'absolute',
              left: -5,
              top: -5,
              opacity: 0.25,
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: 4,
            opacity: 0,
            animation: 'fadeInUp 1s 0.5s forwards',
            '@keyframes fadeInUp': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 400 }}>
            <TypeAnimation
              sequence={[
                'Welcome to my Portfolio', 1200,
                'Crafting Digital Experiences', 1200,
                "Let's Build Something Great!", 1200
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component="a"
          href="/assets/Bhagyashree_Dhongde_Resume.pdf"
          target="_blank"
          download
        >
          Download Resume
        </Button>
      </Box>
    </Fade>
  );
};

export default SplashScreen; 