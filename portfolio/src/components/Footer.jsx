import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-10 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-bold text-indigo-400">&lt;Shiva.dev /&gt;</span>
              <p className="mt-2 text-gray-400 text-sm">
                Made with ❤️ and ☕ in India
              </p>
            </motion.div>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;