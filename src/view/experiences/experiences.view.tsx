import Layout from '@/components/layout/layout.component';
import React from 'react';

export default function ExperiencesView() {
const experiences = [
  {
    id: 1,
    company: 'Claro Brazil',
    role: 'Mid Frontend Engineer',
    period: 'Nov 2023 - Present',
    description: 'Engineered innovative features for the Econn platform using TypeScript, contributing to 53% of the company’s online sales revenue. Led the frontend development of a new streaming service sales journey by introducing a credit card payment feature that improved purchase completion by 70%. Developed reusable, responsive, mobile-first DesignOps components in TypeScript, ensuring consistency across applications and improving efficiency for over 10,000 employees.'
  },
  {
    id: 2,
    company: 'Claro Brazil',
    role: 'Full-Stack Engineer',
    period: 'Jun 2022 - Oct 2023',
    description: 'Led the migration of legacy systems from Java to JavaScript, building full-stack solutions with Node.js and React.js for user registration, password reset, login, and the complete My Account experience. Spearheaded test automation with Cypress, Selenium, and Cucumber, mentoring QA teams and improving test coverage. Optimized CI/CD pipelines with Jenkins and GitLab to enhance deployment workflows and reliability. Deployed and scaled production environments on AWS and Docker within Agile Scrum teams.'
  },
  {
    id: 3,
    company: 'ASC Brazil',
    role: 'Frontend Engineer',
    period: 'May 2022',
    description: 'Designed and developed robust, scalable chat applications in React.js, enhancing user engagement and communication efficiency. Implemented advanced performance optimization techniques, resulting in a more responsive user interface.'
  },
  {
    id: 4,
    company: 'Cropland',
    role: 'Junior Full-Stack Developer',
    period: 'Nov 2020 - Jul 2022',
    description: 'Built an agricultural products sales platform using JavaScript, Node.js, Sequelize, React, HTML, CSS, and PostgreSQL. Streamlined inventory management, sales region tracking, and customer location mapping, improving operational efficiency by 60% and equipping sellers with advanced management tools.'
  }
];

  return (
    <Layout title="Experiences | Portfolio">
      <section className='py-16'>
        <div className="container-wrapper">
          <h1 className="section-title">Experiences</h1>

          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((exp) => (
              <div key={exp.id} className="card flex flex-col md:flex-row gap-6 animate-fade-in">
                <div className="md:w-1/4">
                  <div className="font-bold text-xl mb-1">{exp.company}</div>
                  <div className="text-gray-400 text-sm">{exp.period}</div>
                  <div className="text-blue-400 mt-1">{exp.role}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
