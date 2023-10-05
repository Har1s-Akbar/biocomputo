'use client'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function FormComp() {
  const [name, setName] = useState('');
  const [usergmail, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [ message, setMessage] = useState('');
  const formSubmit = async(e) =>{
    e.preventDefault()
    await fetch('/api/email',{
      method:'POST',
      body: JSON.stringify({
        name,
        usergmail,
        subject,
        message
      })
    })
  }
  return (
    <main className="custom-shadow p-10 w-11/12 bg-gray-50 mt-10 ">
        <form className="w-full">
            <div className="lg:grid flex flex-col lg:grid-cols-2 gap-5">
            <Input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Your Name' className='bg-gray-50'/>
            <Input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Your Email' className='bg-gray-50'/>
            <Input onChange={(e)=>{setSubject(e.target.value)}} type='text' placeholder='Subject' className='lg:col-span-2 bg-gray-50' />
            <Textarea placeholder="Type your message here." onChange={(e)=>{setMessage(e.target.value)}} className='lg:col-span-2 h-40 bg-gray-50'/>
            <Button onClick={(e)=>{formSubmit(e)}} className='bg-blue-500 rounded-full lg:w-1/6 lg:col-span-2 m-auto'>Send Message</Button>
            </div>
        </form>        
    </main>
  )
}

export default FormComp