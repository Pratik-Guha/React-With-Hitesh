"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
const page = () => {
  const [images, setimages] = useState([]);
  const getImages = async () => {
    // console.log("Just Image")
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      console.log(data);
      setimages(data);
    } catch (error) {
      console.error("Error fetching Images");
    }
  };
  return (
    // <div className='text-center py-10'>Pratik Guha</div>
    <>
      <h1 className=" text-lg font-bold text-cyan-600 p-6 text-center">
        This is router testing
      </h1>
      <div className=" text-center ">
        <button
          className="px-3 py-2 bg-blue-600 font-semibold text-center rounded-full text-white "
          onClick={getImages}
        >
          Get Images
        </button>
        <div className="p-20 flex justify-between flex-wrap flex-row ">
          {images.map((img,i)=>{
              return <img src={img.download_url} key={i} className="h-30 w-30"/>
          })}
          </div>
      </div>
    </>
  );
};

export default page;
