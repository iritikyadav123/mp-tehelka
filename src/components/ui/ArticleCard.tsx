import { cn } from "@/lib/utils";


export default function ArticleCard({className} : {className : string}) {
    return <div className={cn("bg-gray-50 rounded-xl shadow-xl shadow-gray-200", className)}>
        <div className="font-semibold ml-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, voluptatem aperiam! Esse numquam eius, odit 
             </div>
        <div className="w-full flex flex-col items-end justify-center pr-[1rem]">
             <div className="font-bold  text-gray-900">Punit sharma</div>
             <div className="text-gray-700 text-sm">Postition</div>
        </div>
    </div>
}