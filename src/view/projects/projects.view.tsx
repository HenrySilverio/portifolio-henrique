import Layout from '@/components/layout/layout.component';
import React, { useState } from 'react';

export default function ProjectsView() {
  const [activeFilter, setActiveFilter] = useState('Frontend');

  const filters = ['Frontend', 'Backend', 'Mobile'];

  const projects = [
    {
      id: 1,
      title: 'Forest 🌲',
      description: 'Forest is an immersive, nature-inspired landing page built entirely with Tailwind CSS and enhanced with animations, dynamic weather via Open-Meteo API, and responsive design techniques. It simulates a real-world forest retreat website, ideal for eco-tourism, glamping, or digital detox experiences.',
      category: 'Frontend',
      image: '/forest.png',
      link: 'https://thenewforestexperience.net/'
    },
    {
      id: 2,
      title: 'Uberlândia Cultural Platform 🎭🎨🎵',
      description: 'The Uberlândia Cultural Platform was developed as part of the Innovation and Entrepreneurship Program linked to the Software Engineering course’s extension activities. The platform centralizes information about tourist attractions, cultural events, and provides a dedicated space for independent artists to showcase their work.',
      category: 'Frontend',
      image: '/uberlandia-cultural.png',
      link: 'https://cultural-platform-uberlandia.henrique-silverio.com/',
    },
    {
      id: 3,
      title: 'Pillar Ui',
      description: 'This project involves building a scalable Design System using Next.js, TypeScript, Tailwind CSS, and Storybook. Based on Atomic Design principles, we’ll create reusable components—from design tokens to complex UI elements—fully documented and themeable. The result is a flexible, interactive system ready to streamline development and ensure design consistency across applications.',
      category: 'Frontend',
      image: '/pillar-ui.png',
      link: '',
    },
    {
      id: 4,
      title: 'Projeto',
      description: 'Apenas uma pequena descrição do projeto.',
      category: 'Backend',
    },
    {
      id: 5,
      title: 'Projeto',
      description: 'Apenas uma pequena descrição do projeto.',
      category: 'Backend',
    },
    {
      id: 7,
      title: 'Projeto',
      description: 'Apenas uma pequena descrição do projeto.',
      category: 'Mobile',
    },
  ];

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.category === activeFilter)
    : projects;

  return (
    <Layout title="Projetos | Portfolio">
      <section className="py-16">
        <div className="container-wrapper">
          <h1 className="section-title">Projects</h1>

          <div className="flex justify-center mb-10 space-x-4 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter
                    ? 'filter-button-active'
                    : 'filter-button'
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="project-content mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-indigo-500 hover:underline"
                  >
                    Ver projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
