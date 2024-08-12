"use client"
import { cn } from "@/lib/utils";
import { useState } from "react";


const contentData = {
    id: 1,
    url : '/pic2.webg',
    title: "Devar nei adi raat mai kiya esa kaam kisi nei socha na hogha ",
    description:"Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremuIpsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremuIpsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremuIpsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremu Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famoLoremu"
  }

export default  function StoryPage({className, title , imgUrl, description} : {className: string, title: string, imgUrl : string, description: string}) {
    const[value, setValue] = useState(true);
    const [content, setContent] = useState(200)
    let contentLength = description?.length;
    function setContentItem() {
        setValue(false),
        setContent(contentLength);
    }
  

    return <div className={cn("", className)}>
        <div style={{ backgroundImage: `url(${imgUrl})`}} className="bg-center bg-cover h-[70%] sm:h-[80%] w-full items-end rounded-lg flex  justify-center "> 
        <div className={`text-gray-900 text-2xl sm:text-3xl font-semibold w-[95%] pb-5 mt-8  bg-white/20 rounded-xl pl-2 backdrop-blur-2xl`}>{title}</div>
        </div>

       
        <div className={`text-gray-800 h-auto  text-xl mt-5 first-letter:text-5xl w-[95%]  overflow-auto `}>  {description?.substring(0,content)} 
         {
              value == true ? <button onClick={setContentItem} children={"Read More"} className={"text-blue-900"}/> : null
         }
        </div>
    </div>
}