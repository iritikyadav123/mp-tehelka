
import MobileMenu from "./MobileMenu";
import Logo from "./ui/Logo";


export default function Navbar() {
    return (
        <div className="flex items-center justify-center w-full h-14">
            <div className="flex items-center justify-between w-[95%] h-full sticky z-[100]  inset-x-0 top-0  border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="flex h-full w-[75%] sm:w-[70%] items-center justify-between ">
                 <div className="sm:w-[25%] flex items-center justify-start gap-2 ">
                         <MobileMenu />
                        <Logo className="sm:text-xl"/>
                 </div>
                <div className="flex w-[70%] h-full items-center justify-end sm:justify-start sm:gap-8  gap-4 text-[10px] sm:text-xl sm:font-semibold">
                        <div className="cursor-pointer active:text-gray-700 active:border-b-2 active:border-gray-900">HOME</div>
                        <div className="cursor-pointer active:text-gray-700 active:border-b-2 active:border-gray-900 ">ABOUT US</div>
                        <div className="cursor-pointer active:text-gray-700 active:border-b-2 active:border-gray-900 ">CONTECT US</div>
                 </div>
             </div>
              <div>

              </div>
            </div>
        </div>
    )
}