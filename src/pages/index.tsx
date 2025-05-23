import Layout from '@/components/layout/layout.component';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Home() {
  return (
    <Layout title="Home | Portfolio">
      <section className="py-16">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            <div
              className="card p-8
                     border-2 border-primary-500
                      shadow-[0_0_8px_rgba(0,115,255,0.7),0_0_16px_rgba(0,115,255,0.5)]"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="mx-auto w-48 h-48">
                    <div className="rounded-full overflow-hidden w-48 h-48 mx-auto">
                      <img
                        src="/FrontEnd-Egineer.jpeg"
                        alt="Henrique Silvério"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/henrique.jpeg';
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h1 className="text-4xl font-bold mb-4">Henrique Silvério</h1>
                  <p className="text-xl text-gray-300 mb-6">
                    I’m a Frontend Engineer based in Uberlândia, Brazil, with
                    over 5 years of hands-on experience building
                    high-performance web applications using React, Next.js and
                    TypeScript. I specialize in crafting reusable component
                    libraries, optimizing load times and delivering intuitive
                    user interfaces. Passionate about code quality and
                    collaboration, I love exploring new web technologies to
                    create solutions that truly make an impact.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <a
                      href="https://github.com/HenrySilverio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <SiGithub size={20} />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/henrique-b-silverio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <SiLinkedin size={20} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-800/50">
        <div className="container-wrapper">
          <h2 className="section-title">Highlighted projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="project-card">
                <div className="project-image"></div>
                <div className="project-content">
                  <h3 className="text-xl font-semibold mb-2">Projeto</h3>
                  <p className="text-gray-300">
                    Apenas uma pequena descrição do projeto.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projetos"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
