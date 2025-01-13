import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-2xl border-b-1 border-black'>
        <div className='mx-auto max-w-4xl'>
          <ul className='flex flex-row space-x-5 py-10'>
            <li className='flex-1'>
              <a href=''>
              <img src="https://static.wixstatic.com/media/1f3f2b_e78823e3b50f4f76963293a9ab1e19c3~mv2.png/v1/fill/w_211,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepetitle.png" alt="logo" className='w-40'/>
              </a>
            </li>
            <li className='nav_components  hover:opacity-50'><a href='#home'>home</a></li>
            <li className='nav_components  hover:opacity-50'><a href='#about'>about</a></li>
            <li className='nav_components  hover:opacity-50'><a href='#buy'>how to buy</a></li>
            <li className='nav_components  hover:opacity-50'><a href='#section-two'>bridge</a></li>
            <li className='nav_components  hover:opacity-50'><a href='#token'>tokenomics</a></li>
            <li className='nav_components  hover:opacity-50'><a href='#roadmap'>roadmap</a></li>
            <li className='border border-1 border-white rounded-full px-10 my-auto py-3 flex-end'>
              <b className='my-auto text-white'>buy now</b>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar