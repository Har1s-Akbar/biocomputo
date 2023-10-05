import logo from '../_assets/bio.png'
import Image from 'next/image'

function Logo() {
  return (
    <main className='flex items-center justify-between w-10/12 m-auto py-2'>
        <Image src={logo} alt='logo' width={250} height={200}/>
        <h1 className='text2 text-3xl'>Data Analysis Expert</h1>
    </main>
  )
}

export default Logo