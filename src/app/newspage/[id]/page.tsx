// "use client"
// import { useParams } from "next/navigation"

import { getFullNews } from "@/app/api/news/route";
import MainPageNewsCard from "@/components/ui/MainPageNewsCard";

// const parms = useParams();
export default async function ({params} : any) {
        const news = await getFullNews(params.id) ;
    return (
    <div>
    <MainPageNewsCard  className={"w-full h-screen"}  title={news?.title ?? ""} imgUrl={news?.imgUrl ?? ""}  description={news?.description ?? ""}  />
    </div>
        
    )
}