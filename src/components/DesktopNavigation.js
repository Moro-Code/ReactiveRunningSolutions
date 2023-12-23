import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export const DesktopNavigation = ({ links }) => {
  return (
    <header className="relative z-10 hidden md:flex bg-red-700 w-screen justify-center items-center">
      <Image
        src={"/logo.webp"}
        alt={"Reactive Running Solutions Logo"}
        width={300}
        height={300}
      />
      <nav className="flex divide-x-2 -ml-10">
        {links.map((link, index) => (
          <Link key={index} href={link.url} passHref legacyBehavior>
            <a className="text-base font-medium text-white text-xs xl:text-lg hover:text-black px-2 lg:px-4">
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
      <nav className="flex items-center">
        <Link href={"https://www.facebook.com/reactiverunningsolutions"}>
          <i className="icon-facebook text-5xl px-2 lg:px-4 hover:text-black cursor-pointer" />
        </Link>
        <Link href={"https://www.instagram.com/reactiverunningsolutions/"}>
          <i className="icon-instagram text-4xl hover:text-black cursor-pointer" />
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
