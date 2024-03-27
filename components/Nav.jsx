"use client";

import Link from "next/link";
import Image from "next/image";
import {useState } from "react";
import Menu from "@components/MenuDownloadButton"; // Make sure to adjust the import path accordingly

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>

        <Link href='/' className='flex gap-2 flex-center'>
            <Image
            src='/images/logo.png'
            alt='logo'
            width={50}
            height={50}
            quality={100}
            className='object-contain'
            />
        <p className='logo_text'>Sweet Tooth Crepes</p>
        </Link>

        <div className='black_btn'>
            <Menu />
        </div>

    </nav>
  );
};

export default Nav;
