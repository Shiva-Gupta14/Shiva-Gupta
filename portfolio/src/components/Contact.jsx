import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently available for freelance work and opportunities.
            Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12"
          >
            <a 
              href="https://www.linkedin.com/in/shivagupta14/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-2 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                <FaLinkedin className="w-8 h-8" />
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-medium">LinkedIn</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">@shivagupta14</span>
            </a>

            <a 
              href="mailto:shivascalerite1@gmail.com" 
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mb-2 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                <FaEnvelope className="w-8 h-8" />
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-medium">Email</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">shivascalerite1@gmail.com</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Looking for a frontend developer for your next project?
            </p>
            <a 
              href="mailto:shivascalerite1@gmail.com" 
              className="button-primary inline-block"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;