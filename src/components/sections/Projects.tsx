import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

import type { ReactElement } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
  icon: ReactElement;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AnimalConnect',
      description: 'A MERN stack application connecting animal NGOs, shelters, and rescuers with features like real-time chat, donation system, and animal adoption platform.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Firebase'],
      image: '/animal-connect.jpg',
      github: 'https://github.com/yourusername/animal-connect',
      demo: 'https://animal-connect.vercel.app',
      icon: <FaReact className="w-6 h-6 text-blue-500" />
    },
    {
      id: 2,
      title: 'Mi Store Clone',
      description: 'A responsive e-commerce clone of Xiaomi\'s Mi Store built with React, featuring product listings, category filtering, and cart functionality.',
      tags: ['React', 'Context API', 'Tailwind CSS', 'React Router'],
      image: '/mi-store-clone.jpg',
      github: 'https://github.com/yourusername/mi-store-clone',
      demo: 'https://mi-store-clone.vercel.app',
      icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />
    },
    {
      id: 3,
      title: 'NextArt-AI',
      description: 'An AI-powered web application for image enhancement and artistic style transfer using GANs, with a clean and intuitive user interface.',
      tags: ['Next.js', 'TensorFlow.js', 'Tailwind CSS', 'Vercel'],
      image: '/nextart-ai.jpg',
      github: 'https://github.com/yourusername/nextart-ai',
      demo: 'https://nextart-ai.vercel.app',
      icon: <SiNextdotjs className="w-6 h-6 text-gray-800" />
    },
    {
      id: 4,
      title: 'TaskFlow',
      description: 'A full-stack task management application with real-time updates, drag-and-drop functionality, and user authentication.',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
      image: '/taskflow.jpg',
      github: 'https://github.com/yourusername/taskflow',
      demo: 'https://taskflow-app.vercel.app',
      icon: <FaNodeJs className="w-6 h-6 text-green-600" />
    },
    {
      id: 5,
      title: 'WeatherWise',
      description: 'A weather forecasting application with 5-day forecast, location-based weather, and beautiful weather visualizations.',
      tags: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
      image: '/weatherwise.jpg',
      github: 'https://github.com/yourusername/weatherwise',
      demo: 'https://weatherwise-app.vercel.app',
      icon: <FaReact className="w-6 h-6 text-blue-500" />
    },
    {
      id: 6,
      title: 'DevConnect',
      description: 'A social platform for developers to share projects, write articles, and connect with other developers.',
      tags: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS', 'Vercel'],
      image: '/devconnect.jpg',
      github: 'https://github.com/yourusername/devconnect',
      demo: 'https://devconnect-app.vercel.app',
      icon: <SiNextdotjs className="w-6 h-6 text-gray-800" />
    },
  ];

  const filters = ['All', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Firebase'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const getTagIcon = (tag: string) => {
    switch(tag) {
      case 'React':
        return <FaReact className="w-4 h-4 text-blue-500" />;
      case 'Node.js':
        return <FaNodeJs className="w-4 h-4 text-green-600" />;
      case 'MongoDB':
        return <SiMongodb className="w-4 h-4 text-green-500" />;
      case 'Firebase':
        return <SiFirebase className="w-4 h-4 text-orange-500" />;
      case 'AWS':
        return <FaAws className="w-4 h-4 text-yellow-500" />;
      case 'Next.js':
        return <SiNextdotjs className="w-4 h-4 text-gray-800" />;
      case 'Tailwind CSS':
        return <SiTailwindcss className="w-4 h-4 text-cyan-400" />;
      default:
        return <FiCode className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          {/* <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div> */}
        </motion.div>

        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary-100 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-primary-100 transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {getTagIcon(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
