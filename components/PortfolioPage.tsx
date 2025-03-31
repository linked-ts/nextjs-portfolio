/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  MessageSquare, 
  Code2,
  Boxes,
  Atom,
  Palette,
  Server,
  Database,
  Github,
  Workflow,
  LucideIcon,
  Network,
  Globe,
  Zap,
  Layers,
  Rocket,
  Lock
} from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
  category: 'Blockchain' | 'Frontend' | 'Tools';
}

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<'Blockchain' | 'Frontend' | 'Tools'>('Blockchain');

  const skills: Skill[] = [
    // Blockchain Skills
    { 
      name: 'Solidity', 
      icon: Network,
      description: 'Smart Contract Development',
      color: 'from-blue-400/10 to-blue-600/10',
      category: 'Blockchain'
    },
    { 
      name: 'Web3.js', 
      icon: Globe,
      description: 'Blockchain Interaction',
      color: 'from-cyan-400/10 to-cyan-600/10',
      category: 'Blockchain'
    },
    { 
      name: 'Hardhat', 
      icon: Lock,
      description: 'Smart Contract Tooling',
      color: 'from-green-400/10 to-green-600/10',
      category: 'Blockchain'
    },
    { 
      name: 'Ethereum', 
      icon: Zap,
      description: 'Blockchain Ecosystem',
      color: 'from-purple-400/10 to-purple-600/10',
      category: 'Blockchain'
    },
    
    // Frontend Skills
    { 
      name: 'React', 
      icon: Layers,
      description: 'Component-based UI',
      color: 'from-cyan-400/10 to-cyan-600/10',
      category: 'Frontend'
    },
    { 
      name: 'TypeScript', 
      icon: Code2,
      description: 'Type-safe Development',
      color: 'from-blue-400/10 to-blue-600/10',
      category: 'Frontend'
    },
    { 
      name: 'Next.js', 
      icon: Rocket,
      description: 'Full-stack Framework',
      color: 'from-gray-400/10 to-gray-600/10',
      category: 'Frontend'
    },
    { 
      name: 'TailwindCSS', 
      icon: Palette,
      description: 'Utility-first CSS',
      color: 'from-teal-400/10 to-teal-600/10',
      category: 'Frontend'
    },
    
    // Tools
    { 
      name: 'Git', 
      icon: Github,
      description: 'Version Control',
      color: 'from-orange-400/10 to-orange-600/10',
      category: 'Tools'
    },
    { 
      name: 'GraphQL', 
      icon: Database,
      description: 'API Architecture',
      color: 'from-pink-400/10 to-pink-600/10',
      category: 'Tools'
    },
    { 
      name: 'CI/CD', 
      icon: Workflow,
      description: 'Automated Workflows',
      color: 'from-purple-400/10 to-purple-600/10',
      category: 'Tools'
    },
    { 
      name: 'Node.js', 
      icon: Server,
      description: 'Backend Development',
      color: 'from-green-400/10 to-green-600/10',
      category: 'Tools'
    }
  ];


  const handleGetInTouch = () => {
    window.open('https://t.me/etcmyx', '_blank');
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden"
    >
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed w-full bg-black/30 backdrop-blur-sm z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center">
          <motion.h1 
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            etcmyx
          </motion.h1>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            {['About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group px-2 sm:px-4 py-2"
                onMouseEnter={() => setActiveSection(item)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <AnimatePresence>
                  {activeSection === item && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  )}
                </AnimatePresence>
              </a>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center gap-8 sm:gap-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 animate-float"
          >
            <img 
              src="/developer.jpg"
              alt="Developer" 
              className="rounded-full w-full h-full object-cover border-4 border-blue-400"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          </motion.div>
          
          <div className="text-center max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in"
            >
              Web3 Developer
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                Blockchain Specialist
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8"
            >
              Pioneering decentralized solutions with cutting-edge Web3 technologies. 
              Specialized in smart contract development, blockchain architecture, 
              and creating innovative decentralized applications (DApps).
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={handleGetInTouch}
              className="relative overflow-hidden group bg-transparent border-2 border-blue-500 px-8 sm:px-12 py-2 sm:py-3 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10 text-white group-hover:text-white transition-colors">Get In Touch</span>
              <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </motion.button>
          </div>
        </div>
      </motion.section>
  
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="skills" 
        className="py-12 sm:py-20 bg-black/30"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          {/* Навигация по категориям */}
          <div className="flex justify-center mb-8 space-x-4">
            {(['Blockchain', 'Frontend', 'Tools'] as const).map((category) => (
              <motion.button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  currentCategory === category 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category} Skills
              </motion.button>
            ))}
          </div>

          {/* Слайдер навыков */}
          <div className="relative w-full max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentCategory}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
              >
                {skills
                  .filter((skill) => skill.category === currentCategory)
                  .map((skill) => (
                    <motion.div 
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                          <skill.icon 
                            className="text-blue-400"
                            size={24}
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-200">
                          {skill.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="contact" 
        className="py-12 sm:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch With Me
          </h2>
          <div className="flex justify-center gap-6 sm:gap-8">
            {[ 
              { Icon: Camera, href: 'https://t.me/etcmyx_about', label: 'Portfolio', isExternal: true },
              { Icon: MessageSquare, href: 'https://t.me/etcmyx', label: 'Message', isExternal: true }
            ].map(({ Icon, href, label, isExternal }) => (
              <motion.a
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                href={href}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : ''}
                className="group flex flex-col items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <div className="p-3 sm:p-4 rounded-full bg-gray-800/50 group-hover:bg-blue-500/10 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-sm">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black/30 py-4 sm:py-6"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400">
          <p className="text-xs sm:text-sm">© 2025 etcmyx. All rights reserved.</p>
        </div>
      </motion.footer>

      <style jsx global>{`
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </motion.div>
  );
};

export default PortfolioPage;