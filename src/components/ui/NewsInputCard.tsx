"use client"
import { useEffect, useState } from "react";
import Button from "./Button";
import ImageInput from "./ImageInput";
import Input from "./Input";
import Selection from "./selection";
import { useEdgeStore } from "@/lib/edgestore";
import { useSetRecoilState } from "recoil";
import { userInputAtom } from "@/atom/atom";
import { addNews } from "@/app/api/news/route";
import { SingleImageDropzone } from "../Single-image-dropzon";

interface NewsProps {
    contentType? : string;
    title?: string;
    content?: string;
    imgUrl?: any;
    category?: string;
    type?: string;
    name?: string;
    topic?: string;
    ConPublic?: boolean;
}
export function NewsInputCard({ conType }: { conType: "breaking" | "story" | "article" }) {
    const initialData = (conType: "breaking" | "story" | "article"): NewsProps => {
        switch (conType) {
            case "breaking":
                return { title: "", content: "", imgUrl: null, category: "all", type: "normal", contentType : conType};
            case "story":
                return { title: "", content: "", imgUrl: null, name: "", topic: "", contentType : conType};
            case "article":
                return { title: "", content: "", ConPublic: false, contentType : conType };
            default:
                return {};
        }
    };
    const { edgestore } = useEdgeStore();
    const [data, setData] = useState<NewsProps>(initialData(conType));
    const [file, setFile] = useState<File>();
    const [compile, setCompile] = useState(false)
    const setUserDataForReview = useSetRecoilState(userInputAtom)
    const [progress, setProgress] = useState(0);
    let Image : any ;
    let ThumImage : any;
    useEffect(() => {
        if (file) {
            setData(prevData => ({...prevData, imgUrl : URL.createObjectURL(file)}))
        }
    }, [file]);

    useEffect(() => {
       
        setUserDataForReview(data);
    },[compile])

    async function handleSaved() {
       
        //@ts-ignore
        if (file && data.imgUrl?.length > 0) {
            console.log("chalo gao")
            //@ts-ignore
            const res = await edgestore.myPublicImage.upload({
                file,
                onProgressChange: (progress : any) => {
                    setProgress(progress);
                },
            });
         Image = res.url;
         ThumImage = res.thumbnailUrl;
        }
              const res = await addNews(data, Image, ThumImage);
             alert(res)
              Image = null;
              ThumImage = null;
              setFile(undefined);
              setData(prevData => ({...prevData,  
                title: "",
                content: "",
                imgUrl: "",
                category: "",
                type: "",
                name: "",
                topic: "",
                ConPublic: false}))
    }

    return (
        <div className=" h-full w-[100%] md:w-[50%] flex flex-col items-center justify-center">
            <div className="text-xl font-semibold mb-5">Upload Content</div>
            <div className="w-full flex items-center justify-end"><Button disabled={false} onClick={() => { setCompile(!compile) }} className="bg-green-700/60 text-white/80 active:text-gray-900 mr-5">Compile</Button></div>
            {
                (conType === 'breaking' || conType === 'story') &&  <>  <SingleImageDropzone
                width={200}
                height={200}
                value={file}
                dropzoneOptions={{
                    maxSize: 1024 * 1024 * 1,
                    maxFiles: 1
                }}
                onChange={(file) => {
                    setFile(file);
                }}
            />
            <div className="h-[6px] w-48 border border-gray-900 rounded overflow-hidden mt-2">
                <div
                    className="h-full bg-gray-500 transition-all duration-150"
                    style={{ width: `${progress}%` }} 
                />
            </div>
            </>
            }
            <div className="flex flex-col items-center justify-center gap-5 mt-[2rem] w-[100%]">
                <div className=" w-[80%] flex flex-col h-auto gap-2">
                    <span className="text-xl">Title</span>
                    <Input type="text" value={data.title} onChange={(e) => { setData(prevData => ({ ...prevData, title: e.target.value })) }} className="w-full pt-1 pb-1" placeholder={"Title"} />
                </div>
                <div className=" w-[80%] flex flex-col h-auto gap-2">
                    <span className="text-xl">Content</span>
                    <textarea value={data.content} onChange={(e) => { setData(prevData => ({ ...prevData, content: e.target.value })) }} className="rounded-xl bg-gray-100 text-gray-800/70 h-[15rem] font-semibold text-2xl overflow-auto" />
                </div>
                <div className=" w-[80%] flex flex-col h-auto gap-2">
                    {
                        conType === "breaking" && (
                            <>
                                <div className="w-[80%] flex flex-col h-auto gap-2">
                                    <Selection
                                        select="all"
                                        value={data.category}
                                        onChange={(e) => setData(prevData => ({ ...prevData, category: e.target.value }))}
                                        label="Choose the category"
                                        options={["non","ourCity", "bollywood", "Business", "carrier", "country", "lifestyle", "magazine", "politics", "sports", "techAuto", "topNews", "women"]}
                                    />
                                </div>
                                <div className="w-[80%] flex flex-col h-auto gap-2">
                                    <Selection
                                        select="normal"
                                        value={data.type}
                                        onChange={(e) => setData(prevData => ({ ...prevData, type: e.target.value }))}
                                        label="Choose the type"
                                        options={["normal","hover", "headline"]}
                                    />
                                </div>
                            </>
                        )
                    }
                    {
                        conType == "story" && (
                            <>
                                <div className="flex w-full items-center justify-evenly">
                                    <div className=" w-[40%] flex flex-col h-auto gap-2">
                                        <span className="text-xl">Name</span>
                                        <Input type="text" value={data.name} onChange={(e) => { setData(prevData => ({ ...prevData, name: e.target.value })) }} className="w-full pt-1 pb-1" placeholder={"Name"} />
                                    </div>
                                    <div className=" w-[40%] flex flex-col h-auto gap-2">
                                        <span className="text-xl">Topic</span>
                                        <Input type="text" value={data.topic} onChange={(e) => { setData(prevData => ({ ...prevData, topic: e.target.value })) }} className="w-full pt-1 pb-1" placeholder={"Topic"} />
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {conType === "article" && (
                        <div className="flex  w-full items-center justify-end">
                            <Button className="bg-green-500 text-white/80 " disabled={false} onClick={()=>{setData(prevData => ({...prevData, ConPublic : !data.ConPublic}))}}>
                                {data.ConPublic == true ? "Public" : "Private"}
                            </Button>
                        </div>
                    )}
                </div>

            </div>

            <div className="w-full mt-5 mb-10 flex items-center justify-center">
               <Button disabled={false} onClick={handleSaved} className="bg-cyan-500 text-white hover:bg-cyan-600/80  active:text-gray-200 w-[50%]">Submit</Button>
          </div>
        </div>
    )
}