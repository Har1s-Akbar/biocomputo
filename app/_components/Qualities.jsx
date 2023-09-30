import Image from "next/image"
import fingerprint from '../_assets/Fingerprint-bro.svg'
import { Separator } from "@/components/ui/separator"

function Qualities() {
  return (
    <main className="flex items-center flex-col justify-center">
        <div className="mb-5">
            <h1 className="text-3xl font-semibold text-blue-600 my-5">WHY CHOOSE BIOCOMPUTOMICS</h1>
        </div>
        <div className="grid grid-cols-3 justify-items-center w-10/12 gap-10">
            <div className="flex flex-col items-center justify-center">
                <Image className="p-2 border shadow-lg bg-gray-50 rounded-full hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" src="https://img.icons8.com/carbon-copy/100/best-seller.png" alt="best-seller" width={70} height={70}/>    
                <h1 className="text-blue-600 text-xl my-3 font-medium">High Quality Output</h1>
                <Separator className=' h-[2px] bg-cyan-600 w-1/6 my-2 border-cyan-600'/>
                <div className=" my-2">
                    <p className="text-center text-sm">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="p-2 border shadow-lg bg-gray-50 rounded-full hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" src="https://img.icons8.com/dotty/80/square-border.png" alt="square-border" width={70} height={70}/>    
                <h1 className="text-blue-600 text-xl my-3 font-medium">METAGENOMICS</h1>
                <Separator className=' h-[2px] bg-cyan-600 w-1/6 my-2 border-cyan-600'/>
                <div className=" my-2">
                    <p className="text-center text-sm">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="p-2 border shadow-lg bg-gray-50 rounded-full hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" src="https://img.icons8.com/ios/50/financial-growth-analysis.png" alt="financial-growth-analysis" width={70} height={70}/>    
                <h1 className="text-blue-600 text-xl my-3 font-medium">Research and Training</h1>
                <Separator className=' h-[2px] bg-cyan-600 w-1/6 my-2 border-cyan-600'/>
                <div className=" my-2">
                    <p className="text-center text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="p-2 border shadow-lg bg-gray-50 rounded-full hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" src="https://img.icons8.com/ios/50/process--v1.png" alt="process" width={70} height={70}/>    
                <h1 className="text-blue-600 text-xl my-3 font-medium">Transparent Process</h1>
                <Separator className=' h-[2px] bg-cyan-600 w-1/6 my-2 border-cyan-600'/>
                <div className=" my-2">
                    <p className="text-center text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="p-2 border shadow-lg bg-gray-50 rounded-full hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" src="https://img.icons8.com/ios/50/sun--v1.png" alt="sun--v1" width={70} height={70}/>    
                <h1 className="text-blue-600 text-xl my-3 font-medium">Nemo Enim</h1>
                <Separator className=' h-[2px] bg-cyan-600 w-1/6 my-2 border-cyan-600'/>
                <div className=" my-2">
                    <p className="text-center text-sm">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Image className="p-2 border shadow-lg bg-gray-50 rounded-full hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" src="https://img.icons8.com/ios/50/clock--v1.png" alt="clock--v1" width={70} height={70}/>    
                <h1 className="text-blue-600 text-xl my-3 font-medium">Fast turnaround</h1>
                <Separator className=' h-[2px] bg-cyan-600 w-1/6 my-2 border-cyan-600'/>
                <div className=" my-2">
                    <p className="text-center text-sm">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Qualities