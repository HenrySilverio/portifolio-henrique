import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/layout.component';

export default function Home() {
  return (
    <Layout title="Início | Portfolio">
      <section className="py-16">
        <div className="container-wrapper">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <div className="mx-auto w-48 h-48">
                <ProfileImage 
                  src="/profile.jpg" 
                  alt="Henrique Silverio" 
                  size={192}
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Henrique Silverio</h1>
              <p className="text-xl text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor dolor ac felis
                lobortis efficitur. Donec ut nulla non nulla tincidunt eleifend.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">@username</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Empresa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">32 seguidores</span>
                </div>
              </div>
              <div>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-800/50">
        <div className="container-wrapper">
          <h2 className="section-title">Projetos destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="project-card">
                <div className="project-image"></div>
                <div className="project-content">
                  <h3 className="text-xl font-semibold mb-2">Projeto</h3>
                  <p className="text-gray-300">Apenas uma pequena descrição do projeto.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projetos" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </section>
      
      {/* Responsive testing component - remove in production */}
      <ResponsiveTest />
    </Layout>
  );
}
