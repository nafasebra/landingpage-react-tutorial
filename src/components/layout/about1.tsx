import React from 'react'
import Button from '../ui/Button'
import Image from '../../assets/Frame 35.png'

function About1() {
  return (
    <section className='container mx-auto py-10 flex flex-col lg:flex-row items-center gap-10'>
      <div className='w-full basis-[40%] flex items-center justify-center'>
        <img src={Image} alt='image' className='w-full' />
      </div>
      <div className='w-full basis-[60%] flex flex-col items-start gap-5'>
        <h2 className='text-heading2 leading-heading2 font-semibold'>
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className='text-gray'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <Button>Learn More</Button>
      </div>
    </section>
  )
}

export default About1