import React from 'react'
import { IoClose } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
type product = {
  id: number,
  name: string,
  type:string,
  available: boolean,
 
};
export default async function ServerSide() {
   
  const res = await fetch("https://simple-books-api.glitch.me/books");
   if(!res.ok){
    console.log("Error occured!")
    return
   }
  const  result:product[] =  await res.json()
    


  return (
    <div className=" lg:max-w-[1000px] xl:max-w-[1100px]  mx-5 lg:mx-auto sm:mx-5">
      <div className="grid sm:grid-cols-2 gap-y-7  gap-5 lg:grid-cols-3 pb-52 pt-10">
        {result.map((v) => (
          <div
            key={v.id}
            className="px-4 py-5 gap-5 rounded-lg shadow-md bg-white flex flex-col"
          >
            <div className="text-sm">

              <p className="text-gray-500 line-clamp-1">{v.type}</p>
            </div>
            <div className="flex gap-4 items-center text-sm">
              <p className="font-medium">{v.name}</p>
            </div>
            <div className="w-full">
              <button className="w-full font-medium text-gray-500 text-sm  tracking-wider hover:text-gray-300 px-8 py-4 border-gray-300 rounded-md  flex justify-center items-center border-[1.5px] ">
                {v.available ? (
                  <IoCheckmarkSharp  className='size-6 text-green-500'/>
                ) : (
                  <IoClose className="text-red-500 size-6" />
                )}{" "}
                Available
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
