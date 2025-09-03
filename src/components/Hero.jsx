import React from 'react';
import { ArrowDown, Download, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';

const Hero = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Mock download functionality
    console.log('Downloading CV...');
    alert('CV download functionality would be implemented here');
  };

  const containerClasses = `min-h-screen flex items-center justify-center relative ${
    isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900'
  }`;

  return (
    <section id="hero" className={containerClasses}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 ${
          isDark ? 'bg-white' : 'bg-blue-600'
        } blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 ${
          isDark ? 'bg-gray-400' : 'bg-indigo-400'
        } blur-3xl animate-pulse delay-1000`}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Main content */}
        <div className="space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className={`text-lg font-medium ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          } animate-slide-up`}>
            Hello, I'm
          </div>

          {/* Name */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light tracking-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          } animate-slide-up delay-200`}>
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-normal ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          } animate-slide-up delay-400`}>
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          } animate-slide-up delay-600`}>
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up delay-800">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className={`group ${
                isDark 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              } transition-all duration-300 hover:scale-105`}
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={handleDownloadCV}
              variant="outline"
              size="lg"
              className={`group ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              } transition-all duration-300 hover:scale-105`}
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-slide-up delay-1000">
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-md'
              }`}
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-md'
              }`}
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-md'
              }`}
              title="Portfolio"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110 animate-bounce ${
            isDark 
              ? 'text-gray-400 hover:text-white' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;