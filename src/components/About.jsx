import React from 'react';
import { Award, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo, awards, education } from '../mock';

const About = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';

  const sectionClasses = `py-20 ${
    isDark ? 'bg-black' : 'bg-white'
  }`;

  return (
    <section id="about" className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            isDark ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-normal mb-6 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                My Story
              </h3>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {personalInfo.bio}
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin className={`h-5 w-5 ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`} />
              <span className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Based in {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Right Column - Education & Awards */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className={`text-2xl font-normal mb-6 flex items-center gap-3 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                <GraduationCap className="h-6 w-6" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className={`${
                    isDark 
                      ? 'bg-gray-900 border-gray-800 hover:bg-gray-800' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  } transition-colors duration-300`}>
                    <CardContent className="p-6">
                      <h4 className={`font-semibold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h4>
                      <p className={`mb-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {edu.institution}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                          {edu.location}
                        </span>
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {edu.year}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className={`text-2xl font-normal mb-6 flex items-center gap-3 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                <Award className="h-6 w-6" />
                Recognition
              </h3>
              <div className="space-y-4">
                {awards.slice(0, 2).map((award, index) => (
                  <Card key={index} className={`${
                    isDark 
                      ? 'bg-gray-900 border-gray-800 hover:bg-gray-800' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  } transition-colors duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-semibold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {award.title}
                        </h4>
                        <span className={`text-sm font-medium px-2 py-1 rounded ${
                          isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {award.year}
                        </span>
                      </div>
                      <p className={`text-sm mb-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {award.organization}
                      </p>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {award.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;