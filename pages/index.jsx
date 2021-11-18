import Link from 'next/link';
import { API_URL } from '../config/index';
import Layout from '../components/Layout';
import EventItem from '../components/EventItem';

const Home = function ({ events }) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Upcoming Events</h1>
      {events.slice(0, 5).map(({
        id, image, date, name, time, slug,
      }) => (
        <EventItem
          key={id}
          image={image}
          date={date}
          time={time}
          name={name}
          slug={slug}
        />
      ))}
      {events.length > 0 && (
        <Link href="/events">
          <button
            type="button"
            className="bg-black text-white rounded p-4 hover:bg-[red]"
          >
            View all events

          </button>
        </Link>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: events,
    // revalidate: 1,
  };
}
export default Home;
