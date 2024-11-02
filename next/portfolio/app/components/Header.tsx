import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex items-center justify-center'>
      <div className="navbar bg-base-100 max-w-[1600px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/">Home</Link></li>
              <li>
                <Link href="/">Works</Link>
                <ul className="p-2">
                  <li><Link href="/">Design</Link></li>
                  <li><Link href="/">Frontend</Link></li>
                  <li><Link href="/">Robotics</Link></li>
                </ul>
              </li>
              <li><Link href="/">Blog</Link></li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">Sushant</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li>
              <details>
                <summary>Works</summary>
                <ul className="p-2">
                  <li><Link href="/">Design</Link></li>
                  <li><Link href="/">Frontend</Link></li>
                  <li><Link href="/">Robotics</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="/">Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/" className="btn">
            Contact
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;