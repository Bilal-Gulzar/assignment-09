"use client"
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton';

export default function ErrorBoundary() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 gap-10 mx-auto flex flex-wrap">
        <Skeleton className="bg[#f5f5f5]  lg:w-1/2 w-full relative h-[370px]" />
        <div className=" flex-grow flex lg:mt-5 flex-col gap-5">
          <Skeleton className="w-[28%] h-9" />
          <Skeleton className="w-[90%] lg:w-[80%]  h-7" />
          <Skeleton className="w-[80%] lg:w-[70%] h-7" />
          <Skeleton className=" w-[90%] lg:w-[80%] h-28 " />
          <Skeleton className="w-[25%] h-10 " />
        </div>
      </div>
    </div>
  );
}
