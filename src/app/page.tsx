import HoverCard from "@/components/ui/HoverCard"
import { getHoverNews, trandingNews } from "./api/news/route"
import StoryBox from "@/components/StoryBox";
import ArticleCard from "@/components/ui/ArticleCard";
import TrandingNews from "@/components/ui/TrandingNewsBox";
import AllNews from "@/components/ui/AllNews";



export default async function Home() {
    const hoverNews = await getHoverNews();
    
    return (
        <div>
            <div className="flex items-start  justify-evenly w-full">
                <HoverCard slidingCard={hoverNews} />
            </div>
            <>
                <div className="snap-x mx-auto snap-mandatory h-[100rem] flex w-auto overflow-x-scroll justify-evenly gap-4 sm:gap-2 lg:ml-2 no-scrollbar mt-10">
                    <div className="snap-start  w-[23rem] flex-col gap-4 flex-shrink-0 h-[30rem] flex items-center justify-center text-8xl rounded-md overflow-auto no-scrollbar">
                        <ArticleCard className="h-22 w-[90%]" name="ritikyadav" position="unEmployed" title={"lorem kesa rista hai yei kese sapne hai vegane hoklar kyu lqgte apne hai mai soch ami"} />
                    </div>
                    <div className="snap-center h-full   w-[23rem] sm:w-[35rem] flex-shrink-0  flex items-center justify-center text-8xl rounded-md">
                            <TrandingNews />
                    </div>
                    <div className=" snap-end  w-[23rem]  flex-shrink-0 h-[30rem] flex items-center justify-center text-8xl rounded-md">
                        <AllNews />
                    </div>
                </div>
            </>



            <>
                <div className="text-center text-xl sm:text-2xl font-semibold border-b-2 border-stone-400 ml-5 mr-5 mt-10 pb-5">Some Stories</div>
                <StoryBox />
            </>


        </div>
    )
}