import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <nav className=" flex relative justify-between items-center xl:px-24 lg:px-10 py-4 nav px-5 bg-main-10 z-50 border-b-[10px] border-b-primary-10 ">
      <Link href={"/"}>
        <Image alt="logo" src={logo} className=" w-[120px]" />
      </Link>

      <div className=" md:hidden">
        <button className=" w-[30px] flex flex-col gap-2">
          <span className="w-full bg-header-10 h-[2px]"></span>
          <span className="w-full bg-header-10 h-[2px]"></span>
          <span className="w-full bg-header-10 h-[2px]"></span>
        </button>
      </div>

      <ul className=" md:flex md:items-center gap-2 lg:gap-4 hidden text-center text-primary-10 font-medium list-none">
        <li>
          <Link className="" href={"/meet&grow"}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/work-with-us"}>Work With Us</Link>
        </li>
        <li className=" relative dropdown cursor-pointer flex flex-row items-center gap-2"><p>Partner With Us</p> 
          <Image className=" dropdown-arrow w-5 h-5" src={'/down-arrow.png'} width={50} height={50} alt="arrow"/>
          <ul className=" list-none hidden absolute top-6 w-[230px] bg-gray-200 bg-opacity-70 text-black text-left px-5 py-4 rounded-sm dropdown-menu">
            <li>
              <Link href={"/suppliers"} className=" block py-1">Suppliers</Link>
            </li>
            <li>
              <Link href={"/landlord"} className=" block py-1">Landlords and Agencies</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={"location.html"}>Location</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
