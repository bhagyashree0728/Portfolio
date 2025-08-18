import React from 'react';
import { Box, Container, Typography, Button, Paper, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  // ✅ Public assets are accessible from root
  const resumeUrl = '/assets/resume.pdf';
  const bustedUrl = `${resumeUrl}?t=${Date.now()}`; // cache-busting

  return (
    <Box
      id="resume"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
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
            Resume
          </Typography>

          <Grid container spacing={4}>
            {/* Left section - download buttons */}
            <Grid item xs={12} md={5}>
              <Paper
                sx={{
                  p: 4,
                  backgroundColor: 'background.paper',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
                  Download / View
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  View the resume on the right. You can also open it in a new tab and download it.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 'auto' }}>
                  <Button component="a" variant="contained" href={bustedUrl} download>
                    Download PDF
                  </Button>
                  <Button
                    component="a"
                    variant="outlined"
                    href={bustedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View in New Tab
                  </Button>
                </Stack>
              </Paper>
            </Grid>

            {/* Right section - inline PDF preview */}
            <Grid item xs={12} md={7}>
              <Paper sx={{ p: 2, backgroundColor: 'background.paper', height: '100%' }}>
                <Box sx={{ width: '100%', height: { xs: 480, md: 640 } }}>
                  {/* Primary inline render */}
                  <embed src={bustedUrl} type="application/pdf" width="100%" height="100%" />

                  {/* Fallbacks */}
                  <object data={bustedUrl} type="application/pdf" width="100%" height="100%">
                    <iframe
                      src={bustedUrl}
                      title="Resume Preview"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        p: 2,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" textAlign="center">
                        Unable to display the resume inline. Use the buttons to view or download it.
                      </Typography>
                    </Box>
                  </object>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Resume;
