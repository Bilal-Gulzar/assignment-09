"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { IoStarHalfOutline } from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton";
import { IoIosStar } from "react-icons/io";
type rating = {
    rate:number,
    count:number
}
type product = {
  id: number,
  title: string,
  price: number,
  category:string,
  description: string,
  image: string,
  rating: rating
};
export default function ClientSide() {
const [data,setData] = useState<product[]>([])
const [isTrue,setIsTrue] = useState<boolean>(true)

useEffect(()=>{
 fetchData()


    },[])
 
    const fetchData = async() => {
   const res =  await fetch("https://fakestoreapi.com/products")
   if(!res.ok){
    console.log("Error occured!")
    return
   
    
}
// const  result:product =  await res.json()
setData(await res.json());
setTimeout(() => {
  setIsTrue(false);
}, 1000);
}

const array = Array.from({length:6},(_,index)=>index)
  return (
    <div className=" lg:max-w-[1000px] xl:max-w-[1100px]  mx-5 lg:mx-auto sm:mx-5">
        {!isTrue ?
      <div className="grid sm:grid-cols-2  gap-5 lg:grid-cols-3 pb-52 pt-10">
        {data.map((v: product) => (
          <div
            key={v.id}
            className="px-4 py-5 gap-5 rounded-lg bg-white flex flex-col"
          >
            <Link href={`/client-side-code/${v.id}`}>
              {v.image ? (
                <div className="mx-auto  relative h-[300px] sm:h-80  bg-[#f5f5f5] rounded-md">
                  <Image
                    src={v.image}
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    alt={v.title || "image"}
                    priority
                  />
                </div>
              ) : (
                <div className="bg-[#f5f5f5] w-full h-72 "></div>
              )}
            </Link>
            <div className="text-sm">
              <p className="font-medium">{v.category}</p>
              <p className="text-gray-500 line-clamp-1">{v.title}</p>
            </div>
            <div className="flex gap-4 items-center text-sm">
              <p className="font-medium">${v.price}</p>
              <div className="bg-[#f5f5f5] items-center  text-xs py-2 px-4 rounded-full gap-1 flex">
                <p>Rating {v.rating.rate}</p>
                <span className="flex items-center gap-0.5">
                  <IoIosStar />
                  <IoIosStar />
                  <IoStarHalfOutline />
                </span>
              </div>
            </div>
            <div className="w-full">
              <button className="w-full font-medium text-gray-300 text-sm tracking-wider hover:text-gray-400 px-8 py-4 border-gray-300 rounded-md  flex justify-center items-center border-[1.5px] ">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      :
      <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 pb-52 pt-10">
        {array.map((_, index) => (
          <div
            key={index}
            className="gap-5 rounded-lg p-3 bg-white flex flex-col"
          >
            <Skeleton className="w-full h-[300px] sm:h-80" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-14 h-5" />
              <Skeleton className="w-28 h-5" />
              <Skeleton className="w-40 h-5" />
            </div>
            <Skeleton className="w-full h-12 mt-2" />
          </div>
        ))}
      </div>
}
    </div>
  );
}
