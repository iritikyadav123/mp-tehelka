"use client"

import { useEffect, useState } from "react";
import ImageInput from "./ImageInput";
import Input from "./Input";
import Selection from "./selection";
import Button from "./Button";

interface newsProps  {
    title : string;
    content : string;
    imgUrl : string;
    category : string;
    type : string
}


export default function InputCard({conType}  : {conType : "breaking" | "story" | "article"}) {
    const [file, setFile] = useState<File | null>(null);
    const [data, setData] = useState<newsProps>({
      title : "",
      content : "",
      imgUrl : "",
      category : "",
      type : ""
    })
  
      useEffect(()=>{
        
      },[])
    return (
        <div className=" h-full w-[100%] md:w-[50%] flex flex-col items-center justify-center">
          <div className="text-xl font-semibold mb-5">Upload Content</div>
          <ImageInput value={file} onChange={(file) => { setFile(file);}} />
          <div className="flex flex-col items-center justify-center gap-5 mt-[2rem] w-[100%]">
            <div className=" w-[80%] flex flex-col h-auto gap-2">
              <span className="text-xl">Title</span>
              <Input type="text" value={data.title} onChange={(e)=>{setData(prevData => ({...prevData, title : e.target.value}))}} className="w-full pt-1 pb-1" placeholder={"Title"} />
            </div>
            <div  className=" w-[80%] flex flex-col h-auto gap-2">
              <span className="text-xl">Content</span>
              <textarea value={data.content} onChange={(e)=>{setData(prevData => ({...prevData, content : e.target.value}))}} className="rounded-xl bg-gray-100 text-gray-800/70 h-[15rem] font-semibold text-2xl overflow-auto" />
            </div>
            <div  className=" w-[80%] flex flex-col h-auto gap-2">
             <Selection
             value={data.category}
             onChange={(e)=>{setData(prevData => ({...prevData, category : e.target.value}))}} className="" label="Choose the category" select="none" options={["ourCity","bollywood","Business","carrier","country","lifestyle","magazine","politics","sports","techAuto","topNews","women"]} />
            </div>
            <div  className=" w-[80%] flex flex-col h-auto gap-2">
            <Selection 
                value={data.type}
                onChange={(e)=>{setData(prevData => ({...prevData, type : e.target.value}))}} 
            className="" label="Choose the category" select="Normal" options={["hover","headline"]}/>
            </div>

          </div>

          <div className="w-full mt-5 mb-10 flex items-center justify-center">
               <Button className="bg-cyan-500 text-white hover:bg-cyan-600/80  active:text-gray-200 w-[50%]">Submit</Button>
          </div>
        </div>
    )
}