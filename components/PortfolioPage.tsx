/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';
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
  Workflow
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface Skill {
  name: string;
  icon: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  description: string;
  color: string;
}

const PortfolioPage = () => {
  const [, setIsHovered] = useState(false);

  const skills: Skill[] = [
    { 
      name: 'TypeScript', 
      icon: Code2,
      description: 'Type-safe development',
      color: 'from-blue-400/10 to-blue-600/10'
    },
    { 
      name: 'React', 
      icon: Atom,
      description: 'Component-based UI',
      color: 'from-cyan-400/10 to-cyan-600/10'
    },
    { 
      name: 'Next.js', 
      icon: Boxes,
      description: 'Full-stack framework',
      color: 'from-gray-400/10 to-gray-600/10'
    },
    { 
      name: 'TailwindCSS', 
      icon: Palette,
      description: 'Utility-first CSS',
      color: 'from-teal-400/10 to-teal-600/10'
    },
    { 
      name: 'Node.js', 
      icon: Server,
      description: 'Backend development',
      color: 'from-green-400/10 to-green-600/10'
    },
    { 
      name: 'GraphQL', 
      icon: Database,
      description: 'API architecture',
      color: 'from-pink-400/10 to-pink-600/10'
    },
    { 
      name: 'Git', 
      icon: Github,
      description: 'Version control',
      color: 'from-orange-400/10 to-orange-600/10'
    },
    { 
      name: 'CI/CD', 
      icon: Workflow,
      description: 'Automated workflows',
      color: 'from-purple-400/10 to-purple-600/10'
    }
  ];

  const handleGetInTouch = () => {
    window.open('https://t.me/linked_ev', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      <nav className="fixed w-full bg-black/30 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            linked-ts
          </h1>
          <div className="flex flex-wrap gap-6">
            {['About', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group px-4 py-2"
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6 flex flex-col items-center gap-12">
          <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float">
            <img 
              src="/developer.jpg"
              alt="Developer" 
              className="rounded-full w-full h-full object-cover border-4 border-blue-400"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          </div>
          
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Frontend Developer
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                TypeScript Expert
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Crafting exceptional web experiences with modern technologies.
              Specialized in React, Next.js, and TypeScript development.
              Building scalable and performant applications with a focus on user experience.
            </p>
            <button 
              onClick={handleGetInTouch}
              className="relative overflow-hidden group bg-transparent border-2 border-blue-500 px-12 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 text-white group-hover:text-white transition-colors">Get In Touch</span>
              <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>
        </div>
      </section>
  
      <section id="skills" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="group relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-100 group-hover:opacity-100`} />
                <div className="relative bg-gray-800/50 p-6 h-full border border-gray-700/50 rounded-xl group-hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                      <skill.icon
                        width={24}
                        height={24}
                        className="text-blue-400 group-hover:text-blue-300 transition-colors"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch With Me
          </h2>
          <div className="flex justify-center gap-8">
            {[ 
              { Icon: Camera, href: 'https://github.com/linked-ts', label: 'Portfolio', isExternal: true },
              { Icon: MessageSquare, href: 'https://t.me/linked_ev', label: 'Message', isExternal: true }
            ].map(({ Icon, href, label, isExternal }) => (
              <a
                key={label}
                href={href}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : ''}
                className="group flex flex-col items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <div className="p-4 rounded-full bg-gray-800/50 group-hover:bg-blue-500/10 transition-colors">
                  <Icon size={24} />
                </div>
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black/30 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 linked-ts. All rights reserved.</p>
        </div>
      </footer>

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
    </div>
  );
};

export default PortfolioPage;