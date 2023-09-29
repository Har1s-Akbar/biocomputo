'use client'
import Link from "next/link"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  

function Cards() {
  return (
    <main className="lg:w-10/12 mx-auto my-20 h-full custom-shadow-card rounded-lg grid lg:grid-cols-3">
        <Card className='glow'>
            <CardHeader>
                <CardTitle className='mt-5'>
                    <p className="font-normal text-blue-500">01</p>
                    <p className="font-normal mt-5 mb-2 text-blue-500">Biostatistics</p>
                </CardTitle>
                <CardDescription className='opacity-70'>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href='/' className="text-blue-500">See more</Link>
            </CardFooter>
        </Card>
        <Card className='glow'>
            <CardHeader>
                <CardTitle className='mt-5'>
                    <p className="font-normal text-blue-500">02</p>
                    <p className="font-normal mt-5 mb-2 text-blue-500">Genomics</p>
                </CardTitle>
                <CardDescription className='opacity-70'>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href='/' className="text-blue-500">See more</Link>
            </CardFooter>
        </Card>
        <Card className='glow'>
            <CardHeader>
                <CardTitle className='mt-5'>
                    <p className="font-normal text-blue-500">03</p>
                    <p className="font-normal mt-5 mb-2 text-blue-500">Metagenomics</p>
                </CardTitle>
                <CardDescription className='opacity-70'>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href='/' className="text-blue-500">See more</Link>
            </CardFooter>
        </Card>
        <Card className='glow ring-2'>
            <CardHeader>
                <CardTitle className='mt-5'>
                    <p className="font-normal text-blue-500">04</p>
                    <p className="font-normal mt-5 mb-2 text-blue-500">Proteomics</p>
                </CardTitle>
                <CardDescription className='opacity-70'>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href='/' className="text-blue-500">See more</Link>
            </CardFooter>
        </Card>
        <Card className='glow'>
            <CardHeader>
                <CardTitle className='mt-5'>
                    <p className="font-normal text-blue-500">05</p>
                    <p className="font-normal mt-5 mb-2 text-blue-500">Technical Writing Services</p>
                </CardTitle>
                <CardDescription className='opacity-70'>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href='/' className="text-blue-500">See more</Link>
            </CardFooter>
        </Card>
        <Card className='glow'>
            <CardHeader>
                <CardTitle className='mt-5'>
                    <p className="font-normal text-blue-500">06</p>
                    <p className="font-normal mt-5 mb-2 text-blue-500">Facilis Impedit</p>
                </CardTitle>
                <CardDescription className='opacity-70'>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href='/' className="text-blue-500">See more</Link>
            </CardFooter>
        </Card>
    </main>
  )
}

export default Cards