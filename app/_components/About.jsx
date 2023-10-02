import Image from "next/image"
import { urlFor } from "../_lib/sanity"

function About({data}) {
  return (
    <main className=" w-full lg:pt-16">
        <div className="bg-gray-50 rounded-lg lg:grid lg:grid-cols-2 lg:px-5 lg:items-start justify-center custom-shadow mx-auto md:w-11/12 lg:w-10/12 md:pb-3">
            <div>
                <Image src={urlFor(data[0].image).url()} width={500} height={500} className="mx-auto" alt='about' />
            </div>
            <div className=" flex flex-col items-center justify-center mt-5">
                <h1 className="text-3xl font-medium text-blue-600 my-5">About Us</h1>
                <p className="italic opacity-70 w-9/12 mx-auto lg:w-full md:w-11/12">{data[0].content}</p>
                <div className="mt-10 flex flex-col w-9/12 md:w-11/12 m-auto">
                    {data.slice(1).map((item)=>{
                        return <div className="flex mb-10">
                            <Image src={urlFor(item.image).url()} className="lg:p-2 h-20 border shadow-md bg-gray-50 rounded-lg hover:bg-blue-700 hover:bg-gray-200 delay-200 duration-200" width={70} height={70} alt="fingerprint"/>
                        <div className="ml-5 lg:w-9/12">
                            <h1 className="text-xl mb-2 text-cyan-600 font-semibold">{item.title}</h1>
                            <p className="text-sm opacity-80 font-normal">{item.content}</p>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    </main>
  )
}

export default About