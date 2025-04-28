import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'WhiteBoard',
    description: 'A collaborative digital whiteboard application with real-time drawing capabilities.',
    techStack: ['HTML', 'CSS','Java Script', 'Canvas API'],
    image: 'WhiteBoard.png',
    liveLink: 'https://apnawhiteboard.vercel.app/',
  },
  {
    id: 2,
    title: 'MUSIKO',
    description: 'Music streaming app with real-time search, featured tracks, and recently played history.',
    techStack: ['HTML', 'CSS','Java Script','Web Audio API'],
    image: 'MUSIKO.png',
    liveLink: 'https://musiko-3-xbpi-2cry6tj8d-shiva-guptas-projects-cc0b8aa0.vercel.app/',
  },
  {
    id: 3,
    title: 'कaalपथ',
    description: 'Task management app with daily planners, progress tracking, and task history features.',
    techStack: ['React', 'TailwindCSS','Firebase', 'JSON API'],
    image: 'Logo.svg',
    liveLink: 'https://kaalpath.vercel.app/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="portfolio" className="py-20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto">My Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents different skills 
            and technologies I've worked with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors transform hover:scale-105"
                  >
                    View Live
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.liveLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1 hover:underline"
              >
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;