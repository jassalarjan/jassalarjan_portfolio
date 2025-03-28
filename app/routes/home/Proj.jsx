import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of the project and its key features.",
    technologies: ["React", "Three.js", "Node.js"]
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of the project and its key features.",
    technologies: ["React", "Three.js", "Node.js"]
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of the project and its key features.",
    technologies: ["React", "Three.js", "Node.js"]
  },
  {
    id: 4,
    title: "Project 4",
    description: "A brief description of the project and its key features.",
    technologies: ["React", "Three.js", "Node.js"]
  },
  {
    id: 5,
    title: "Project 5",
    description: "A brief description of the project and its key features.",
    technologies: ["React", "Three.js", "Node.js"]
  },
  {
    id: 6,
    title: "Project 6",
    description: "A brief description of the project and its key features.",
    technologies: ["React", "Three.js", "Node.js"]
  },
  // ... more projects
];

function ProjectShowcase() {
  return (
    <ProjectShowcase projects={projects} />
  );
}

export default ProjectShowcase;
