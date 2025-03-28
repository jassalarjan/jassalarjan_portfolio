import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { useEffect, useState } from 'react';
import './allprojects.css';

export const loader = async () => {
  const projects = [
    {
      id: 1,
      title: "Urban Living",
      description: "A modern residential complex that redefines urban living through innovative design and sustainable practices.",
      technologies: ["Architecture", "Urban Design", "Sustainability"],
      imageUrl: "/images/projects/1.jpg",
      year: "2023",
      location: "New York, USA",
      client: "Urban Development Corp",
      status: "Completed"
    },
    {
      id: 2,
      title: "Cultural Hub",
      description: "A dynamic cultural center that serves as a gathering space for arts, education, and community engagement.",
      technologies: ["Cultural Architecture", "Public Space", "Community Design"],
      imageUrl: "/images/projects/2.jpg",
      year: "2022",
      location: "London, UK",
      client: "Arts Council",
      status: "Completed"
    },
    {
      id: 3,
      title: "Commercial Tower",
      description: "An iconic office tower that sets new standards for workplace design and environmental performance.",
      technologies: ["Commercial Architecture", "Green Building", "Workplace Design"],
      imageUrl: "/images/projects/3.jpg",
      year: "2023",
      location: "Singapore",
      client: "Global Corp",
      status: "In Progress"
    },
    {
      id: 4,
      title: "Mixed-Use Complex",
      description: "A vibrant mixed-use development that seamlessly integrates retail, residential, and public spaces.",
      technologies: ["Mixed-Use", "Urban Planning", "Retail Design"],
      imageUrl: "/images/projects/4.jpg",
      year: "2024",
      location: "Dubai, UAE",
      client: "Development Group",
      status: "Planning"
    },
    {
      id: 5,
      title: "Heritage Restoration",
      description: "A sensitive restoration project that preserves historical significance while introducing modern functionality.",
      technologies: ["Heritage", "Restoration", "Adaptive Reuse"],
      imageUrl: "/images/projects/5.jpg",
      year: "2022",
      location: "Paris, France",
      client: "Heritage Trust",
      status: "Completed"
    }
  ];

  return json({ projects });
};

export default function AllProjects() {
  const { projects } = useLoaderData();
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <article className="projects-page">
      <Section className="projects-page__content">
        <Heading level={1} className="projects-page__title">
          Projects
        </Heading>
        <div className="projects-page__showcase">
          {!mounted ? (
            <div className="projects-page__loading">Loading...</div>
          ) : (
            <div className="projects-page__grid">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`projects-page__card ${selectedProject?.id === project.id ? 'selected' : ''}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="projects-page__card-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                  <div className="projects-page__card-content">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="projects-page__card-info">
                      <span>{project.year}</span>
                      <span>{project.location}</span>
                      <span>{project.status}</span>
                    </div>
                    <div className="projects-page__card-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="projects-page__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
    </article>
  );
} 