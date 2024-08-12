import { getStoryFullNews } from "@/app/api/news/route"
import StoryPage from "@/components/ui/StoryPage";

export default async function ({params} : any) {
    const  news = await getStoryFullNews(params.id);
    
    return (
        <>
          <StoryPage className="w-full h-[110vh]" title={news?.title ?? ""} description={news?.description ?? ""} imgUrl={news?.imgUrl ?? ""} />
            
        </>
    )
}