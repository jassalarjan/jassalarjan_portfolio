import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectShowcase.module.css';

const ProjectCard = ({ project, isSelected, onClick, isHovered, onHover }) => {
  return (
    <motion.mesh
      position={[0, 0, 0]}
      onClick={onClick}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
      animate={{
        scale: isHovered ? 1.05 : 1,
        opacity: isSelected ? 0.5 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <boxGeometry args={[2, 2, 0.1]} />
      <meshStandardMaterial color="#ffffff" />
    </motion.mesh>
  );
};

export default function ProjectShowcase({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedProject?.id === project.id}
            onClick={() => setSelectedProject(project)}
            isHovered={hoveredProject?.id === project.id}
            onHover={(isHovered) => setHoveredProject(isHovered ? project : null)}
          />
        ))}
      </Canvas>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={styles.details}
          >
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className={styles.projectInfo}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Year:</span>
                <span className={styles.value}>{selectedProject.year}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>{selectedProject.location}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Client:</span>
                <span className={styles.value}>{selectedProject.client}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Status:</span>
                <span className={styles.value}>{selectedProject.status}</span>
              </div>
            </div>
            <div className={styles.techStack}>
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 