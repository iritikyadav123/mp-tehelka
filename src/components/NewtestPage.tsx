
import { useState } from "react";
import ArticleCard from "./ui/ArticleCard";
import ArticleNews from "./ui/ArticleNews";
import Card from "./ui/Card";
import MainPageNewsCard from "./ui/MainPageNewsCard";
import StoryCard from "./ui/StoryCard";
import StoryPage from "./ui/StoryPage";
import { useRecoilValue } from "recoil";
import { userInputAtom } from "@/atom/atom";
import Logo from "./ui/Logo";
import NormalNewsCard from "./ui/NormalNewsCard";

interface NewsProps {
    contentType?: string;
    title?: string;
    content?: string;
    imgUrl?: string | null;
    category?: string;
    type?: string;
    name?: string;
    topic?: string;
    ConPublic?: boolean;
}

export default function NewstestPage() {
    const [page, setPage] = useState(false);
    const userData: NewsProps = useRecoilValue(userInputAtom);
    console.log(userData);
    //@ts-ignore
    if (userData.title == "") {
        return (
            <div className="text-5xl font-semibold italic w-full h-ful flex items-center justify-center flex-col">
                Inter Input
                <div className="mt-[15rem]">
                    <Logo className="text-5xl" />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-start h-full w-full overflow-auto">
            <div className="flex w-full items-center justify-around mt-10 mb-5 font-semibold sm:text-xl">
                <div onClick={() => { setPage(false) }} className={`active:text-gray-700 cursor-pointer ${page == false && "border-b-2 border-gray-900"}`}>Front page</div>
                <div onClick={() => { setPage(true) }} className={`active:text-gray-700 cursor-pointer ${page == true && "border-b-2 border-gray-900"}`}>Main Page</div>
            </div>


            {
                userData.contentType == 'breaking' && (
                    <>
                        {
                            page == false && (
                                <>
                                    {
                                        userData.type == "normal" && <NormalNewsCard className={"h-[10rem] w-[30rem]"} imgUrl={userData.imgUrl ?? ""} title={userData.title ?? ""}/>
                                    }
                                    {
                                        userData.type == "headline" && <Card className={"h-100 w-80"} imgUrl={userData.imgUrl ?? ""} title={userData.title ?? ""} />
                                    }
                                </>
                            )
                        }
                        {
                            page == true && <MainPageNewsCard className="w-[95%] bg-gray-100 h-auto" imgUrl={userData.imgUrl ?? ""} title={userData.title ?? ""} description={userData.content ?? ""}/>
                        }

                    </>
                )
            }
            {
                userData.contentType == 'story' && (
                    <>
                        {page == false && <StoryCard className="w-[15rem] h-[25rem]" imgUrl={userData.imgUrl ?? ""} title={userData.title ?? ""} topic={userData.topic ?? ""} name={userData.name ?? ""} />}
                        {
                            page == true && <StoryPage className={"h-[75%] sm:h-[72%] w-[95%] mb-10"} imgUrl={userData.imgUrl ?? ""} title={userData.title ?? ""} description={userData.content ?? ""} />
                        }
                    </>
                )
            }
            {
                userData.contentType == 'article' && (
                    <>
                        {page == false && <ArticleCard className="h-30 w-[50%]" name="ritikyadav" position="unEmployed"title={userData.title ?? ""}/>}
                        {
                            page == true && <ArticleNews className="h-auto w-[90%]" name="ritikyadav" position="unEmployed"title={userData.title ?? ""} imgUrl={"/pic2.webp"} description={userData.content ?? ""} />
                        }
                    </>
                )
            }
            {/* <Card className={"h-100 w-80"} /> */}
            {/* <MainPageNewsCard className="w-[95%] bg-gray-100 h-auto" /> */}
            {/* <StoryCard className="w-[15rem] h-[25rem]"/> */}
            {/* <StoryPage className={"h-[75%] sm:h-[72%] w-[95%] mb-10"}/> */}
            {/* <ArticleCard className="h-30 w-[50%]" /> */}
            {/* <ArticleNews className="h-auto w-[90%]" /> */}

        </div>
    )
}