import React, { useRef, useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );

        setSnackbar({
          open: true,
        message: 'Message sent successfully!',
          severity: 'success',
        });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'primary.main',
              fontWeight: 'bold',
            }}
          >
            Get in Touch
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
                Let's Connect
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part
                of your vision. Feel free to reach out to me through the contact form or via email.
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  Email
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  bhagyashreed0728@gmail.com
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  Phone
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  +91 8291257387
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                  Location
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Mumbai, India
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="form"
                ref={formRef}
                onSubmit={handleSubmit}
                sx={{
                  backgroundColor: 'background.paper',
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                />
            <Button
              type="submit"
              variant="contained"
              size="large"
                  fullWidth
              sx={{
                    backgroundColor: 'primary.main',
                '&:hover': {
                      backgroundColor: 'primary.dark',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 