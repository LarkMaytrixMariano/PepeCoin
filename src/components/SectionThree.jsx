import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion';

const SectionThree = () => {
    const ref= useRef(null);
    const isInView = useInView(ref);
  return (
    <div ref={ref} className='max-w-6xl mx-auto'>
        <h2 className='text-center text-6xl mt-24'>TOKENOMICS</h2>

        <div className='flex flex-row my-20'>
            <div className='flex-1 justify-center mr-10'>
                <h2 className='text-6xl text-center font-mono'>
                Token Supply: <br/> 420,690,000,000,000
                </h2>
                <div className='my-10 border-2 border-white  shadow-[#E1EDCF] shadow-2xl rounded-tr-3xl rounded-bl-3xl bg-black bg-opacity-50 p-12'>
                    <span className='text-white text-2xl flex-1'>
                    No Taxes, No Bullshit. It’s that simple. <br/> <br/>
                    LP tokens are burnt, and contract ownership is renounced. 
                    </span>
                </div>
            </div>
            <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: isInView ? 1 : 0 , x: isInView ? 0 : 100  }}
                transition={{
                    duration: 1,
                    ease: "linear",
                    delay: 0.5 , 
                }}
                className='flex-1'            
            >
            <img src='https://static.wixstatic.com/media/1f3f2b_b1f89e2179534202bedc41f8081abad7~mv2.png/v1/fill/w_433,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepememe%20(4).png'
            className='w-[100% max-auto]'
            />
            </motion.div>
        </div>
    </div>
  )
}

export default SectionThree