import React from 'react'
import Button from '../ui/Button'
import Image from '../../assets/pana.png'

function About2() {
  return (
    <section className='container mx-auto py-10 flex flex-col lg:flex-row items-center gap-10'>
      <div className='w-full basis-[40%] flex items-center justify-center'>
        <img src={Image} alt='image' className='w-full' />
      </div>
      <div className='w-full basis-[60%] flex flex-col items-start gap-5'>
        <h2 className='text-heading2 leading-heading2 font-semibold'>
          How to design your site footer like we did
        </h2>
        <p className='text-gray'>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button>Learn More</Button>
      </div>
    </section>
  )
}

export default About2