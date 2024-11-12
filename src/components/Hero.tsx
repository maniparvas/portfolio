import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';
import image from '../assets/prof.jpg';

export function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Mani Parvas</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            BTech CSE Student | ML Enthusiast | Automation Developer
          </p>
          <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
            Third-year Computer Science Engineering student passionate about
            Machine Learning, Computer Vision, and Process Automation.
            Experienced in developing CNN models and automation solutions using
            Python.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#projects"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Code2 size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
