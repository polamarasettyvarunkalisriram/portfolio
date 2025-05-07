
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for managing online stores with analytics, inventory management, and order processing.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Personal Finance App",
      description: "Mobile-first application for tracking expenses, setting budgets, and visualizing spending patterns.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["React Native", "Firebase", "Redux"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "AI Content Generator",
      description: "Web application that leverages machine learning to generate marketing content and social media posts.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Next.js", "OpenAI API", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management Platform",
      description: "Collaborative project management tool with real-time updates, task assignments, and progress tracking.",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
