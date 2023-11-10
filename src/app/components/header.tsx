import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-slate-200 shadow">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="flex flex-wrap font-bold pr-5 items-center">MY AUTHENTICATION APP</h1>
          
        </Link>
        <form className="flex flex-row gap-2 items-center">
            <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-md bg-transparent border border-slate-400 focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
      
        </form>
      
        <ul className="flex flex-row gap-5">
          <Link to="/">
            <li className='hidden sm:inline hover:underline' >Home</li>
          </Link>

          <Link to="/about">
            <li className='hidden sm:inline hover:underline'>About</li>
          </Link>

          <Link to="/signin">
            <li className='  hover:underline'>Sign In</li>
          </Link>
        </ul>
    
      </div>
    </header>
  );
}

