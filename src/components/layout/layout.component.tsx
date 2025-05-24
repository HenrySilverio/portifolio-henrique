import React from 'react';
import { LayoutProps } from './layout.interface';
import Navbar from '../navbar/navbar.component';
import Head from 'next/head';
import Footer from '../footer/footer.component';

const Layout: React.FC<LayoutProps> = ({ children, title = 'Portifolio' }) => {
    React.useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio pessoal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
