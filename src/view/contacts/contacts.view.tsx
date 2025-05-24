import Layout from '@/components/layout/layout.component';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function ContactsView() {
  return (
    <Layout title="Contact | Portfolio">
      <section className="py-16">
        <div className="container-wrapper">
          <h1 className="section-title">Contact</h1>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div className="w-full md:w-1/3">
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
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold mb-4">Henrique Silverio</h2>
                  <p className="text-gray-300 mb-6">
                    Hi, I’m Henrique Silvério—a Frontend Engineer based in
                    Uberlândia, Brazil. With 5+ years of experience building
                    fast, scalable React & Next.js applications in TypeScript, I
                    focus on performance optimization, reusable design systems
                    and seamless team collaboration. Interested in working
                    together? Let’s chat!
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

              <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
                <div className="flex flex-col items-center">
                  <FaEnvelope size={32} className="mb-3 text-gray-300" />
                  <h3 className="text-lg font-medium mb-1">E-mail</h3>
                  <p className="text-gray-300">
                    henrique.silverio.dev@hotmail.com
                  </p>
                </div>

                {/* Telefone */}
                <div className="flex flex-col items-center">
                  <FaPhone size={32} className="mb-3 text-gray-300" />
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-gray-300">+55 (34) 9 8441-6591</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
