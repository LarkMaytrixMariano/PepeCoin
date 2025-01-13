import React from 'react'
import { motion } from 'framer-motion'

const SocialIcons = ({url, isInView}) => {
  return (
    <>
    <motion.img
        initial={{scale: 0}}
        animate={{scale: isInView ? 1: 0}}
        transition={{
            duration: 1.5,
            ease: "linear",
            delay: 0.3 , 
            bounceDamping: 10,
            bounceStiffness: 600,  
        }}
        src={url}
        alt="social icon"
        className='w-20 h-20 mr-3'
    />
    
    </>
  )
}

export default SocialIcons