import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container-section text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                Hello, I'm
              </p>
              <h1 className="heading-xl text-gray-900 dark:text-white">
                Shiva Gupta
              </h1>
              <div className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-10">
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    1000,
                    'React Enthusiast',
                    1000,
                    'UI/UX Enthusiast',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                I build modern, responsive and user-friendly web applications using the latest frontend technologies.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPortfolio}
                className="button-primary"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full w-64 h-64 mx-auto overflow-hidden"
            >
              <img 
                src="Shiva_Profile.jpeg" 
                alt="Programmer working" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce p-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-indigo-600 dark:text-indigo-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth="2"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;