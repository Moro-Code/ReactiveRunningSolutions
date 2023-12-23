import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export const MobileNavigation = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenu = () => {
    if (menuOpen) {
      return (
        <div className="fixed z-20 top-0 left-0 bg-black flex flex-col slide-left h-screen">
          <button
            className="icon-clear text-5xl hover:text-red-700 ml-auto px-4"
            onClick={() => {
              setMenuOpen(false);
            }}
          />
          <nav className="flex flex-col divide-y-2 w-screen h-screen px-6">
            {links.map((link, index) => (
              <Link key={index} href={link.url} passHref legacyBehavior>
                <a
                  className="text-center text-white text-xl hover:text-red-700 py-4"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      );
    }
  };
  return (
    <header className="relative z-10 md:hidden bg-red-700 w-full flex justify-center items-center h-32 px-6">
      <nav className="flex h-max items-center">
        <Link href={"https://www.facebook.com/reactiverunningsolutions"}>
          <i className="icon-facebook text-5xl px-2 lg:px-4 hover:text-black cursor-pointer" />
        </Link>
        <Link href={"https://www.instagram.com/reactiverunningsolutions/"}>
          <i className="icon-instagram text-4xl hover:text-black cursor-pointer" />
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
