import { Separator } from "@/components/ui/separator"
import Image from "next/image"

function Services() {
  return (
    <main className="my-10 mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl font-semibold text-blue-600 my-5">Our Services</h1>
            <p className="text-sm">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <div className="w-9/12">
                <Image src='https://images.unsplash.com/photo-1586770802838-e524ec9018a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80' width={300} height={300} alt='image'/>
            </div>
            <div className="w-10/12 flex flex-col items-center py-5 justify-center rounded-lg bg-[#566d81] opacity-">
                <h1 className=" text-white text-xl font-semibold">Metagenomics</h1>
                <Separator className='w-1/3 my-2 h-[2px]'/>
                <p>Chief Executive Officer</p>
            </div>
        </div>
    </main>
  )
}

export default Services