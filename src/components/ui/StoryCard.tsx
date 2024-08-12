"use client"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function StoryCard({className, imgUrl, topic, title, name , id} : {className : string, imgUrl: string, topic: string , title: string , name: string , id? : any}) {
    const router = useRouter();
    return (
        <div onClick={()=>{router.push(`/storyPageNews/${id}`)}}  className={cn("bg-cover bg-center  object-cover object-center flex items-end rounded-md  justify-start ", className)} style={{ backgroundImage: `url(${imgUrl})`}}>
               <div className="mb-5 ml-2  ">
                    <div className="  text-sm text-white bg-rose-700 inline font-semibold pl-2 pr-2 p-0.5 ml-5 ">{topic}</div>
                    <div className=" bg-white/20 backdrop-blur-3xl text-stone-100 outline-2 h-[90%] font-semibold text-lg mt-5 mb-5 mr-1 pl-1 pr-1 w-auto rounded-xl">{title}</div>
                    <div className="bg-white/20 backdrop-blur-3xl text-sm text-stone-100 max-w-[10rem] rounded-xl pl-5">{name}</div>
               </div>
        </div>
    )
}