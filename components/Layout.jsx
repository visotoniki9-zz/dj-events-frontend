import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = function ({
  title, keywords, description, children,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className="mx-14 my-auto max-w-4xl px-0 py-7">
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm',
};

export default Layout;
