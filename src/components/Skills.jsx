import React from 'react';
import { Code, Users, Globe, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../mock';

const Skills = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';

  const sectionClasses = `py-20 ${
    isDark ? 'bg-black' : 'bg-white'
  }`;

  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: skills.technical,
      description: 'Technologies and tools I work with daily'
    },
    {
      title: 'Management Skills', 
      icon: Users,
      skills: skills.management,
      description: 'Leadership and strategic capabilities'
    },
    {
      title: 'Languages',
      icon: Globe,
      skills: skills.languages,
      description: 'Communication across cultures'
    }
  ];

  return (
    <section id="skills" className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Expertise
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            isDark ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`${
                isDark 
                  ? 'bg-gray-900 border-gray-800 hover:bg-gray-800' 
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:shadow-lg'
              } transition-all duration-300 hover:scale-[1.02] group`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-white group-hover:bg-gray-50'
                  } transition-colors duration-300 shadow-lg`}>
                    <IconComponent className={`h-8 w-8 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`} />
                  </div>
                  <CardTitle className={`text-xl mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </CardTitle>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {category.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className={`${
                          isDark 
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
                        } transition-all duration-200 hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className={`text-3xl md:text-4xl font-light ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              15+
            </div>
            <div className={`text-sm uppercase tracking-wide ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Years Experience
            </div>
          </div>
          
          <div className="space-y-2">
            <div className={`text-3xl md:text-4xl font-light ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              50+
            </div>
            <div className={`text-sm uppercase tracking-wide ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Projects Delivered
            </div>
          </div>
          
          <div className="space-y-2">
            <div className={`text-3xl md:text-4xl font-light ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              20+
            </div>
            <div className={`text-sm uppercase tracking-wide ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Teams Led
            </div>
          </div>
          
          <div className="space-y-2">
            <div className={`text-3xl md:text-4xl font-light ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              4.8/5
            </div>
            <div className={`text-sm uppercase tracking-wide ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Training Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;