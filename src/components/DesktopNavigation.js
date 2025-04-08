import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { VeteranOwnedBadge } from "./VeteranOwnedBadge";

export const DesktopNavigation = ({ links }) => {
  return (
    <header className="relative z-10 hidden md:flex bg-red-800 w-full items-center px-8 py-4">
      {/* Left Section - Logo */}
      <div className="flex flex-col items-center">
        <div className="w-[120px]">
          <Image
            src={"/logo.webp"}
            alt={"Reactive Running Solutions Logo"}
            width={120}
            height={120}
            className="transition-transform hover:scale-105 duration-300"
          />
          <div className="mt-1.5">
            <VeteranOwnedBadge />
          </div>
        </div>
      </div>

      {/* Center and Right Sections */}
      <div className="flex-1 flex items-center justify-center">
        <nav className="flex items-center gap-12">
          {links.map((link, index) => {
            if (link.url === "#services") {
              return (
                <div key={index} className="relative group">
                  <button
                    className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-200 flex items-center gap-1"
                  >
                    {link.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
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
                <a className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-200">
                  {link.name}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Instagram Icon */}
      <div className="flex items-center ml-8">
        <Link href={"https://www.instagram.com/reactiverunningsolutions/"}>
          <i className="icon-instagram text-3xl text-white hover:text-gray-200 transition-colors duration-200" />
        </Link>
      </div>
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
