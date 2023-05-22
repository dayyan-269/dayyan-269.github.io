"use client";

import { useState } from "react";

import PrimaryButton from "@/components/Buttons/PrimaryButton";

function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenuHandler = () => setIsMenuOpened(!isMenuOpened);

  return (
    <>
      <nav className='w-full p-5 flex flex-row justify-end lg:justify-start border-b-[1.5px] border-b-accent-color'>
        <ul className='w-9/12 hidden lg:flex lg:flex-row justify-center gap-x-20 mx-auto'>
          <li>
            <a href='#' className='text-center text-white'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='text-center text-white'>
              Skills
            </a>
          </li>
          <li>
            <a href='#' className='text-center text-white'>
              Projects
            </a>
          </li>
          <li>
            <a href='#' className='text-center text-white'>
              Contact
            </a>
          </li>
        </ul>
        <PrimaryButton
          className='flex items-center justify-items-center lg:hidden'
          onClickHandler={openMenuHandler}
        >
          <box-icon name='menu-alt-right' color='white'></box-icon>
        </PrimaryButton>
      </nav>
      <div className={`${isMenuOpened ? 'h-[192px]' : 'h-0'} duration-200 overflow-y-hidden flex flex-col gap-y-3 mx-10 mt-5 bg-secondary-color`}>
        <ul>
          <li className='text-white text-center p-3'>
            <a href='#'>Home</a>
          </li>
          <li className='text-white text-center p-3'>
            <a href='#'>Skills</a>
          </li>
          <li className='text-white text-center p-3'>
            <a href='#'>Projects</a>
          </li>
          <li className='text-white text-center p-3'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
