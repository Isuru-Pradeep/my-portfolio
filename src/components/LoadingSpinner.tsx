import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
    >
      {/* Spinner */}
      <motion.div
        className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1], // Pulsating effect
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      ></motion.div>

      {/* Text */}
      <motion.p
        className="text-white text-xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
      >
        Isuru Pradeep
      </motion.p>

      {/* Inline Styles for Spinner Animation */}
      <style jsx>{`
        .loader {
          border-top-color: #3498db; /* Primary spinner color */
          box-shadow: 0 0 20px rgba(52, 152, 219, 0.5); /* Glow effect */
        }
      `}</style>
    </motion.div>
  );
};

export default LoadingSpinner;
