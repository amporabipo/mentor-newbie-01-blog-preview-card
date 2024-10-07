'use client';
import Image from "next/image";
import Link from "next/link";
import { GoProjectSymlink, } from "react-icons/go";
import { PiInstagramLogoLight, PiLinkedinLogo } from "react-icons/pi";

import { useState } from 'react';

export const Signature = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-[1em] left-[1em]">
      <button
        className="border-[1px] border-white text-white rounded-full"
        onClick={toggleMenu}
      >
        <Image
          src={'/favicon.svg'}
          width={30}
          height={30}
          alt="andresrw.com"
        />
      </button>
      {isOpen && (
        <div className="relative">
          <div className="absolute group bottom-[2.6em] left-[0.1em]">
            <button className="bg-black 
            rounded-full border-[1px] border-white p-1">
              <Link href={'https://programmer.andresrw.com/'} target="_blank">
                <GoProjectSymlink size={20} fill="#f9f9f9" />
              </Link>
            </button>
            <span className="hidden group-hover:block
             text-white absolute left-10 top-1/2
              transform -translate-y-1/2
               whitespace-nowrap px-1 bg-black">
              [programmer.andresrw.com]
            </span>
          </div>
          <div className="absolute group bottom-[4.9em] left-[0.1em]">
            <button className="bg-black
            rounded-full border-[1px] border-white p-1">
              <Link href={'https://www.linkedin.com/in/andresrw'} target="_blank">
                <PiLinkedinLogo size={20} fill="#f9f9f9" />
              </Link>
            </button>
            <span className="hidden group-hover:block
             text-white absolute left-10 top-1/2 transform
              -translate-y-1/2 whitespace-nowrap px-1 bg-black">
              Linkeding
            </span>
          </div>
          <div className="absolute group bottom-[7.1em] left-[0.1em] ">
            <button className="bg-black
            rounded-full border-[1px] border-white p-1">
              <Link href={'https://www.instagram.com/programmer.andresrw/'} target="_blank">
                <PiInstagramLogoLight fill="#f9f9f9" size={20} />
              </Link>
            </button>
            <span className="hidden group-hover:block
             text-white absolute left-10 top-1/2
             transform -translate-y-1/2 whitespace-nowrap px-1 bg-black">
              @programmer.andresrw
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

