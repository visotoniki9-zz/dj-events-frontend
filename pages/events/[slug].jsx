import Layout from '@components/Layout';
import Image from 'next/image';
import { API_URL } from '@config/index';

const EventPage = function ({ events }) {
  const {
    address, date, description, image, name, performers, time, venue,
  } = events[0];
  return (
    <Layout>
      <div className="md:py-5">
        <Image
          src={image.formats.large.url}
          width={900}
          height={600}
        />
      </div>
      <p>{`${new Date(date).toLocaleDateString('en-US')} at ${time}`}</p>
      <h1 className="text-3xl font-bold mt-2 mb-4 px-4">{name}</h1>
      <p>{performers}</p>
      <p className="py-2 px-4">{description}</p>
      <p>{`${venue} at ${address}`}</p>

    </Layout>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  };
}
