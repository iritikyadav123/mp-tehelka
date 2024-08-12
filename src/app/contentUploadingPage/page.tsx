
"use client"
 
import BreakingInputNews from "@/components/BreakingInputNews";
import NewstestPage from "@/components/NewtestPage";
import StoryInputNews from "@/components/StoryInputNews";
import ArticleInputNews from "@/components/ui/ArticleInputNews";
import Logo from "@/components/ui/Logo"
import { useState } from "react";


export default function () {
  const [option, setOption] = useState(1);

  return (
    <div className="w-[100%] h-full overflow-hidden flex justify-center flex-col">
      <div className="flex h-auto items-center justify-center mt-[2rem] mb-[2rem]"><Logo className={"text-xl sm:text-3xl"} /></div>
      <div className="flex items-center justify-evenly mt-5 mb-5 text-xl font-semibold text-gray-900 ">
        <div onClick={() => { setOption(1) }} className={`hover:text-gray-700 cursor-pointer ${option == 1 && "border-b-2 border-gray-900"} `}>Breaking News</div>
        <div onClick={() => { setOption(2) }} className={`hover:text-gray-700 cursor-pointer ${option == 2 && "border-b-2 border-gray-900"}`}>Story</div>
        <div onClick={() => { setOption(3) }} className={`hover:text-gray-700 cursor-pointer ${option == 3 && "border-b-2 border-gray-900"}`}>Article</div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start  justify-center">

        {
          option == 2 && <StoryInputNews />
        }
        {
          option == 3 && <ArticleInputNews />
        }{
          option == 1 && <BreakingInputNews />
        }
        <div className=" w-[90%] sm:w-[50%] h-screen">
          <div className="mb-5 text-center text-bold text-xl sm:text-2xl h-auto">Demo</div>
          <NewstestPage /></div>
      </div>
    </div>
  )
}