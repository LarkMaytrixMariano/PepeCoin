import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion';

const SectionFour = () => {
    const ref= useRef(null);
    const isInView = useInView(ref);
  return (
    <div ref={ref} className='max-w-6xl mx-auto my-20' id="roadmap">
        <div className='grid grid-cols-3 gap-20'>
            <motion.div
                initial={{opacity: 0, x: -100, y: -138, rotate: 180}}
                animate={{opacity: isInView ? 1 : 0 , 
                    x: isInView ? 0 : -100,
                    y: isInView ? 0 : -138,
                    rotate: isInView ? 0 : -180,
              }}
                transition={{
                    duration: 1,
                    ease: "linear",
                    delay: 0.5 , 
                }}            
            
            >
            <img 
                src='https://static.wixstatic.com/media/1f3f2b_33505209bd5340c581cc5e861ff74845~mv2.png/v1/crop/x_455,y_0,w_2691,h_2700/fill/w_296,h_297,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepepissingnobackground%20copy.png'
                alt="Section Four"
                className='w-72'
            />
            </motion.div>
            <div>
                <h2 className='text-center text-4xl'>ROADMAP</h2>
                <div className='my-10 border-2 border-white shadow-[#E1EDCF] shadow-2xl rounded-tr-3xl rounded-bl-3xl bg-black bg-opacity-50 p-12 text-center'>
                    <span className='text-white text-xl flex-1 '>
                    Phase 1: Meme <br/>
                    Phase 2: Vibe and HODL <br/>
                    Phase 3: Meme Takeover 
                    </span>
                </div>
            </div>
                            
            <motion.div
                initial={{opacity: 0, x: 100 , y: -138, rotate: 180}}
                animate={{opacity: isInView ? 1 : 0 ,
                    x: isInView ? 0 : 100 ,
                    y: isInView ? 0 : -138 ,
                    rotate: isInView ? 0 : -180,
                 }}
                transition={{
                    duration: 1,

                    ease: "linear",
                    delay: 0.5 , 
                }}                    
                >
                    <img src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_293,h_297,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T220301_142.png" 
                        className='w-72'
                        alt="section Five"
                    />
                </motion.div>
        </div>
    </div>
  )
}

export default SectionFour