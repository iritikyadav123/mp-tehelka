import { cn } from "@/lib/utils";

export default function Card({className}:{ className: string}) {
    return (
        <div  className={cn(" w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg gap-2",className)}>
              <img src={'./pic.jpg'}  className="h-[70%] w-[95%] rounded-lg mt-2 object-cover object-center"/> 
              <div className="h-[30%] w-[90%] ml-2 mt-2 mb-2 overflow-auto">
                 <div className="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae</div>
                  <div>sabli baate usi sabkea saat</div> 
             </div>  
         </div>
         
    )
}