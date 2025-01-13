import React from 'react'

const Footer = () => {
  return (
<div className='max-w-full mx-auto font-sans'>
    <div className='max-w-3xl mx-auto mb-2'>
        <div className='flex flex-row gap-10 justify-center mb-10'>
            <img 
                src='https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_85,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/twtttt.png'
                className='h-24 my-auto mr-20'
            />
            <img 
                src='https://static.wixstatic.com/media/1f3f2b_e78823e3b50f4f76963293a9ab1e19c3~mv2.png/v1/fill/w_211,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepetitle.png'
                className='h-20 my-auto'
            />
        </div>

        <p className='leading-10 text-center text-xl'>
            $pepe coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.
        </p> 
        <br/>
        <p className='leading-10 text-center text-xl'>
            $PEPE is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
        </p>
    </div>
    
    <div className='w-full border-t border-gray-500 shadow-2xl shadow-black py-3 bg-[#3a963d] mt-5'>
        <div className='max-w-3xl mx-auto'>
            <p className='leading-10 text-center text-sm text-black font-semibold'>&#169; 2024 by Pepe. All rights reserved!</p>
        </div>
    </div>
</div>


  )
}

export default Footer