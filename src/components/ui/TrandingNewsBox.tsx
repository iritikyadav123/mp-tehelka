"use client"

import { trandingNews } from "@/app/api/news/route";
import { filterComponent } from "@/atom/atom";
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import Card from "./Card";
import { LucidePersonStanding } from "lucide-react";

interface DataProp {
  id: string;
  title: string;
  imgUrl: string;
}

export default function TrandingNews() {
    const [data, setData] = useState<DataProp[]>([]);
    const [load, setLoad]  = useState(false);
    const filterValue = useRecoilValue(filterComponent);
    useEffect(() => {
      async function fetchData() {
          try {
              const news = await trandingNews(filterValue);
              //@ts-ignore
              setData(news);
          } catch (error) {
              console.error("Failed to fetch trending news:", error);
          } finally {
              setLoad(true);
          }
      }
      fetchData();
  }, [filterValue]);
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
                    <Card id={item.id} key={item.id} title={item.title} imgUrl={item.imgUrl} className="h-[20rem] md:h-[25rem] w-[97%]"/>
                ))
            ) : (
                <div>No trending news available</div>
            )}
        </div>
    )
}