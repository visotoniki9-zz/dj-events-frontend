import Link from 'next/link';
import Image from 'next/image';

const EventItem = function ({
  image, date, name, time, slug,
}) {
  return (
    <div className="block md:flex flex-col md:flex-row m-5 justify-between items-center shadow-md pr-5 text-center">
      <Image
        src={image || '/images/event-default'}
        width={170}
        height={100}
      />
      <div className="flex-1 mt-2">
        <span>
          {date}
          {' '}
          at
          {' '}
          {time}
        </span>
        <h1 className="font-semibold">{name}</h1>
      </div>
      <Link href={`/events/${slug}`}>
        <button
          className="text-white text-center bg-gray-500 hover:bg-[red] px-4 py-2 rounded-xl m-2"
          type="button"
        >
          Details

        </button>
      </Link>
    </div>
  );
};

export default EventItem;
