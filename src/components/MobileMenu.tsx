"use client"
import { useState } from "react";
import FilterButton from "./ui/FilterButton"
import { useRecoilState } from "recoil";
import { filterComponent } from "@/atom/atom";


const compoData = [{
  id: 1,
  imgUrl: "/icon/app.png",
  name: "All",
  click: "non"
}, {
  id: 2,
  imgUrl: "/icon/gps.png",
  name: "Our-city",
  click: "ourCity"
}, {
  id: 3,
  imgUrl: "/icon/film-slate.png",
  name: "Bollywood",
  click: "bollywood"
}, {
  id: 4,
  imgUrl: "/icon/investment.png",
  name: "Business",
  click: "Business"
}, {
  id: 5,
  imgUrl: "/icon/promotion.png",
  name: "Career",
  click: "carrier"
}, {
  id: 6,
  imgUrl: "/icon/india-gate.png",
  name: "Country",
  click: "country"
}, {
  id: 7,
  imgUrl: "/icon/lifestyle.png",
  name: "LifeStyle",
  click: "lifestyle"
}, {
  id: 8,
  imgUrl: "/icon/magazine.png",
  name: "Magazine",
  click: "magazine"


}, {
  id: 9,
  imgUrl: "/icon/world.png",
  name: "Politics",
  click: "politics"
},
{
  id: 10,
  imgUrl: "/icon/sports.png",
  name: "sports",
  click: "Sports"
},
{
  id: 11,
  imgUrl: "/icon/car.png",
  name: "Tech-auto",
  click: "techAuto"
},
{
  id: 12,
  imgUrl: "/icon/trending.png",
  name: "Top-News",
  click: "topNews"
}, {
  id: 13,
  imgUrl: "/icon/womens-day.png",
  name: "women",
  click: "women"
}]



export default function () {
  const [DataFilter, setDataFilter] = useState(false);
  const [chooseType, setChooseType] = useRecoilState(filterComponent)

  function handleClick(value: string) {
    value !== chooseType ? setChooseType(value) : setChooseType('non')

  }
  return (
    <>
      <div onClick={() => { setDataFilter(!DataFilter) }} className="h-6 w-6 flex items-center justify-center rounded-lg hover:bg-stone-200 active:border border-stone-400 active:bg-stone-300">
        <img src="/icon/menu.png" className="h-4 w-4 cursor-pointer " />
      </div>
      {
        DataFilter == true && (
          <div className="absolute h-[38rem] -left-5 top-14 w-[20rem] bg-stone-100 backdrop-blur-xl  flex flex-col items-center justify-start rounded-b-xl overflow-auto no-scrollbar pb-[10rem]"> {
            compoData.map((item, index) => (
              <FilterButton onClick={() => { handleClick(item.click) }} key={index} imgUrl={item.imgUrl} name={item.name} click={item.click} />
            ))
          }

          </div>
        )
      }
    </>

  )
}