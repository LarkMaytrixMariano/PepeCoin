import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-2xl border-b-1 border-black'>
        <div className='mx-auto max-w-5xl'>
          <ul className='flex flex-row space-x-5 py-10'>
            <li className='flex-1'>
              <img src="https://static.wixstatic.com/media/1f3f2b_e78823e3b50f4f76963293a9ab1e19c3~mv2.png/v1/fill/w_211,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepetitle.png" alt="logo" className='w-40'/>
            </li>
            <li className='nav_components'>home</li>
            <li className='nav_components'>about</li>
            <li className='nav_components'>how to buy</li>
            <li className='nav_components'>bridge</li>
            <li className='nav_components'>tokenomics</li>
            <li className='nav_components'>roadmap</li>
            <li className='border border-1 border-white rounded-full px-10 my-auto py-3 flex-end'>
              <b className='my-auto text-white'>buy now</b>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar