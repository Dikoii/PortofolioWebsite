import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contacts = () => {
  return (
    <div className="pb-10" id="contacts">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-10 text-center text-4xl">
        Contacts
      </motion.h2>
      <div className="flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/dicky-dharma-susanto/"
          className="group relative transition-all duration-300 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn">
          <FaLinkedin className="transition-transform duration-300 hover:rotate-12" />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            LinkedIn
          </span>
        </a>

        <a href="https://github.com/Dikoii" className="group relative transition-all duration-300 hover:text-gray-800" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="transition-transform duration-300 hover:scale-125" />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            GitHub
          </span>
        </a>

        <a href="https://x.com/Dikoi04" className="group relative transition-all duration-300 hover:text-black" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaSquareXTwitter className="transition-transform duration-300 hover:rotate-[360deg]" />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Twitter
          </span>
        </a>

        <a href="https://www.instagram.com/dicky.ds_/" className="group relative transition-all duration-300 hover:text-pink-600" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram className="transition-transform duration-300 hover:scale-150" />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Instagram
          </span>
        </a>
      </div>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="my-4 text-center tracking-tighter">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dicky.susanto@binus.ac.id" target="_blank" rel="noopener noreferrer" className="border-b">
          {CONTACT.email}
        </a>
        <p>Based in Indonesia, Jakarta</p>
      </motion.div>
    </div>
  );
};

export default Contacts;
