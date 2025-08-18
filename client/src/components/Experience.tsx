import React from 'react';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Solution Software Developer (Angular)',
    company: 'Visheshan Software',
    period: 'Jun 2023 – Jul 2024',
    location: 'Mumbai, IN',
    description: [
      'Developed and maintained multiple Angular applications with TypeScript, HTML, CSS, and JavaScript.',
      'Integrated UI elements such as charts, tables, forms, and other interactive features into the application using Angular Material and the RxJS library.'
    ]
  },
  {
    title: 'Technical Organizer',
    company: 'Iskra.Tech (TY BSc.IT)',
    period: '',
    location: '',
    description: [
      'Led the Technical Execution of Iskra.Tech, organizing and managing the Tech Quiz and Mini Hackathon, ensuring smooth event operations, question curation, and participant engagement.',
      'Designed and supervised the technical aspects of the event, including problem statements, evaluation criteria, and digital tools to enhance the competitive experience for participants.'
    ]
  },
  {
    title: 'NSS Unit Member',
    company: 'TY BSC.IT and SY BSC.IT',
    period: 'June 2021 – July 2023',
    location: '',
    description: [
      'Volunteer work as NSS Unit Member.'
    ]
  }
];

const Experience = () => (
  <Box id="experience" sx={{ py: 8, background: 'background.paper' }}>
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, idx) => (
            <Grid item xs={12} key={idx}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography variant="h5" fontWeight={600}>{exp.title}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{exp.company} {exp.location && `| ${exp.location}`}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">{exp.period}</Typography>
                  <List>
                    {exp.description.map((desc, i) => (
                      <ListItem key={i} sx={{ pl: 0 }}>
                        <ListItemText primary={desc} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default Experience; 