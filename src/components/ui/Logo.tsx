import { cn } from "@/lib/utils";


export default function Logo({className }: {className : string}) {
    return (
       
        <div  className={cn("flex items-start font-semibold italic", className)}>
            <span className="bg-center bg-cover text-gray-700" style={{ backgroundImage: `url('/mp1.png')`}} >MP</span>
            <span className="text-sky-600">Tehelka</span>
        </div>
    )
}