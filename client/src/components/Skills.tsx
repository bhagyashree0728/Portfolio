import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsivePie } from '@nivo/pie';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Material-UI', level: 85 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 85 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Data Visualization', level: 85 },
    ],
  },
];

const Skills: React.FC = () => {
  const radarData = skillCategories.map((category) => ({
    category: category.name,
    ...category.skills.reduce((acc, skill) => ({ ...acc, [skill.name]: skill.level }), {}),
  }));

  const pieData = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      id: skill.name,
      label: skill.name,
      value: skill.level,
      category: category.name,
    }))
  );

  return (
    <Box
      id="skills"
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
            Skills & Expertise
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 3,
                  height: '500px',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
                  Skill Distribution
                </Typography>
                <ResponsiveRadar
                  data={radarData}
                  keys={skillCategories.flatMap((category) => category.skills.map((skill) => skill.name))}
                  indexBy="category"
                  maxValue={100}
                  margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                  borderColor={{ from: 'color' }}
                  gridLabelOffset={36}
                  dotSize={10}
                  dotColor={{ theme: 'background' }}
                  dotBorderWidth={2}
                  colors={{ scheme: 'nivo' }}
                  blendMode="multiply"
                  motionConfig="gentle"
                  theme={{
                    background: 'transparent',
                    text: {
                      fontSize: 11,
                      fill: '#333333',
                      outlineWidth: 0,
                      outlineColor: 'transparent',
                    },
                    axis: {
                      domain: {
                        line: {
                          stroke: '#777777',
                          strokeWidth: 1,
                        },
                      },
                      ticks: {
                        line: {
                          stroke: '#777777',
                          strokeWidth: 1,
                        },
                      },
                    },
                    grid: {
                      line: {
                        stroke: '#dddddd',
                        strokeWidth: 1,
                      },
                    },
                  }}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 3,
                  height: '500px',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
                  Skill Categories
                </Typography>
                <ResponsivePie
                  data={pieData}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  colors={{ scheme: 'nivo' }}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                  enableArcLinkLabels={true}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                  defs={[
                    {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000',
                          },
                        },
                      ],
                    },
                  ]}
                />
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 