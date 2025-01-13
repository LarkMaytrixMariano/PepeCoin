import React from 'react'
import { motion, useInView } from 'framer-motion';


const HeroPcs = ({title,url, isInView}) => {
  return (
    <>
        <motion.span 
        initial={{scaleX: 0}} 
        animate={{scaleX: isInView ? 1 : 0}}
        transition={{duration: 0.7,
            ease: "linear",
            delay: 1,
            bounceDamping: 10,
            bounceStiffness: 600,
        }}
        className='hover:bg-white hover:opacity-50 hover:text-black hover:cursor-pointer border rounded-full border-white px-10 py-2 text-4xl flex-1 flex justify-center'
        >
            <motion.b
                    initial={{ opacity: 0}} 
                    animate={{opacity: isInView ? 1 : 0}}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 2,
                        bounceDamping: 10,
                        bounceStiffness: 600,
                    }}            
            >
                {title}
            </motion.b>
            <motion.img src={url} className='w-10 h-10 ml-4 animate-bounce rounded-full' 
                    initial={{ opacity: 0}} 
                    animate={{opacity: isInView ? 1 : 0}}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 2,
                        bounceDamping: 10,
                        bounceStiffness: 600,
                    }}
            />
        </motion.span>
    </>
  )
}

export default HeroPcs