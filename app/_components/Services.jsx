import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

function Services() {
  return (
    <main className="my-10 mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl text-center font-semibold text-blue-600 my-5">Our Services</h1>
            <p className="text-center md:w-11/12">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
            <div className="flex flex-col relative my-5 items-center justify-center">
                <div className="w-9/12">
                    <Image src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80' width={300} height={300} className="rounded" alt='image'/>
                </div>
                <div className="w-10/12 -bottom-14 flex absolute flex-col items-center py-5 justify-center rounded bg-[#566d81] opacity-80">
                    <h1 className=" text-white text-xl font-semibold">Metagenomics</h1>
                    <Separator className='w-1/3 my-2 h-[2px]'/>
                    <p className="text-xs italic font-semibold text-white">Chief Executive Officer</p>
                    <div className="flex items-center justify-between my-2 w-2/5">
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/metro/26/FFFFFF/facebook-new--v2.png" alt="facebook-new--v2" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png" alt="linkedin" width={17} height={17}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col relative my-5 items-center justify-center">
                <div className="w-9/12">
                    <Image src='https://images.unsplash.com/photo-1586770802838-e524ec9018a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80' width={300} height={300} className="rounded" alt='image'/>
                </div>
                <div className="w-10/12 -bottom-14 flex absolute flex-col items-center py-5 justify-center rounded bg-[#566d81] opacity-80">
                    <h1 className=" text-white text-xl font-semibold">Metagenomics</h1>
                    <Separator className='w-1/3 my-2 h-[2px]'/>
                    <p className="text-xs italic font-semibold text-white">Chief Executive Officer</p>
                    <div className="flex items-center justify-between my-2 w-2/5">
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/metro/26/FFFFFF/facebook-new--v2.png" alt="facebook-new--v2" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png" alt="linkedin" width={17} height={17}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col relative my-5 items-center justify-center">
                <div className="w-9/12">
                    <Image src='https://images.unsplash.com/photo-1528597788073-3bf9d20118ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' className="rounded" width={300} height={300} alt='image'/>
                </div>
                <div className="w-10/12 -bottom-14 flex absolute flex-col items-center py-5 justify-center rounded bg-[#566d81] opacity-80">
                    <h1 className=" text-white text-xl font-semibold">Metagenomics</h1>
                    <Separator className='w-1/3 my-2 h-[2px]'/>
                    <p className="text-xs italic font-semibold text-white">Chief Executive Officer</p>
                    <div className="flex items-center justify-between my-2 w-2/5">
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/metro/26/FFFFFF/facebook-new--v2.png" alt="facebook-new--v2" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png" alt="linkedin" width={17} height={17}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col relative my-5 items-center justify-center">
                <div className="w-9/12">
                    <Image src='https://images.unsplash.com/photo-1583846724527-80ceecb9b80c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' className="rounded" width={300} height={300} alt='image'/>
                </div>
                <div className="w-10/12 -bottom-14 flex absolute flex-col items-center py-5 justify-center rounded bg-[#566d81] opacity-80">
                    <h1 className=" text-white text-xl font-semibold">Metagenomics</h1>
                    <Separator className='w-1/3 my-2 h-[2px]'/>
                    <p className="text-xs italic font-semibold text-white">Chief Executive Officer</p>
                    <div className="flex items-center justify-between my-2 w-2/5">
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/metro/26/FFFFFF/facebook-new--v2.png" alt="facebook-new--v2" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" width={17} height={17}/>
                        </Link>
                        <Link href='/'>
                        <Image src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png" alt="linkedin" width={17} height={17}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Services