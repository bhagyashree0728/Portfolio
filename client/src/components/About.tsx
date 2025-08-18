import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { School, Work } from '@mui/icons-material';

interface Skill {
	name: string;
	level: number;
}

interface SkillCategory {
	name: string;
	skills: Skill[];
}

interface ExperienceEntry {
	title: string;
	company: string;
	period: string;
	description: string;
}

interface EducationEntry {
	title: string;
	institute: string;
	startYear: number;
	endYear: number | 'Present';
	description: string;
}

const skillCategories: SkillCategory[] = [
	{
		name: 'Programming Languages',
		skills: [
			{ name: 'Angular', level: 90 },
			{ name: 'TypeScript', level: 85 },
			{ name: 'JavaScript', level: 88 },
			{ name: 'Java', level: 80 },
		],
	},
	{
		name: 'Web Technologies',
		skills: [
			{ name: 'HTML5', level: 90 },
			{ name: 'CSS3', level: 85 },
			{ name: 'Node.js', level: 80 },
			{ name: 'React.js', level: 75 },
		],
	},
	{
		name: 'Tools & Databases',
		skills: [
			{ name: 'SQL', level: 85 },
			{ name: 'Power BI', level: 80 },
			{ name: 'Git', level: 85 },
			{ name: 'Jira', level: 80 },
		],
	},
];

const experienceEntries: ExperienceEntry[] = [
	{
		title: 'Software Developer (Angular)',
		company: 'Vishleshan Software Solution',
		period: 'Jun 2023 — Jul 2024',
		description:
			'Developed and maintained multiple Angular applications with TypeScript, HTML, CSS, and JavaScript. Integrated UI elements using Angular Material and RxJS library.',
	},
	// {
	// 	title: 'Technical Organizer',
	// 	company: 'Iskra.Tech (TY BSc.IT)',
	// 	period: '2023',
	// 	description:
	// 		'Led the technical execution of Iskra.Tech, organizing the Tech Quiz and Mini Hackathon; designed problem statements and evaluation criteria.',
	// },
];

const educationEntries: EducationEntry[] = [
	{
		title: 'Masters In Computer Applications (MCA)',
		institute: "Bharatiya Vidya Bhavan's Sardar Patel Institute of Technology",
		startYear: 2024,
		endYear: 2026,
		description: 'Pursuing MCA with focus on advanced computer applications and software development.',
	},
	{
		title: 'Bachelor of Science (Information Technology)',
		institute: "Chetana's Hazarimal Somani College of Commerce & Economics",
		startYear: 2020,
		endYear: 2023,
		description: 'Completed BSc IT focusing on software development and CS fundamentals.',
	},
];

interface SkillBarProps {
	name: string;
	level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => (
	<Box sx={{ mb: 2 }}>
		<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
			<Typography variant="body2">{name}</Typography>
			<Typography variant="body2">{level}%</Typography>
		</Box>
		<Box
			sx={{
				width: '100%',
				height: 8,
				backgroundColor: 'background.paper',
				borderRadius: 4,
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					width: `${level}%`,
					height: '100%',
					backgroundColor: 'primary.main',
					transition: 'width 1s ease-in-out',
				}}
			/>
		</Box>
	</Box>
);

const About: React.FC = () => {
	return (
		<Box
			id="about"
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
						About Me
					</Typography>

					<Grid container spacing={4}>
						<Grid item xs={12} md={6}>
							<Paper
								sx={{
									p: 4,
									backgroundColor: 'background.paper',
									height: '100%',
								}}
							>
								<Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
									Skills
								</Typography>
								{skillCategories.map((category) => (
									<Box key={category.name} sx={{ mb: 4 }}>
										<Typography
											variant="h6"
											sx={{ mb: 2, color: 'primary.main' }}
										>
											{category.name}
										</Typography>
										{category.skills.map((skill) => (
											<SkillBar key={skill.name} {...skill} />
										))}
									</Box>
								))}
							</Paper>
						</Grid>

						<Grid item xs={12} md={6}>
							<Paper
								sx={{
									p: 4,
									backgroundColor: 'background.paper',
									height: '100%',
								}}
							>
								<Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
									Experience
								</Typography>
								<Timeline>
									{experienceEntries.map((exp, index) => (
										<TimelineItem key={index}>
											<TimelineSeparator>
												<TimelineDot color="primary">
													<Work />
												</TimelineDot>
												{index < experienceEntries.length - 1 && <TimelineConnector />}
											</TimelineSeparator>
											<TimelineContent>
												<Typography variant="h6" sx={{ color: 'text.primary' }}>
													{exp.title}
												</Typography>
												<Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
													{exp.company}
												</Typography>
												<Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
													{exp.period}
												</Typography>
												<Typography variant="body2" sx={{ color: 'text.secondary' }}>
													{exp.description}
												</Typography>
											</TimelineContent>
										</TimelineItem>
									))}
								</Timeline>

								<Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'text.primary' }}>
									Education
								</Typography>
								<Timeline>
									{educationEntries.map((edu, index) => (
										<TimelineItem key={index}>
											<TimelineSeparator>
												<TimelineDot color="secondary">
													<School />
												</TimelineDot>
												{index < educationEntries.length - 1 && <TimelineConnector />}
											</TimelineSeparator>
											<TimelineContent>
												<Typography variant="h6" sx={{ color: 'text.primary' }}>
													{edu.title}
												</Typography>
												<Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
													{edu.institute}
												</Typography>
												<Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
													{edu.startYear} — {edu.endYear}
												</Typography>
												<Typography variant="body2" sx={{ color: 'text.secondary' }}>
													{edu.description}
												</Typography>
											</TimelineContent>
										</TimelineItem>
									))}
								</Timeline>
							</Paper>
						</Grid>
					</Grid>
				</motion.div>
			</Container>
		</Box>
	);
};

export default About; 