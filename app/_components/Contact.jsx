'use client'
import Image from "next/image"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import FormComp from "./FormComp"
  

function Contact() {
  return (
    <main className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center justify-center">
            <h1 className="text-3xl font-medium text-blue-600 my-10">Contact Us</h1>
        </div>
        <div className="grid lg:grid-cols-[40rem_minmax(18rem,_4fr)_18rem] md:w-11/12 gap-10">
            <Card className='flex flex-col w-full custom-shadow items-center justify-center py-3'>
                <Image src="https://img.icons8.com/ios-filled/50/C850F2/marker.png" alt="place-marker" width={40} height={40}/>
                <CardHeader className='flex flex-col items-center justify-center'>
                    <CardTitle className='opacity-70 my-2'>Our Address</CardTitle>
                    <CardDescription className='my-2'>Karāchi, Sindh, Pakistan,</CardDescription>
                </CardHeader>
            </Card>
            <Card className='flex flex-col w-full custom-shadow items-center justify-center py-3'>
                <Image src="https://img.icons8.com/pastel-glyph/64/C850F2/new-post--v1.png" alt="new-post--v1" width={40} height={40}/>
                <CardHeader className='flex flex-col items-center justify-center'>
                    <CardTitle className='opacity-70 my-2'>Email Us</CardTitle>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm opacity-70">biocomputomics@gmail.com</p>
                        <p className="text-sm opacity-70">contact@example.com</p>
                    </div>
                </CardHeader>
            </Card>
            <Card className='flex flex-col w-full custom-shadow items-center justify-center py-3'>
                <Image src="https://img.icons8.com/ios-filled/50/C850F2/phone.png" alt="phone" width={40} height={40}/>
                <CardHeader className='flex flex-col items-center justify-center'>
                    <CardTitle className='opacity-70 my-2'>Call Us</CardTitle>
                    {/* <CardDescription className=''>Karāchi, Sindh, Pakistan,</CardDescription> */}
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-sm opacity-70">+92 3152089238</p>
                        <p className="text-sm opacity-70">+1 6678 254445 41</p>
                    </div>
                </CardHeader>
            </Card>
        </div>
        <div className="w-11/12 lg:px-12">
            <FormComp/>
        </div>
    </main>
  )
}

export default Contact