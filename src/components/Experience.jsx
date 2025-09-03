import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../mock';

const Experience = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';

  const sectionClasses = `py-20 ${
    isDark ? 'bg-gray-950' : 'bg-gray-50'
  }`;

  return (
    <section id="experience" className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            isDark ? 'bg-gray-600' : 'bg-gray-400'
          }`}></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            15+ years of driving product innovation across leading tech companies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 ${
            isDark ? 'bg-gray-800' : 'bg-gray-300'
          }`}></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 rounded-full border-4 ${
                  isDark 
                    ? 'bg-black border-gray-600' 
                    : 'bg-white border-gray-400'
                } z-10`}></div>

                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0">
                  <Card className={`${
                    isDark 
                      ? 'bg-gray-900 border-gray-800 hover:bg-gray-800' 
                      : 'bg-white border-gray-200 hover:shadow-lg'
                  } transition-all duration-300 hover:scale-[1.02]`}>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className={`text-xl mb-2 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {exp.title}
                          </CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <span className={`font-semibold text-lg ${
                              isDark ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                              {exp.company}
                            </span>
                            <div className="flex items-center gap-4 text-sm">
                              <div className={`flex items-center gap-1 ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </div>
                              <div className={`flex items-center gap-1 ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                <Calendar className="h-4 w-4" />
                                {exp.period}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className={`leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h4 className={`font-semibold mb-3 flex items-center gap-2 ${
                          isDark ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          <TrendingUp className="h-4 w-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className={`flex items-start gap-3 ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                isDark ? 'bg-gray-600' : 'bg-gray-400'
                              }`}></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className={`font-semibold mb-3 ${
                          isDark ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className={`${
                              isDark 
                                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            } transition-colors`}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;