import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4 md:px-8">
        <div className="flex items-center space-x-2">
          <img className="w-6 h-6" src="/logo.png"></img>
          <span className="text-lg font-semibold">BloodLink</span>
        </div>

        <div className="text-sm text-center md:text-center">
          Group 5 © {new Date().getFullYear()}. All rights reserved.
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            Contact
          </a>
          <a href="#" className="hover:text-white">
            Feedback
          </a>
          <a href="#" className="hover:text-white">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
