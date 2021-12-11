import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = function () {
  const [term, setTerm] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-white text-center border rounded-md py-1 outline-none focus:border-2 focus:border-red-400"
          placeholder="Search Events"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
