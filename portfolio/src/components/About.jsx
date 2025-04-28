import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 65, tag: 'Learning' },
  { name: 'TailwindCSS', level: 90 },
  { name: 'API Integration', level: 80 },
  { name: 'Firebase', level: 75 },
  { name: 'Express', level: 60, tag: 'Intermediate' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="heading-md mb-4 text-gray-900 dark:text-white">
              Frontend Developer with a passion for creating beautiful user experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I specialize in building modern web applications with a focus on clean code, 
              performance, and user experience. My journey in web development started with 
              HTML, CSS, and JavaScript, and has evolved to include modern frameworks and libraries.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Currently, I'm focusing on Frontend Development with React.js and exploring 
              Next.js to build more performant and SEO-friendly applications. I'm also passionate 
              about responsive design and ensuring accessibility across all my projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
                Frontend Development
              </div>
              <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
                React Ecosystem
              </div>
              <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
                UI/UX Design
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-5"
          >
            <h3 className="heading-md mb-6 text-gray-900 dark:text-white">
              Skills & Expertise
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  {skill.tag && (
                    <span className="text-xs font-medium px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full">
                      {skill.tag}
                    </span>
                  )}
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;