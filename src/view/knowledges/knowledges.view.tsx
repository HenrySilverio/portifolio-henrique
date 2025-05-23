import React from 'react';
import { IconType } from 'react-icons';
import { DiJavascript1, DiReact, DiGit, DiJava, DiCss3 } from 'react-icons/di';
import {
  SiTypescript,
  SiNextdotjs,
  SiCypress,
  SiGitlab,
  SiGithub,
  SiAngular,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiBootstrap,
  SiRedux,
  SiAmazon,
  SiSelenium,
  SiCucumber,
  SiTailwindcss,
  SiJquery,
  SiStorybook,
} from 'react-icons/si';
import { FaUsers as FaScrum } from 'react-icons/fa';
import { GiBearFace } from 'react-icons/gi';
import Layout from '@/components/layout/layout.component';

type Skill = {
  id: number;
  name: string;
  Icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { id: 1, name: 'JavaScript', Icon: DiJavascript1, color: '#f7df1e' },
  { id: 2, name: 'ReactJS', Icon: DiReact, color: '#61dafb' },
  { id: 3, name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
  { id: 4, name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
  { id: 5, name: 'Cypress', Icon: SiCypress, color: '#04a256' },
  { id: 6, name: 'Git', Icon: DiGit, color: '#f05032' },
  { id: 7, name: 'GitLab', Icon: SiGitlab, color: '#fc6d26' },
  { id: 8, name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
  { id: 9, name: 'Scrum', Icon: FaScrum, color: '#00a3e0' },
  { id: 10, name: 'AngularJS', Icon: SiAngular, color: '#dd1b16' },
  { id: 11, name: 'Node.js', Icon: SiNodedotjs, color: '#6cc24a' },
  { id: 12, name: 'Nest.js', Icon: SiNestjs, color: '#e0234e' },
  { id: 13, name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { id: 14, name: 'Bootstrap', Icon: SiBootstrap, color: '#7952b3' },
  { id: 15, name: 'Redux', Icon: SiRedux, color: '#764abc' },
  { id: 16, name: 'AWS', Icon: SiAmazon, color: '#ff9900' },
  { id: 17, name: 'Java', Icon: DiJava, color: '#007396' },
  { id: 18, name: 'Selenium', Icon: SiSelenium, color: '#43b02a' },
  { id: 19, name: 'Cucumber', Icon: SiCucumber, color: '#79c70f' },
  { id: 20, name: 'Advanced CSS Techniques', Icon: DiCss3, color: '#264de4' },
  { id: 21, name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06b6d4' },
    { id: 22, name: 'Zustand', Icon: GiBearFace, color: '#ffffff'},
  { id: 23, name: 'jQuery', Icon: SiJquery, color: '#0769ad' },
  { id: 24, name: 'Storybook', Icon: SiStorybook, color: '#ff4785' },
];

export default function KnowledgesView() {
  return (
    <Layout title="Knowledges | Portfolio">
      <section id="conhecimentos" className="py-16 bg-dark-900">
        <div className="container-wrapper">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-400 text-center mb-12">
            Knowledges
          </h2>
          <div
            className="card p-8
                     border-2 border-primary-500
                      shadow-[0_0_8px_rgba(0,115,255,0.7),0_0_16px_rgba(0,115,255,0.5)]"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {skills.map(({ id, name, Icon, color }) => (
                <div
                  key={id}
                  className="
                bg-dark-800 hover:bg-dark-700 
                transition-colors duration-200 
                p-4 rounded-lg flex flex-col items-center
              "
                >
                  <Icon size={36} color={color} className="mb-2" />
                  <span className="text-gray-300 text-sm font-medium">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
