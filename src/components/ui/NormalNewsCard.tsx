"use client"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
export default function NormalNewsCard({ className, id, title, imgUrl }: { className: string, id?: string, title: string, imgUrl: string }) {
    const router = useRouter();
    return (
        <div onClick={() => { router.push(`newspage/${id}`) }} className={cn("flex items-center rounded-xl bg-stone-100 shadow-xl shadow-stone-700/15 justify-between", className)}>
            <img src={imgUrl} className="object-center object-cover rounded-xl ring-2 h-[90%] w-[26%] ml-2" />
            <div className="h-[90%] w-[66%] mr-2 font-medium">{title}</div>
        </div>
    )
}