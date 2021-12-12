import Layout from '@components/Layout';
import Image from 'next/image';
import { API_URL } from '@config/index';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const EventPage = function ({ events }) {
  const router = useRouter();
  const deleletEvent = async () => {
    if (confirm('Are you sure?')) {
      const res = await fetch(
        `${API_URL}/events/${events[0].id}`,
        {
          method: 'DELETE',
        },
      );
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push('/events');
      }
    }
    console.log('delete');
  };
  const editEvent = () => {
    console.log('edit');
  };
  const {
    address, date, description, image, name, performers, time, venue,
  } = events[0];
  return (
    <Layout>
      <ToastContainer />
      {/* Buttons */}
      <div className="flex justify-end mt-4">
        {/* Edit Button */}
        <button
          type="button"
          className="flex ml-4 items-center text-blue-400 hover:text-blue-500"
          onClick={editEvent}
        >
          <PencilIcon className="h-4" />
          Edit Event
        </button>
        {/* Delete Button */}
        <button
          type="button"
          className="flex ml-4 items-center text-red-400 hover:text-red-500"
          onClick={deleletEvent}
        >
          <TrashIcon className="h-4" />
          Delete Event
        </button>
      </div>
      <div className="md:py-5">
        <Image
          src={image?.formats?.large?.url || '/images/event-default.png'}
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
