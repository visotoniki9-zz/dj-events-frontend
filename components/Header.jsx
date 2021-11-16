import Link from 'next/link';

const Header = function () {
  return (
    <header className="flex flex-col text-center shadow h-auto md:flex-row items-center justify-between bg-white md:h-14 text-gray-700 py-4 ">

      {/* Logo */}
      <div className="hover:text-black text-[red] mx-5 text-xl">
        <Link href="/">DJ EVENTS</Link>
      </div>
      {/* Input */}
      <input
        className="bg-white text-center border rounded-md py-1 outline-none focus:border-2"
        placeholder="Search Events"
      />

      {/* Nav */}
      <nav className="mt-2 md:mt-0">
        <ul className="md:flex flex mx-5 text-center">
          <li className="mx-2 hover:text-black">
            <Link href="/events">Events</Link>
          </li>
          <li className="mx-2 hover:text-black">
            <Link href="/events">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
