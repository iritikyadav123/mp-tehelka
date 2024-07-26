import { cn } from "@/lib/utils";


export default function Logo({className }: {className : string}) {
    return (
       
        <div  className={cn("flex items-start font-semibold italic", className)}>
            MP<span className="text-sky-600">Tehelka</span>
        </div>
    )
}