'use client'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function FormComp() {
  return (
    <main className="custom-shadow p-7 mt-10 ">
        <form action="" className="w-full">
            <div className="lg:grid flex flex-col lg:grid-cols-2 gap-5">
            <Input type='text' placeholder='Your Name'/>
            <Input type='email' placeholder='Your Email'/>
            <Input type='text' placeholder='Subject' className='lg:col-span-2'/>
            <Textarea placeholder="Type your message here." className='lg:col-span-2 h-40'/>
            <Button className='bg-blue-500 rounded-full lg:w-1/6 lg:col-span-2 m-auto'>Send Message</Button>
            </div>
        </form>        
    </main>
  )
}

export default FormComp