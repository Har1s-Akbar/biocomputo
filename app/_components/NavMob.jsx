'use client'
import Image from "next/image"

function NavMob() {
  return (
    <main className='w-full border-y-2 py-3 bg-white shadow-md border-2'>
        <button className="ml-4">
            <Image src="https://img.icons8.com/ios-glyphs/30/menu--v3.png" alt="menu--v3" width={30} height={30}/>
        </button>
    </main>
  )
}

export default NavMob