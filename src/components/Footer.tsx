import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-400 text-black py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">FAB4</h2>
          <p className="text-sm text-black-400">Let Shop More And More 🛒.</p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-black-300">
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="hover:text-blue-700">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-black-500 pt-6 text-center text-sm text-black-500">
        © {new Date().getFullYear()} FAB4. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
