import React from 'react'
import MemberIcon from '../../assets/icons/group-2.svg'
import ColabIcon from '../../assets/icons/collaboration.svg'
import ClickIcon from '../../assets/icons/click.svg'
import CardIcon from '../../assets/icons/credit-card.svg'

const reaches = [
  {
    id: 1113,
    title: '2,245,341',
    subTitle: 'Members',
    icon: MemberIcon
  },
  {
    id: 4564,
    title: '46,328',
    subTitle: 'Clubs',
    icon: ColabIcon
  },
  {
    id: 1235,
    title: '828,867',
    subTitle: 'Members',
    icon: ClickIcon
  },
  {
    id: 4544,
    title: '1,926,436',
    subTitle: 'Payments',
    icon: CardIcon
  },
]

function Reach() {
  return (
    <section className='bg-silver py-10'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='flex flex-col justify-center text-center lg:text-left'>
          <h2 className='text-heading2 leading-heading2 font-semibold'>
            Helping a local <br /> <span className='text-primary'>business reinvent itself</span>
          </h2>
          <p className='text-[#18191F]'>We reached here with our hard work and dedication</p>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          {
            reaches.map((item) => (
              <div key={item.id} className='flex items-center justify-center lg:justify-start gap-3'>
                <img src={item.icon} alt={item.title} className='w-[48px]' />
                <div className='flex flex-col gap-1'>
                  <h4 className='text-heading4 leading-heading4 font-semibold'>{item.title}</h4>
                  <p className='text-gray'>{item.subTitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Reach