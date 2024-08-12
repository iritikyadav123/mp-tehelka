"use client"
import { filterComponent } from "@/atom/atom";
import { MouseEventHandler } from "react";
import { useRecoilValue } from "recoil";


export default function FilterButton({ imgUrl, name ,onClick , click}: { imgUrl: string, name: string , onClick: MouseEventHandler<HTMLButtonElement>, click: string}) {
    const filterValue = useRecoilValue(filterComponent);
    return (
        <>
            <button onClick={onClick} className={`border-2 w-[90%]   flex items-center justify-center font-semibold rounded-lg p-2 hover:border-stone-300 pl-4 pr-8 sm:pl-1 sm:pr-1  mt-2 text-sm sm:text-xl ${filterValue != click ? "bg-stone-300/10" : "bg-stone-300/90"}`}>
        
                <img src={imgUrl} className="sm:h-8 sm:w-8 h-6 w-6 mr-2" />  {name}</button>
        </>
    )
}