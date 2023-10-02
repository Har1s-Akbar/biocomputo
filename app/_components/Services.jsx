'use client'
import {useState, useEffect} from 'react'
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "../_lib/sanity"

function Services({data}) {
    const [grid, setgrid] = useState(4)

    const getGrid = () =>{
        if(data.length <4){
            setgrid(data.length)
        }else{
            return grid
        }
    }

  return (
    <main className="my-10 mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl text-center font-semibold text-blue-600 my-5">Our Services</h1>
            <p className="text-center md:w-11/12">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>
        <div className={data.length<4 === true? "grid grid-cols-1 md:flex lg:flex items-end justify-center gap-10 lg:gap-5":"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5"}>
            {data.map((item)=>{
            return<div key={item._id} className="flex flex-col relative my-5 items-center justify-center">
                <div className="w-9/12">
                    <Image src={urlFor(item.image).url()} width={300} height={300} className="rounded" alt='image'/>
                </div>
                <div className="w-10/12 -bottom-14 flex absolute flex-col items-center py-5 justify-center rounded bg-[#566d81] opacity-80">
                    <h1 className=" text-white text-xl font-semibold">{item.name}</h1>
                    <Separator className='w-1/3 my-2 h-[2px]'/>
                    <p className="text-xs w-11/12 m-auto text-center italic font-semibold text-white">{item.position}</p>
                    <div className="flex items-center justify-between my-2 w-2/5">
                        <Link href={`${item.twitter}`}>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter" width={17} height={17}/>
                        </Link>
                        <Link href={`${item.facebook}`}>
                        <Image src="https://img.icons8.com/metro/26/FFFFFF/facebook-new--v2.png" alt="facebook-new--v2" width={17} height={17}/>
                        </Link>
                        <Link href={`${item.instagram}`}>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" width={17} height={17}/>
                        </Link>
                        <Link href={`${item.linkedin}`}>
                        <Image src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png" alt="linkedin" width={17} height={17}/>
                        </Link>
                    </div>
                </div>
            </div>
            })}
        </div>
    </main>
  )
}

export default Services