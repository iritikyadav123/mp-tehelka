"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function HoverCard({ slidingCard }: any) {

  const [value, setValue] = useState(0);
  function increaseValue() {
    value < slidingCard.length - 1 ? setValue(c => c = c + 1) : setValue(0);
  }
  function discreaseValue() {
    value > 0 ? setValue(c => c = c - 1) : setValue(slidingCard.length - 1);
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(prevValue =>
        prevValue < slidingCard.length - 1 ? prevValue + 1 : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  const router = useRouter();
  return (
    <div
      className="sm:flex sm:tems-center sm:justify-center sm:mt-0 w-full h-[40vh] sm:h-[50vh] sm:w-[50%] ">
      <div className="relative flex w-full items-center h-full justify-center">
        <img src={`${slidingCard[value].imgUrl}`}  onClick={() => { router.push(`newspage/${slidingCard[value].id}`) }} className={` w-full flex items-center justify-center h-full  bg-contain bg-no-repeat bg-center flex-col `} />
        <img src="/left.svg" onClick={discreaseValue} className="absolute left-4  top-[8rem] text-4xl font-light text-gray-400 active:text-gray-700 bg-white/40 rounded-lg backdrop-blur-2xl active:bg-gray-100" />
        <div className="absolute  z-1 left-5 bottom-6 h-30  max-w-[80%] backdrop-blur-3xl ">
          <div className="text-lg font-semibold text-orange-300">{slidingCard[value].title.substring(0, 80) + "...."}</div>
        </div>
        <div className=" absolute bottom-6 sm:bottom-2 backdrop-blur-3xl rounded-lg  flex mt-40 bg-transparent">
          {
            slidingCard.map((item: any) => (
              <img src="/dot.svg" key={item.id} className={`text-3xl rounded-full ml-2 ${item.id == slidingCard[value].id ? "bg-gray-500 " : "bg-white "}`} />
            ))
          }
        </div>
        <img src="/right.svg" onClick={increaseValue} className="absolute right-4 top-[8rem] text-4xl font-light text-gray-400 active:text-gray-700 bg-white/40 rounded-lg backdrop-blur-2xl active:bg-gray-100" />
      </div>
    </div>
  )
}



