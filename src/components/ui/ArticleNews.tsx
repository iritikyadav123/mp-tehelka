import { cn } from "@/lib/utils";

export default function ArticleNews({className, title, description, name, position, imgUrl, } : {className : string, title: string, description: string, name: string, position: string, imgUrl: string}) {
    return (
        <div className={cn("bg-stone-200 flex flex-col items-center justify-center border-2 gap-5 ")}>
             <div className="text-xl sm:text-2xl font-semibold w-[90%] mt-[5rem]">{title}</div>
             <div className="text-md sm:text-lg font-medium w-[90%]">{description}</div>
             <div className=" w-[80%] flex flex-col items-end justify-center mb-[5rem]">
                 <img src="/pic2.webp" className="h-16 w-16 rounded-full object-cover object-center"/>
                 <div className="font-medium text-gray-900">{name}</div>
                 <div className="text-sm">{position}</div>
             </div>
        </div>
    )
}