<<<<<<< HEAD
# Portfolio
Portfolio
=======
# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI. This portfolio showcases both software development and data science skills with a clean, futuristic dark theme.

## Features

- 🎨 Modern, responsive design with dark theme
- 📱 Mobile-first approach
- 🚀 Smooth animations and transitions
- 📊 Interactive data visualizations
- 📝 Dynamic project showcase
- 📬 Contact form with email integration
- 📄 Resume viewer and download
- 🎯 Skills visualization with charts

## Tech Stack

- React 18
- TypeScript
- Material-UI
- Framer Motion
- Three.js
- Nivo Charts
- EmailJS
- React PDF

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
cd client
npm install
```

3. Create a `.env` file in the client directory and add your EmailJS credentials:
```
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
client/
├── public/
│   ├── assets/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── theme.ts
└── package.json
```

## Customization

1. Update personal information in each component
2. Modify the theme colors in `theme.ts`
3. Add your projects in the `Projects.tsx` component
4. Update skills and their levels in `Skills.tsx`
5. Add your resume PDF to the `public` folder

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your preferred hosting service (e.g., Netlify, Vercel, GitHub Pages)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the component library
- Framer Motion for animations
- Nivo for data visualization
- Three.js for 3D effects 
>>>>>>> 550124e (Initial commit: portfolio (client + server))
