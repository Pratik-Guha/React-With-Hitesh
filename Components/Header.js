import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
    {/* <div className='flex flex-col m-4 underline gap-5'>
        <a href='/Home'>Home</a>
        <a href='/About'>About</a>
        <a href='/Product'>Product</a>
      </div> */}
      

      <div className="flex flex-col m-4  gap-5 justify-center text-center items-center">
        <Link href="/Home" className=" text-red-700">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Product">Product</Link>
      </div>
    </>
  );
};

export default Header;
