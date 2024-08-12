"use client"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Card({className, id, imgUrl, title}:{ className: string, id? : string, imgUrl: string ,title: string}) {
    const router = useRouter();
    console.log(id);
    return (
        <div onClick={() => { router.push(`newspage/${id}`) }}   className={cn(" w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg gap-2",className)}>
              <img src={imgUrl}  className="h-[70%] w-[95%] rounded-lg mt-2 object-cover object-center"/> 
              <div className="h-[30%] w-[90%] ml-2 mt-2 mb-2 overflow-auto">
                 <div className="font-semibold text-2xl">{title}</div>
             </div>
         </div>
    )
}