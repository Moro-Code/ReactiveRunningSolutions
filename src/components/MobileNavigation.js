import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export const MobileNavigation = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const mobileMenu = () => {
    if (menuOpen) {
      return (
        <div className="fixed z-20 top-0 left-0 bg-black flex flex-col slide-left h-screen">
          <button
            className="icon-clear text-5xl hover:text-red-700 ml-auto px-4"
            onClick={() => {
              setMenuOpen(false);
              setServicesOpen(false);
            }}
          />
          <nav className="flex flex-col divide-y-2 w-screen h-screen px-6">
            {links.map((link, index) => {
              if (link.url === "#services") {
                return (
                  <div key={index} className="py-4">
                    <button
                      className="text-center text-white text-xl hover:text-red-700 w-full flex items-center justify-center gap-2"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.name}
                      <svg 
                        className={`w-4 h-4 transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="mt-4 space-y-2 bg-red-900/50 rounded-lg p-4">
                        <Link href="#services" passHref legacyBehavior>
                          <a
                            className="block text-center text-white text-lg hover:text-red-700 py-2"
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            General Training Program
                          </a>
                        </Link>
                        <Link href="#shuttleRun" passHref legacyBehavior>
                          <a
                            className="block text-center text-white text-lg hover:text-red-700 py-2"
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            Shuttle Run Program
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={index} href={link.url} passHref legacyBehavior>
                  <a
                    className="text-center text-white text-xl hover:text-red-700 py-4"
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </nav>
        </div>
      );
    }
  };

  return (
    <header className="relative z-10 md:hidden bg-red-700 w-full flex justify-center items-center h-32 px-6">
      <nav className="flex h-max items-center">
        <Link href={"https://www.instagram.com/reactiverunningsolutions/"} passHref legacyBehavior>
          <a>
            <i className="icon-instagram text-4xl hover:text-black cursor-pointer" />
          </a>
        </Link>
      </nav>
      <Image
        src={"/logo.webp"}
        alt={"Reactive Running Solutions Logo"}
        width={200}
        height={200}
      />
      <button
        className="icon-menu text-5xl hover:text-black"
        onClick={() => {
          setMenuOpen(true);
        }}
      />
      {mobileMenu()}
    </header>
  );
};

MobileNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
