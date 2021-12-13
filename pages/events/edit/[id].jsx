import Layout from '@components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@config/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import Image from 'next/image';

const EditEventPage = function ({
  name, performers, venue, address, date, time, description, image, id,
}) {
  const [values, setValues] = useState({
    name,
    performers,
    venue,
    address,
    date,
    time,
    description,
  });
  const [imagePreview, setImagePreview] = useState({
    src: image?.formats?.thumbnail?.url || '/images/event-default.png',
    width: image?.formats?.thumbnail?.width || 150,
    height: image?.formats?.thumbnail?.height || 100,
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some((el) => el === '');

    if (hasEmptyFields) {
      toast.error('Please fill in all the fields.', { theme: 'colored' });
    } else {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        toast.error('Something went wrong on the server side');
      } else {
        const event = await res.json();
        router.push(`/events/${event.slug}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Layout>
      <div className="text-left mt-16 mx-8">
        {/* GoBack */}
        <div className="text-[red] my-2">
          <Link href="/events">Go Back</Link>
        </div>
        {/* Page title */}
        <h1 className="text-3xl font-bold mb-8">Edit Event</h1>
        {/* Image preview */}
        <div className="text-center relative">
          <Image
            src={imagePreview.src}
            width={imagePreview.width}
            height={imagePreview.height}
            className="rounded brightness-75"
          />
          <p className="text-white text-xl bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-md">
            Click to Set Image
          </p>
        </div>
        {/* Toast */}
        <ToastContainer closeOnClick />
        {/* Forms */}
        <form onSubmit={handleSubmit}>
          {/* Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8"
          >
            <div>
              <label className="block" htmlFor="name">
                Event Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
                className="w-full rounded focus:border-red-400 focus:ring-0"
              />
            </div>
            <div>
              <label className="block" htmlFor="performers">
                Performers
              </label>
              <input
                type="text"
                id="performers"
                name="performers"
                value={values.performers}
                onChange={handleInputChange}
                className="w-full rounded focus:border-red-400 focus:ring-0"
              />
            </div>
            <div>
              <label className="block" htmlFor="name">
                Venue
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={values.venue}
                onChange={handleInputChange}
                className="w-full rounded focus:border-red-400 focus:ring-0"
              />
            </div>
            <div>
              <label className="block" htmlFor="name">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
                className="w-full rounded focus:border-red-400 focus:ring-0"
              />
            </div>
            <div>
              <label className="block" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={moment(values.date).format('yyyy-MM-DD')}
                onChange={handleInputChange}
                className="w-full rounded focus:border-red-400 focus:ring-0"
              />
            </div>
            <div>
              <label className="block" htmlFor="time">
                Time
              </label>
              <input
                type="text"
                id="time"
                name="time"
                value={values.time}
                onChange={handleInputChange}
                className="w-full rounded focus:border-red-400 focus:ring-0"
              />
            </div>
          </div>
          <div className="mt-8">
            <label className="block" htmlFor="name">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
              className="w-full rounded focus:border-red-400 focus:ring-0 h-48"
            />
          </div>
          <input
            className="bg-gray-400 hover:bg-[red] cursor-pointer mt-4 w-full p-2 rounded text-white"
            type="submit"
            value="Update Event"
          />
        </form>
      </div>
    </Layout>
  );
};
export default EditEventPage;

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/events/${id}`);
  const event = await res.json();
  return {
    props: event,
  };
}
