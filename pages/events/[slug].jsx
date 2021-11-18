import Layout from '@components/Layout';
import { API_URL } from '@config/index';

const EventPage = function ({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Event page</h1>
      <h1>{events[0].name}</h1>
    </Layout>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const { events } = await res.json();

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: { events },
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();
//   return {
//     props: { events },
//   };
// }
