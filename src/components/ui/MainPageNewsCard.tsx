"use client"
import { cn } from "@/lib/utils";
import { useState } from "react";

const contentData = {
    id: 1,
    url : '/pic.jpg',
    title: "Devar nei adi raat mai kiya esa kaam kisi nei socha na hogha",
    description:"Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremuIpsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremuIpsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremuIpsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremu Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremu"
  }

export default function MainPageNewsCard({className} : {className : string}) {
    const[value, setValue] = useState(true);
    const [content, setContent] = useState(200)
    let contentLength = contentData.description.length;
    function setContentItem() {
        setValue(false),
        setContent(contentLength);
    }

    return (
        <div className={cn("text-white flex flex-col items-center justify-start rounded-lg overflow-auto", className)}>
        <div className={`text-gray-800 text-2xl sm:text-3xl font-semibold w-[95%] pb-5 mt-8`}>{contentData.title}</div>
        <img src={contentData.url} className="bg-center bg-cover h-[50%] w-[80%] items-start rounded-lg"/>
        <div className={`text-gray-800 h-auto  text-xl mt-5 first-letter:text-5xl w-[95%] `}>  {contentData.description.substring(0,content)} 
         {
              value == true ? <button onClick={setContentItem} children={"Read More"} className={"text-blue-900"}/> : null
         }                                       
        </div>
        </div>
    )
}