import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Button } from './ui/button';
import { Palette, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [currentDesign, setCurrentDesign] = useState('dark'); // 'dark' or 'light'
  const [showDesignToggle, setShowDesignToggle] = useState(true);

  const toggleDesign = () => {
    setCurrentDesign(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const hideDesignToggle = () => {
    setShowDesignToggle(false);
  };

  const isDark = currentDesign === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Design Toggle - Fixed position */}
      {showDesignToggle && (
        <div className="fixed top-20 right-6 z-40 flex flex-col gap-2">
          <Button
            onClick={toggleDesign}
            size="sm"
            variant="outline"
            className={`p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-gray-800/80 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white' 
                : 'bg-white/80 border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
            title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button
            onClick={hideDesignToggle}
            size="sm"
            variant="ghost"
            className={`text-xs px-2 py-1 ${
              isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Hide
          </Button>
        </div>
      )}

      {/* Header */}
      <Header currentDesign={currentDesign} />

      {/* Main Content */}
      <main>
        <Hero currentDesign={currentDesign} />
        <About currentDesign={currentDesign} />
        <Experience currentDesign={currentDesign} />
        <Skills currentDesign={currentDesign} />
        <Projects currentDesign={currentDesign} />
        <Contact currentDesign={currentDesign} />
      </main>

      {/* Footer */}
      <Footer currentDesign={currentDesign} />
    </div>
  );
};

export default Portfolio;