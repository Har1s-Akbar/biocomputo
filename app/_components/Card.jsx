'use client'
import Link from "next/link"
import {useState, useEffect} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  

function Cards({data}) {

  const [grid, setgrid] = useState(3)

  const getGrid = () =>{
      if(data.length <3){
          setgrid(data.length)
      }else{
          return grid
      }
  }

  useEffect(()=> getGrid, [data])

  return (
    <main className={grid<3 === true? "lg:w-8/12 bg-gray-100 mx-auto my-20 w-9/12 h-full rounded-lg grid lg:flex justify-center items-center justify-center md:w-11/12":"lg:w-10/12 mx-auto my-20 w-9/12 h-full rounded-lg grid lg:grid-cols-3 md:grid-cols-2 bg-gray-100 md:w-11/12" }>
        {data.map((item, index)=>{
          return <Card key={index} className='glow bg-gray-50'>
            <CardHeader>
                <CardTitle className='mt-5'>
                    <p className="font-normal text-blue-500">0{index + 1}</p>
                    <p className="font-normal mt-5 mb-2 text-blue-500">{item.title}</p>
                </CardTitle>
                <CardDescription className='opacity-70'>{item.content}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href={`/card/${item.slug.current}`} className="text-blue-500">See more</Link>
            </CardFooter>
        </Card>
            
        })}
    </main>
  )
}

export default Cards