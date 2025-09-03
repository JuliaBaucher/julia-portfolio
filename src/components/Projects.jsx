import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../mock';

const Projects = ({ currentDesign = 'dark' }) => {
  const isDark = currentDesign === 'dark';
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const sectionClasses = `py-20 ${
    isDark ? 'bg-gray-950' : 'bg-gray-50'
  }`;

  return (
    <section id="projects" className={sectionClasses}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            isDark ? 'bg-gray-600' : 'bg-gray-400'
          }`}></div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Showcasing impactful products that have driven real business value
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? isDark 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  : isDark
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className={`group overflow-hidden ${
              isDark 
                ? 'bg-gray-900 border-gray-800 hover:bg-gray-800' 
                : 'bg-white border-gray-200 hover:shadow-xl'
            } transition-all duration-300 hover:scale-[1.02]`}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  isDark 
                    ? 'bg-black/20 group-hover:bg-black/40' 
                    : 'bg-white/10 group-hover:bg-black/20'
                }`}></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    project.status === 'Production' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className={`text-xl mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className={`mb-3 ${
                      isDark 
                        ? 'bg-gray-800 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Metrics */}
                <div className={`flex items-center gap-2 text-sm font-semibold ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <TrendingUp className="h-4 w-4" />
                  {project.metrics}
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className={`text-xs ${
                        isDark 
                          ? 'border-gray-600 text-gray-400 hover:bg-gray-800' 
                          : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                      }`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className={`flex-1 group/btn ${
                      isDark 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => console.log('View project details:', project.title)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    View Details
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className={`${
                      isDark 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => console.log('View case study:', project.title)}
                  >
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Interested in working together?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            } transition-all duration-300 hover:scale-105`}
          >
            Let's Talk
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;