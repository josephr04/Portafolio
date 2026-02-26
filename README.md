# Personal Portfolio

Welcome to my personal portfolio! This project showcases my skills, projects, and experience as a Full-Stack Software Developer with a focus on backend development. Built with modern technologies, it provides a responsive and engaging user experience while highlighting my technical expertise.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with adaptive layouts
- **Multi-language Support**: Toggle between English and Spanish with persistent language preference
- **Dark/Light Theme**: Switch between dark and light modes with smooth transitions and localStorage persistence
- **Dynamic Sections**: Includes Hero, About Me, Experience, Projects, Skills, and Contact sections
- **Interactive Animations**: 
  - Smooth scroll-triggered fade-in effects
  - Hover animations and transitions
  - Animated navigation with active section highlighting
- **Downloadable CV**: Visitors can download my CV directly from the portfolio
- **Social Media Integration**: Quick access to my GitHub, LinkedIn, and email
- **Contact Form**: Functional contact form for easy communication

## Technologies Used

### Frontend
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography
- **Vite** as build tool

### Key Libraries
- `react-type-animation` - Typing animation effects
- `react-use` - Custom React hooks
- `hamburger-react` - Mobile menu component

### Features Implementation
- **Custom Hooks**: `useFadeInOnScroll` for scroll-based animations.
- **Context API**: Language and Theme management.
- **IntersectionObserver**: For scroll detection and active section tracking.
- **LocalStorage**: Persistent user preferences (language & theme).

## Project Structure
```
src/
├── components/          # Reusable components (NavBar, Footer, Toggles)
├── sections/           # Main sections (Hero, About, Projects, etc.)
├── contexts/           # React contexts (Language, Theme)
├── hooks/             # Custom hooks (useFadeInOnScroll, useIsMobile)
├── data/              # Static data (projects, skills, experience, navigation)
└── App.tsx            # Main application component
```

## Sections Overview

### 1. Hero Section
- Animated greeting and name display
- Role description with decorative code tags
- Call-to-action buttons (Download CV, Get in Touch)
- Social media links
- Animated geometric elements

### 2. About Me
- Personal introduction and background
- Professional highlights with icons
- Profile image with decorative effects
- Fade-in scroll animations

### 3. Experience
- Timeline-style layout
- Company, role, and duration information
- Technology stack badges
- Smooth hover effects

### 4. Projects
- Grid layout of featured projects
- Project images, descriptions, and tech stacks
- Links to live demos and GitHub repositories
- Responsive card design

### 5. Skills
- Categorized skills (Languages, Frameworks, Databases, Tools)
- Technology logos and names
- Interactive hover effects

### 6. Contact
- Contact information card
- Functional contact form
- Social media links
- Email integration

## Contact

- **Email**: josephrosasp@gmail.com
- **LinkedIn**: [Joseph Rosas](https://www.linkedin.com/in/joseph-rosas-595a15371)
- **GitHub**: [@josephr04](https://github.com/josephr04)


---

Thank you for visiting my portfolio! Feel free to reach out if you have any questions or opportunities.
