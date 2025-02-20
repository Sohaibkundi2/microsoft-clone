import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4FTtq")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Surface Laptop 5
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg mb-6"
            >
              Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7 processors built on the Intel® Evo™ platform
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-x-4"
            >
              <button className="btn-primary">Learn More</button>
              <button className="btn-secondary">Shop Now</button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;