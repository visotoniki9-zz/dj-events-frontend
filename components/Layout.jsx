import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';

const Layout = function ({
  title, keywords, description, children,
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-center">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className="max-w-4xl w-full px-0">
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
