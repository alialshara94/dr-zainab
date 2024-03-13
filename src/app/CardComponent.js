'use client';
import React from 'react'
import Image from "next/image";

function CardComponent({imageUrl, ar_title,en_title, link}) {
  return (
    <div className="flex flex-wrap justify-center items-center  md:w-[45%] w-full">
        {/* Single Card */}
        <div onClick={()=>window.open(link,"_blank")} className="flex items-center justify-between w-full bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
          <div className="">
            <Image src={imageUrl} alt="Profile" width={100} height={100} />
          </div>
          <div className="px-4 py-2">
            <div className="text-gray-600 text-center">{ar_title}</div>
            <div className="text-gray-600 text-center">{en_title}</div>
          </div>
        </div>
      </div>
  )
}

export default CardComponent