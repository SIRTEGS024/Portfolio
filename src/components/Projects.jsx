import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="mb-8 flex flex-wrap gap-8 lg:justify-center"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a href={project.url}>
              <img
                src={project.image}
                width={150}
                height={150}
                alt=""
                className="mb-6 rounded object-cover w-[250px] h-[250px] transition-transform duration-300 hover:scale-110"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              <a href={project.url} className="hover:text-neutral-400 text-2xl">
                {project.title}
              </a>
            </h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2  mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a
                href={project.readme}
                className="mr-2  bg-neutral-900 hover:bg-neutral-800 px-2 py-1 text-lg font-medium text-purple-800 hover:cursor-pointer"
              >
                READ MORE
              </a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
