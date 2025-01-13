import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion';



const SectionOne = () => {
  const ref= useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className='max-w-5xl mx-auto my-36'>
      <div className='flex flex-row gap-10'>
      <div className='flex-1'>
        <motion.img 
                initial={{opacity: 0, x: -100}}
                animate={{opacity: isInView ? 1 : 0 , x: isInView ? 0 : -100  }}
                transition={{
                    duration: 1.5,
                    ease: "linear",
                    delay: 0.5 , 
                }}    
                src="https://static.wixstatic.com/media/1f3f2b_b3f21b7f5c154daa84e020e5e2b5dc6f~mv2.png/v1/crop/x_0,y_0,w_3600,h_3605/fill/w_563,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mmga1.png"   
                alt='section-1'
                className='w-[100%]'      
        />
      </div>
          <div className='flex-1'>
                <motion.h2 
                initial={{opacity: 0, y: -50}}
                animate={{opacity: isInView ? 1 : 0 ,y: isInView ? 0 : -50  }}
                transition={{
                    duration: 1.5,
                    ease: "linear",
                    delay: 0.5 , 
                }}                    
                className='text-center text-7xl'>
                  About
                </motion.h2>

                <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: isInView ? 1 : 0 , x: isInView ? 0 : 100  }}
                transition={{
                    duration: 1.5,
                    ease: "linear",
                    delay: 0.5 , 
                }}                  
                >
                  <p className='my-10 font-mono text-xl'>
                    Pepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the internet.
                  </p>
                  <p className='my-10 font-mono text-xl'>
                    Pepe is here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, $PEPE is a coin for the people, forever. Fueled by pure memetic power, let $PEPE show you the way.
                  </p>
                </motion.div>
          </div>
      </div>
    </div>
  )
}

export default SectionOne