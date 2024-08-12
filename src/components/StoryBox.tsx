
import { storyCardNews } from "@/app/api/news/route";
import StoryCard from "./ui/StoryCard";

export default async function StoryBox()  {
    const news = await storyCardNews();
      return (
       
       <div className="snap-x mx-auto snap-mandatory h-[30rem] flex w-auto overflow-x-scroll justify-evenly gap-4 ml-5 lg:ml-2 no-scrollbar">
        {
            news?.map((item, index) => (
                <div key={index} className="snap-start   w-80  flex-shrink-0 h-full flex items-center justify-center text-8xl rounded-md"><StoryCard className="w-[25rem] h-[25rem]" imgUrl={item.imgUrl} title={item.title} topic={item.topic} name={item.name} id={item.id}/></div>
            ))
        }
    
    
</div>
      )
}