import React from 'react';
import { Brain, Mail, Train, TrendingUp, Camera } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Image Authenticity Detection',
      description: 'Developed a CNN model to detect manipulated and edited images from real ones. Achieved 94% accuracy using transfer learning and custom dataset.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV']
    },
    {
      title: 'Real-time Object Detection',
      description: 'Implemented SSD MobileNet model for live object detection through webcam feed. Capable of detecting multiple objects in real-time with high accuracy.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800',
      tags: ['Python', 'TensorFlow', 'SSD MobileNet', 'OpenCV']
    },
    {
      title: 'IRCTC Ticket Booking Bot',
      description: 'Automated train ticket booking system using Selenium. Features include automatic form filling, seat preference selection, and payment processing.',
      icon: Train,
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800',
      tags: ['Python', 'Selenium', 'BeautifulSoup']
    },
    {
      title: 'Stock Trading Bot',
      description: 'Developed an automated trading system for placing buy/sell orders based on technical indicators and market conditions.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
      tags: ['Python', 'Selenium', 'Pandas', 'Technical Analysis']
    },
    {
      title: 'Automated Mail Sender',
      description: 'Built an automated system for sending personalized emails to multiple recipients with custom templates and attachment handling.',
      icon: Mail,
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800',
      tags: ['Python', 'SMTP', 'Pandas']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                  <project.icon className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}