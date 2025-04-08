import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { VeteranOwnedBadge } from "./VeteranOwnedBadge";

export const MobileNavigation = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const mobileMenu = () => {
    if (menuOpen) {
      return (
        <div className="fixed inset-0 z-20 bg-black flex flex-col w-full h-full">
          <div className="flex items-center justify-end px-4 py-3 border-b border-gray-800">
            <button
              className="text-3xl text-white hover:text-gray-300"
              onClick={() => {
                setMenuOpen(false);
                setServicesOpen(false);
              }}
            >
              <i className="icon-clear" />
            </button>
          </div>
          <nav className="flex flex-col divide-y divide-gray-800 px-4">
            {links.map((link, index) => {
              if (link.url === "#services") {
                return (
                  <div key={index} className="py-4">
                    <button
                      className="text-white text-2xl font-medium hover:text-gray-300 w-full flex items-center justify-between"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.name}
                      <svg 
                        className={`w-6 h-6 transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="mt-4 space-y-2 bg-gray-900 rounded-lg p-4">
                        <Link href="#services" passHref legacyBehavior>
                          <a
                            className="block text-white text-xl hover:text-gray-300 py-2"
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
                            className="block text-white text-xl hover:text-gray-300 py-2"
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
                    className="block text-white text-2xl font-medium hover:text-gray-300 py-4"
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
    return null;
  };

  return (
    <header className="relative z-10 md:hidden bg-red-800 w-full flex justify-between items-center px-4 py-3">
      <button
        className="text-3xl text-white hover:text-gray-300"
        onClick={() => setMenuOpen(true)}
      >
        <i className="icon-menu" />
      </button>
      
      <div className="flex flex-col items-center">
        <div className="w-[80px]">
          <Image
            src={"/logo.webp"}
            alt={"Reactive Running Solutions Logo"}
            width={80}
            height={80}
            className="transition-transform hover:scale-105 duration-300"
          />
          <div className="mt-1.5">
            <VeteranOwnedBadge />
          </div>
        </div>
      </div>

      <Link 
        href={"https://www.instagram.com/reactiverunningsolutions/"} 
        passHref 
        legacyBehavior
      >
        <a className="text-white hover:text-gray-300 transition-colors duration-200">
          <i className="icon-instagram text-3xl" />
        </a>
      </Link>

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
