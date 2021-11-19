import Link from 'next/link';
import Image from 'next/image';

const EventItem = function ({
  image, date, name, time, slug,
}) {
  return (
    <div className="md:flex flex-col md:flex-row m-5 justify-between items-center shadow-md md:pr-5 text-center rounded">
      <Image
        src={image.formats.thumbnail.url || '/images/event-default'}
        width={250}
        height={167}
        className="rounded-l"
      />
      <div className="flex-1 mt-2 mx-5">
        <span>
          {new Date(date).toLocaleDateString('en-US')}
          {' '}
          at
          {' '}
          {time}
        </span>
        <h1 className="font-semibold">{name}</h1>
      </div>
      <Link href={`/events/${slug}`}>
        <button
          className="text-white text-center bg-gray-500 hover:bg-[red] px-4 py-2 rounded my-2 md:m-0"
          type="button"
        >
          Details

        </button>
      </Link>
    </div>
  );
};

export default EventItem;
