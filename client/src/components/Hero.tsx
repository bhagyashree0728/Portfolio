import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles setup
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#64ffda',
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0005;
        particlesRef.current.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (particlesRef.current) {
        scene.remove(particlesRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
        <Box
        ref={containerRef}
          sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                mb: 2,
              }}
            >
                Hi, I'm Bhagyashree Dhongde
            </Typography>
            <Typography
              variant="h2"
              sx={{
                  color: 'text.primary',
                  mb: 3,
              }}
            >
                <Typewriter
                  options={{
                    strings: [
                      'Software Developer',
                      'Angular Developer',
                  'Full Stack Developer',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
              />
            </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '600px',
                }}
              >
                I'm a passionate Software Developer specializing in Angular and full-stack development. 
                Currently pursuing MCA at SPITIANS, I build innovative solutions that combine cutting-edge 
                technology with user-centric design.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                  href="#contact"
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Get in Touch
              </Button>
                <Button
                variant="outlined"
                  href="/assets/resume.pdf"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      color: 'primary.dark',
                    },
                  }}
                >
                  View Resume
                </Button>
            </Box>
          </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Box
                component="img"
                src="/assets/gauri.jpg"
                alt="Bhagyashree portrait"
                loading="lazy"
                sx={{
                  width: '100%',
                  maxWidth: 420,
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                  mx: 'auto',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
                  backgroundColor: 'background.paper',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
