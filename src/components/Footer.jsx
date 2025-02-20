import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    'What\'s new': ['Surface Pro 9', 'Surface Laptop 5', 'Surface Studio 2+', 'Surface Laptop Go 2'],
    'Microsoft Store': ['Account profile', 'Download Center', 'Returns', 'Order tracking'],
    'Education': ['Microsoft in education', 'Office for students', 'Office 365 for schools'],
    'Enterprise': ['Azure', 'Enterprise', 'Manufacturing & resources', 'Financial services']
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <FaFacebookF className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-microsoft-blue cursor-pointer" />
              <FaTwitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-microsoft-blue cursor-pointer" />
              <FaLinkedinIn className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-microsoft-blue cursor-pointer" />
              <FaYoutube className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-microsoft-blue cursor-pointer" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Microsoft. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;