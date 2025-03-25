import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div className="border-b border-neutral-900 pb-4" id="projects">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">
        Projects
      </motion.h2>
      <div>
        {displayedProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center lg:gap-8">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
              <img src={project.image} width={300} height={300} alt={project.title} className="mb-6 rounded" />
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
              <div className="flex justify-between">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <a href={project.github} className="group relative transition-all duration-300 hover:text-gray-800" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub className="text-2xl transition-transform duration-300 hover:scale-125" />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    GitHub
                  </span>
                </a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm text-violet-400 font-medium">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      {!showAll && PROJECTS.length > 3 && (
        <div className="text-center mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
            onClick={() => setShowAll(true)}
            className="relative inline-flex items-center justify-start inline-block px-5 py-3 mb-8 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Load More</span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Projects;
