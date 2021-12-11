import { API_URL } from '@config/index';
import Layout from '@components/Layout';
import EventItem from '@components/EventItem';
import { useRouter } from 'next/router';
import qs from 'qs';

const SearchPage = function ({ events }) {
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <h1 className="text-3xl font-bold mt-5">
        Search Results for
        {' '}
        {router.query.term}
      </h1>
      {events.map(({
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
    </Layout>
  );
};

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
export default SearchPage;
