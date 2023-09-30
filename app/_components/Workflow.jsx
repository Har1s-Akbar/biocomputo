import diag from '../_assets/diag.png'
import Image from 'next/image'

function Workflow() {
  return (
    <main className="flex flex-col items-center mt-10 mb-16">
        <div className='mb-10'>
            <h1 className="text-3xl font-medium text-blue-600 my-5">WORK FLOW OF A BIOCOMPUTOMICS PROJECT</h1>
        </div>
        <div>
            <Image src={diag} height={300} width={1100} alt='diag'/>
        </div>
    </main>
  )
}

export default Workflow