import Link from 'next/link';

const Footer = function () {
  return (
    <footer className="text-center text-sm">
      <p>Copyright &copy; DJ Events 2021</p>
      <p className="text-blue-400">
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
};

export default Footer;
