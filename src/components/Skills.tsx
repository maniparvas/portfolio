import React from 'react';
import { Brain, Code, Database, Terminal } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      icon: Code,
      items: ['C', 'C++', 'Python', 'JavaScript']
    },
    {
      category: 'Machine Learning',
      icon: Brain,
      items: ['TensorFlow', 'OpenCV', 'CNN', 'Computer Vision']
    },
    {
      category: 'Automation',
      icon: Terminal,
      items: ['Selenium', 'BeautifulSoup', 'Automation Scripts']
    },
    {
      category: 'Tools & Technologies',
      icon: Database,
      items: ['Git', 'VS Code', 'Jupyter Notebook']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}