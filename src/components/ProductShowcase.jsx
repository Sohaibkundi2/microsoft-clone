import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    title: 'Microsoft 365',
    description: 'Premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription',
    image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4E4rT',
    link: 'Learn More'
  },
  {
    title: 'Xbox Series X',
    description: 'The fastest, most powerful Xbox ever',
    image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni',
    link: 'Shop Now'
  },
  {
    title: 'Surface Pro 9',
    description: 'Tablet versatility and laptop power — all in one ultra-portable device',
    image: "https://img.freepik.com/free-photo/futuristic-computer-monitors-display-galaxy-glowing-data-generated-by-ai_188544-29811.jpg?t=st=1740078771~exp=1740082371~hmac=f5dd711b22294b4653d8ea1a395b975fc6c843ce85b697d3bc159054b854ea38&w=826",
    link: 'Learn More'
  },
  {
    title: 'Microsoft Teams',
    description: 'Chat, call, and make plans with family and friends',
    image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4H4kk',
    link: 'Learn More'
  }
];

const ProductCard = ({ product, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
        <a href="#" className="text-microsoft-blue hover:underline">
          {product.link} →
        </a>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;