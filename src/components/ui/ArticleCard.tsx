import { cn } from "@/lib/utils";


export default function ArticleCard({className, title, name, position, id} : {className : string, title: string,name :string, position: string, id? : string}) {
    return <div className={cn("bg-gray-50 rounded-xl shadow-md shadow-gray-200", className)}>
        <div className="font-semibold text-sm ml-1">{title}</div>
        <div className="w-full flex flex-col items-end justify-center pr-[1rem]">
             <div className="font-bold text-sm  text-gray-900">{name}</div>
             <div className="text-gray-700 text-sm">{position}</div>
        </div>
    </div>
}