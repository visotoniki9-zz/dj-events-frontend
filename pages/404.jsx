import Link from 'next/link';
import Layout from '../components/Layout';

const NotFoundPage = function () {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-7xl">404</h1>
        <h4 className="font-semibold">Sorry, there is nothing here</h4>
        <Link className="text-blue-300" href="/">Go back home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
