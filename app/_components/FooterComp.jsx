import Link from "next/link"
import Image from "next/image"

function FooterComp() {
    return (
      <main className="footer">
        <div className="grid grid-cols-4">
          <div className="p-20">
              <div className="my-10">
                  <p className="text-white text-sm my-2">Biocomputomic</p>
                  <p className="text-white text-sm my-2">Pakistan</p>
                  <p className="text-white text-sm my-2">NY 535022, Karachi</p>
              </div>
              <div>
                  <p className="text-white text-sm my-1"><span className="font-bold">Phone:</span> +92 3152089238</p>
                  <p className="text-white text-sm my-1"><span className="font-bold">Phone:</span> +92 3152089238</p>
              </div>
              <div className="my-2 flex items-center justify-between">
                <Link href='/'>
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png" alt="twitter" width={25} height={25}/>    
                </Link>
                <Link href='/'>
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="facebook-new" width={25} height={25}/>    
                </Link>
                <Link href='/'>
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" width={25} height={25}/>    
                </Link>
                <Link href='/'>
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/skype.png" alt="skype" width={25} height={25}/>    
                </Link>
                <Link href='/'>
                    <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin" width={25} height={25}/>    
                </Link>
              </div>
          </div>
          
        </div>
      </main>
    )
  }
  export default FooterComp