import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export const DesktopNavigation = ({ links }) => {
  return (
    <header className="relative z-10 hidden md:flex bg-gradient-to-r from-red-800 to-red-700 w-screen justify-between items-center px-8 py-4 shadow-lg">
      <div className="flex items-center">
        <Image
          src={"/logo.webp"}
          alt={"Reactive Running Solutions Logo"}
          width={200}
          height={200}
          className="transition-transform hover:scale-105 duration-300"
        />
      </div>
      <nav className="flex gap-8">
        {links.map((link, index) => {
          if (link.url === "#services") {
            return (
              <div key={index} className="relative group">
                <button
                  className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-200 relative group flex items-center gap-1"
                >
                  {link.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-60 bg-red-800 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="#services" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-white hover:bg-red-700 transition-colors duration-200">
                      General Training Program
                    </a>
                  </Link>
                  <Link href="#shuttleRun" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-white hover:bg-red-700 transition-colors duration-200">
                      Shuttle Run Program
                    </a>
                  </Link>
                </div>
              </div>
            );
          }
          return (
            <Link key={index} href={link.url} passHref legacyBehavior>
              <a className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-200 relative group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            </Link>
          );
        })}
      </nav>
      <nav className="flex items-center">
        <Link href={"https://www.instagram.com/reactiverunningsolutions/"}>
          <i className="icon-instagram text-4xl text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer" />
        </Link>
      </nav>
    </header>
  );
};

DesktopNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
