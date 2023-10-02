'use client'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function FormComp() {
  return (
    <main className="custom-shadow p-10 w-11/12 bg-gray-50 mt-10 ">
        <form action="" className="w-full">
            <div className="lg:grid flex flex-col lg:grid-cols-2 gap-5">
            <Input type='text' placeholder='Your Name' className='bg-gray-50'/>
            <Input type='email' placeholder='Your Email' className='bg-gray-50'/>
            <Input type='text' placeholder='Subject' className='lg:col-span-2 bg-gray-50' />
            <Textarea placeholder="Type your message here." className='lg:col-span-2 h-40 bg-gray-50'/>
            <Button className='bg-blue-500 rounded-full lg:w-1/6 lg:col-span-2 m-auto'>Send Message</Button>
            </div>
        </form>        
    </main>
  )
}

export default FormComp