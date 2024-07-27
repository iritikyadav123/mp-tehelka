import { cn } from "@/lib/utils";

export default function ArticleNews({className} : {className : string}) {
    return (
        <div className={cn("bg-stone-200 flex flex-col items-center justify-center border-2 gap-5 ")}>
             <div className="text-xl sm:text-2xl font-semibold w-[90%] mt-[5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore eos facilis libero obcaecati. Vitae sequi laboriosam odio. Exercitationem, itaque distinctio deserunt possimus ut amet magnam accusantium modi commodi quos.</div>
             <div className="text-md sm:text-lg font-medium w-[90%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nulla dicta vero at, distinctio cumque aut blanditiis corporis, exercitationem quibusdam expedita! Quia saepe odio quidem quae expedita maiores ad aliquam!
                Sit reprehenderit voluptates repellat deserunt eius harum quos aperiam a facilis? Voluptatibus dolorem accusantium animi rem ad est nesciunt harum nostrum! Repudiandae porro tempora ipsam voluptatum delectus laudantium, modi debitis!
                Accusamus quisquam impedit, illo beatae obcaecati eos aliquid eaque vel provident cum enim aut molestiae tempora suscipit minima eius earum harum quo vitae natus magnam. Ullam, in. Sint, ut officia.
                Maxime, cum deserunt rerum porro enim omnis. Perspiciatis quibusdam eos, illo dicta nam provident at, odio officiis deleniti sunt veniam quasi quidem! Explicabo cupiditate consequuntur, placeat nihil animi amet optio!
                Quibusdam deleniti enim porro aperiam a facere magni, ipsa id provident dolorem praesentium, quos laborum blanditiis eos pariatur nesciunt optio rem illo at? Sit reiciendis totam neque error? Saepe, fugit!
             </div>
             <div className=" w-[80%] flex flex-col items-end justify-center mb-[5rem]">
                 <img src="/pic2.webp" className="h-16 w-16 rounded-full object-cover object-center"/>
                 <div className="font-medium text-gray-900">Sunita Sharma</div>
                 <div className="text-sm">Position</div>
             </div>
        </div>
    )
}