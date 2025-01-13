import { motion } from 'framer-motion'
import React from 'react'
import TypewritterEffect from './TypewritterEffect'

const Card = ({title, description, url, isInView , speed}) => {
  return (
    <div className='flex flex-row gap-10 my-10 border-2 border-white  shadow-[#E1EDCF] shadow-2xl rounded-tr-3xl rounded-bl-3xl bg-black bg-opacity-50 p-12'>
        <motion.img
            initial={{opacity: 0 }}
            animate={{opacity: isInView ? 1: 0}}
            transition={{
                duration: 1.5,
                ease:'easeOut',
                delay: 0.5
            }}
            src={url}
            className='h-[150px]'
            alt="section 2 card`"
        />
        <span className='text-white text-lg flex-1'>
            <h2 className='text-5xl'>{title}</h2><br/>
            {isInView ? (<TypewritterEffect text={description} speed={speed}/>): null}
        </span>
    </div>
  )
}

export default Card