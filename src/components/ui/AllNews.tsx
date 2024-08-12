"use client"
import { ALLNoramlNew } from "@/app/api/news/route";
import { filterComponent } from "@/atom/atom";
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import NormalNewsCard from "./NormalNewsCard";
 

interface DataProp {
    id: string;
    title: string;
    thumbnailUrl: string;
  }

export default function AllNews() {
    const [data, setData] = useState<DataProp[]>([]);
    const [load, setLoad]  = useState(false);
    const filterValue = useRecoilValue(filterComponent);
      useEffect(() => {
          
// ALLNoramlNew
async function fetchData() {
    try {
        const news = await ALLNoramlNew(filterValue);
        //@ts-ignore
        setData(news);
    } catch (error) {
        console.error("Failed to fetch trending news:", error);
    } finally {
        setLoad(true);
    }
}
fetchData();
},[filterValue])

if(load == false) {
    return (
        <div className="h-40">
          Loading ....
        </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-start gap-5 h-full w-full border-l-2 border-r-2 border-stone-400/30">
     {data.length > 0 ? (
            data.map((item) => (
                <NormalNewsCard id={item.id} key={item.id} title={item.title} imgUrl={item.thumbnailUrl} className="h-[5rem] md:h-[5rem] text-sm w-[97%]"/>
            ))
        ) : (
            <div>No normal news available</div>
        )}
    </div>
)
} 