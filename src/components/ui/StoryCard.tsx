import { cn } from "@/lib/utils";

export default function StoryCard({className} : {className : string}) {
    return (
        <div className={cn("bg-cover bg-center  object-cover object-center flex items-end rounded-md  justify-start ", className)} style={{ backgroundImage: `url('/pic.jpg')`}}>
               <div className="mb-5 ml-2  ">
                    <div className="  text-sm text-white bg-rose-700 inline font-semibold pl-2 pr-2 p-0.5 ml-5 ">Eqality </div>
                    <div className=" text-white h-[90%] font-semibold text-lg mt-5 mb-5">Melenda French Gates Is Going it along</div>
                    <div className="text-sm text-white">Blinda Luscombe / Krikland Wash</div>
               </div>
        </div>
    )
}