import React from 'react'

import PostImage1 from '../../assets/post/image 18.png'
import PostImage2 from '../../assets/post/image 19.png'
import PostImage3 from '../../assets/post/image 20.png'
import ArrowRightIcon from "../../assets/icons/arrow-right.svg"

const posts = [
  {
    id: 112233,
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    imageUrl: PostImage1
  },
  {
    id: 223344,
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    imageUrl: PostImage2
  },
  {
    id: 334455,
    title: 'Revamping the Membership Model with Triathlon Australia',
    imageUrl: PostImage3
  },
]

function Blog() {
  return (
    <section className='container mx-auto py-10 flex flex-col gap-8
    '>
      <div className='flex flex-col gap-4 max-w-[628px] mx-auto text-center'>
        <h2 className='text-heading2 leading-heading2 font-semibold'>
          Caring is the new marketing
        </h2>
        <p className='text-gray'>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {
          posts.map((post) => (
            <div key={post.id} className='relative pb-10'>
              <div className='w-full h-[286px] flex items-center justify-between'>
                <img src={post.imageUrl} alt={post.title} className='w-full h-full object-cover' />
              </div>
              <div className='absolute left-[50%] -translate-x-[50%] top-[170px] w-[90%] bg-silver rounded-lg shadow-md shadow-gray-blue p-4 flex flex-col gap-5 justify-center items-center'>
                <h4 className='text-heading4 leading-heading4 text-center text-gray'>
                  {post.title}
                </h4>
                <div className='flex items-center'>
                  <a href="#" className="flex items-center gap-3">
                    <p className="text-primary font-semibold">Read more</p>
                    <img src={ArrowRightIcon} alt="arrow icon" className="w-[24px]" />
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Blog