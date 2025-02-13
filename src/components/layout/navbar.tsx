import { useState } from 'react'
import Logo from '../../assets/Logo.png'
import Button from '../ui/Button'
import Sidebar from './Sidebar'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className='bg-silver py-4'>
        <section className='container mx-auto flex items-center justify-between'>
          <img src={Logo} alt="logo" className='w-[154px]' />
          <ul className='hidden lg:flex items-center gap-4'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div className='flex items-center gap-3'>
            <Button variant='outline'>Log in</Button>
            <Button>Sign up</Button>
          </div>
          <div className='flex lg:hidden'>
            <button type='button' className='p-3' onClick={() => setMenuOpen(true)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>
        </section>
      </nav>
      <Sidebar show={menuOpen} handleClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar