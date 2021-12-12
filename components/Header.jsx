import Link from 'next/link';
import Search from '@components/Search';
import { LoginIcon } from '@heroicons/react/outline';

const Header = function () {
  return (
    <header className="flex flex-col text-center shadow h-auto sm:flex-row items-center justify-between bg-white sm:h-14 text-gray-700 py-4 px-5 w-screen ">

      {/* Logo */}
      <div className="hover:text-black text-[red] mx-5 text-xl">
        <Link href="/">DJ EVENTS</Link>
      </div>
      {/* Input */}
      <Search />
      {/* Nav */}
      <nav className="mt-2 sm:mt-0">
        <ul className="sm:flex flex mx-5 text-center">
          <li className="mx-2 hover:text-black py-2">
            <Link href="/events">Events</Link>
          </li>
          <li className="mx-2 hover:text-black py-2">
            <Link href="/events/add">AddEvent</Link>
          </li>
          <li className="mx-2 hover:text-black py-2">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="flex mx-2 text-white hover:bg-[red] bg-black py-2 px-3 ml-8 rounded-md">
            <LoginIcon className="w-4" />
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
