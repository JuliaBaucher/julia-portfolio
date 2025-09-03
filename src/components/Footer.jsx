import React from 'react';
import { Mail, Linkedin, ExternalLink, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';

  const footerClasses = `py-12 border-t ${
    isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'
  }`;

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: `https://${personalInfo.linkedin}`,
      label: 'LinkedIn'
    },
    {
      icon: ExternalLink,
      href: personalInfo.portfolio,
      label: 'Portfolio'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={footerClasses}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="md:col-span-1">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-bold transition-colors hover:scale-105 transform duration-200 ${
                isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
              }`}
            >
              {personalInfo.name}
            </button>
            <p className={`mt-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {personalInfo.title}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <nav className="flex flex-wrap justify-center md:justify-center gap-6">
              {[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:-translate-y-1 transform duration-200 ${
                    isDark 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDark 
                        ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-sm'
                    }`}
                    title={link.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className={`text-sm ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <div className={`flex items-center gap-1 text-sm ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            <span>Made with</span>
            <Heart className={`h-4 w-4 ${
              isDark ? 'text-red-400' : 'text-red-500'
            } animate-pulse`} />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;