import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Stack, Tabs, Tab } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'BiteBox – Intelligent Food Delivery System',
    description: 'BiteBox is an intelligent food delivery system that optimizes order assignment, route planning, and resource allocation using smart algorithms to ensure faster deliveries, balanced workloads, and efficient handling of real-time disruptions. Algorithms used: Greedy for nearest-driver assignment and tracking, Priority Queue for dynamic menu listing and recommendations, and Round Robin for fair distribution when drivers are equally qualified or during low-load.',
    image: '/projects/bitebox.svg',
    tags: ['Greedy', 'Priority Queue', 'Round Robin', 'Optimization', 'Logistics'],
    github: 'https://github.com/ShivamAtHub/BiteBox',
    live: 'https://github.com/ShivamAtHub/BiteBox',
    category: 'Web Development',
    type: 'Personal' as const,
  },
  {
    title: 'BookVault – Controlled Library System (Java Spring Boot)',
    description: 'Developed a role-based Library Management System using Java, Spring Boot and SQL for secure data storage/retrieval, featuring book borrowing/return, advanced filters. Integrated a dynamic admin dashboard with graphical analytics of student activity, enhancing visibility of usage trends and user-level insights.',
    image: '/projects/bookvault.svg',
    tags: ['Java', 'Spring Boot', 'SQL', 'Role-Based Access', 'Dashboards'],
    github: 'https://github.com/yourusername/bookvault',
    live: '#',
    category: 'Web Development',
    type: 'Personal' as const,
  },
  {
    title: 'SpendLit – Personal Expense Tracker (MERN Stack)',
    description: 'Built a premium expense tracker using MERN Stack with dynamic forms to manage SIPs, loans, savings, and investments, featuring validation and categorized data display. Implemented CRUD operations with MongoDB, Express.js, React, and Node.js, along with a polished Bootstrap UI, modal popups, and 60-30-10 color-based theming.',
    image: '/projects/spendlit.svg',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Bootstrap'],
    github: 'https://github.com/bhagyashree0728/spendlit',
    live: 'https://spend-lit.vercel.app/',
    category: 'Web Development',
    type: 'Personal' as const,
  },
  {
    title: 'Tata Motors Web Application (Admin)',
    description: 'Built an admin application with interactive charts and comprehensive CRUD operations for customer data. Implemented advanced data filtering, sorting, and pagination.',
    image: '/projects/tata-motors-admin.svg',
    tags: ['Angular', 'TypeScript', 'Angular Material', 'RxJS'],
    github: 'https://github.com/yourusername/tata-motors-admin',
    live: 'https://tata-motors-admin.example.com',
    category: 'Web Development',
    type: 'Job' as const,
  },
  {
    title: 'Tata Motors - Buy Tata Trucks and Buses Online',
    description: 'Developed secure user login with email OTP, password authentication, and authorization. Created the "Build Your Own Vehicle" feature and dynamic data display.',
    image: '/projects/tata-motors-customer.svg',
    tags: ['Angular', 'TypeScript', 'APIs', 'RxJS'],
    github: 'https://github.com/yourusername/tata-motors-customer',
    live: 'https://tata-motors-customer.example.com',
    category: 'Web Development',
    type: 'Job' as const,
  },
  {
    title: 'E-Dukaan (Admin)',
    description: "Developed Tata Motors' website for spare parts with product catalogues, search, and CRUD operations.",
    image: '/projects/e-dukaan.svg',
    tags: ['Angular', 'TypeScript', 'CRUD'],
    github: 'https://github.com/bhagyashree0728/e-dukaan',
    live: 'https://e-dukaan.example.com',
    category: 'Web Development',
    type: 'Job' as const,
  },
  {
    title: 'Local Shop-Connector',
    description: 'Platform to connect local shops and enable online purchases. Implemented API data binding and pagination charts with CRUD.',
    image: '/projects/local-shop.svg',
    tags: ['Angular', 'Node.js', 'MongoDB', 'APIs'],
    github: 'https://github.com/bhagyashree0728/local-shop-connector',
    live: 'https://local-shop-connector.example.com',
    category: 'Web Development',
    type: 'Personal' as const,
  },
  {
    title: 'Walmart Data Analysis',
    description: 'Created interactive dashboards for monthly sales and performance analysis. Designed visuals to identify trends and insights.',
    image: '/projects/walmart-analysis.svg',
    tags: ['Power BI', 'Data Analysis', 'Visualization'],
    github: 'https://github.com/bhagyashree0728/walmart-analysis',
    live: 'https://walmart-analysis.example.com',
    category: 'Data Analysis',
    type: 'Personal' as const,
  },
];

type Project = typeof projects[number];

type TabValue = 'All' | 'Job' | 'Personal';

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.paper',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{
          objectFit: 'cover',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: 'primary.main',
                color: 'background.default',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          size="small"
          startIcon={<GitHubIcon />}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          size="small"
          startIcon={<LaunchIcon />}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  </motion.div>
);

const Projects: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState<TabValue>('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  

  const handleTabChange = (_: React.SyntheticEvent, newValue: TabValue) => {
    setSelectedTab(newValue);
  };

  const tabFiltered = selectedTab === 'All' ? projects : projects.filter(p => p.type === selectedTab);
  const filteredProjects = selectedCategory === 'All' ? tabFiltered : tabFiltered.filter(p => p.category === selectedCategory);

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
            sx={{ textAlign: 'center', mb: 3 }}
        >
          Projects
        </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="All" value="All" />
              <Tab label="Job" value="Job" />
              <Tab label="Personal" value="Personal" />
            </Tabs>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 4, justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  backgroundColor: selectedCategory === category ? 'primary.main' : 'background.paper',
                  color: selectedCategory === category ? 'background.default' : 'text.primary',
                  '&:hover': {
                    backgroundColor: selectedCategory === category ? 'primary.dark' : 'background.paper',
                  },
                }}
              />
            ))}
          </Stack>

          <Box
            sx={{
              maxHeight: { xs: 'none', md: 720 },
              overflowY: { xs: 'visible', md: 'auto' },
              pr: { md: 1 },
              '&::-webkit-scrollbar': { width: 8 },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'primary.main',
                borderRadius: 8,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'background.paper',
              },
            }}
          >
            <Grid container spacing={4}>
              {filteredProjects.map((project) => (
                <Grid item key={project.title} xs={12} sm={6} md={4}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 