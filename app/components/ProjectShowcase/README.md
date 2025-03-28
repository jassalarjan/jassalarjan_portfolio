# Project Showcase Component

A modern, interactive 3D project showcase component built with React Three Fiber. This component displays projects in a 3D space with smooth animations, interactive cards, and detailed project information.

## Features

- Interactive 3D environment with smooth camera controls
- Floating project cards with hover and click effects
- Animated project details panel
- Responsive design
- Built with React Three Fiber and Drei
- Uses Framer Motion for smooth animations

## Installation

The component requires the following dependencies (which should already be in your project):
- @react-three/fiber
- @react-three/drei
- three
- framer-motion

## Usage

```jsx
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of the project and its key features.",
    technologies: ["React", "Three.js", "Node.js"]
  },
  // ... more projects
];

function App() {
  return (
    <ProjectShowcase projects={projects} />
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| projects | Array | Array of project objects with the following structure: |
| | | - id: unique identifier |
| | | - title: project title |
| | | - description: project description |
| | | - technologies: array of technology names |

## Styling

The component uses CSS modules for styling. You can customize the appearance by modifying the `ProjectShowcase.module.css` file.

## Notes

- Make sure to include the required font file (`helvetiker_regular.typeface.json`) in your public/fonts directory
- The component takes up the full viewport height by default
- Camera controls are enabled for zoom, pan, and rotation
- Project cards are arranged in a circular pattern in 3D space 