import Card from "./ui/Card";
import MainPageNewsCard from "./ui/MainPageNewsCard";
import StoryCard from "./ui/StoryCard";

export default function NewstestPage() {
    return (
        <div className="flex flex-col items-center justify-start h-full w-full">
            <div className="flex w-full items-center justify-around mt-10 mb-5 font-semibold sm:text-xl">
                 <div className="active:text-gray-700">Front page</div>
                 <div className="active:text-gray-700">Main Page</div>
            </div>
             <Card className={"h-100 w-80"} />
             {/* <MainPageNewsCard className="w-[95%] bg-gray-100 h-auto" /> */}
             {/* <StoryCard className="w-50 h-80"/> */}
        </div>
    )
}