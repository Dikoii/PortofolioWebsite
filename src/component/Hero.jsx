import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/Profile.jpg';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
});

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const fullName = "Dicky Dharma Susanto";
  
  useEffect(() => {
    let timeout;
    
    const handleType = () => {
      if (!isDeleting && displayedText.length < fullName.length) {
        // Typing forward
        setDisplayedText(fullName.substring(0, displayedText.length + 1));
        setTypingSpeed(Math.random() * 100 + 50);
      } else if (!isDeleting && displayedText === fullName) {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => setIsDeleting(true), 2500);
        return;
      } else if (isDeleting && displayedText.length > 0) {
        // Deleting backward
        setDisplayedText(fullName.substring(0, displayedText.length - 1));
        setTypingSpeed(50); // Faster deletion
      } else if (isDeleting && displayedText === '') {
        // Finished deleting, start typing again
        setIsDeleting(false);
        setTypingSpeed(100);
      }
    };
    timeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, typingSpeed]);

  return (
    <div className="mt-20 border-b border-neutral-900 pb-4 lg:mb-35" id="home">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl lg:text-5xl font-thin tracking-tight"
            >
              Hello, I'm
            </motion.h1>
            <motion.div
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="text-3xl lg:text-6xl font-bold tracking-tight min-h-[1.2em] flex items-center"
            >
              <span className="text-white">
                {displayedText}
                <span className="inline-block w-1 h-8 lg:h-12 bg-pink-300 animate-pulse"></span>
              </span>
            </motion.div>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-2xl tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Dicky Dharma Susanto"
              className="w-full max-w-sm" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;