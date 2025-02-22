/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>

<footer className="border border-secondary py-5">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm font-semibold leading-6 sm:text-center flex justify-between h-5 ml-2 mr-1"><a href="/" className="hover:underline"> BookIT™</a>
    </span>
    <span className="text-xs sm:text-center pl-12">
    ©2023 BookIT All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center text-sm font-semibold leading-6">
        <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Hotels</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
    </ul>
    </div>
</footer>

    </>
  );
};

export default Footer;
