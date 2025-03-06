"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Business = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Business Ventures</title>
      </Head>
      <Navbar />
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-background px-8 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-4xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Business Ventures
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          <motion.div
            className="bg-white shadow-xl p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-secondary mb-2">
              Zephyr Matrix
            </h2>
            <p className="text-gray-700">
              Delivering creative, agile, and efficient technology solutions.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-xl p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-secondary mb-2">
              Valentina Clothing
            </h2>
            <p className="text-gray-700">
              An online clothing shop catering to a local audience with
              fashionable canvas handbags, floral dresses, and unique seasonal
              collections.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-xl p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-secondary mb-2">
              IP Market
            </h2>
            <p className="text-gray-700">
              A technology-driven company concept with a focus on IT
              innovations.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Business;
