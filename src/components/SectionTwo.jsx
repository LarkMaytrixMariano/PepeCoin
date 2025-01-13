import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion';
import Card from '../elements/Card';
import { useState, useEffect } from 'react';


const styles = {
    border: 0,
    margin: "0 auto",
    marginBottom: ".5rem",
    display: "block",
    borderRadius: "10px",
    maxWidth: "960px",
    minWidth: "300px",
}

const SectionTwo = () => {
    const ref= useRef(null);
    const isInView = useInView(ref);


    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        const iframeSection = document.getElementById('section-two');
        if (iframeSection && iframeSection.getBoundingClientRect().top <= window.innerHeight) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      };
  
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
  return (
    <div className='max-w-6xl mx-auto my-36' ref={ref} id="buy">
        <motion.h2
                initial={{opacity: 0, y: -50}}
                animate={{opacity: isInView ? 1 : 0 ,y: isInView ? 0 : -50  }}
                transition={{
                    duration: 1.5,
                    ease: "linear",
                    delay: 0.5 , 
                }}  
            className='text-center text-7xl'        
        >
            how to buy
        </motion.h2>
    <Card title="Create a Wallet" description="download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io." url="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T212906_738.png" isInView={isInView} speed={5} />
    <Card title="Get Some ETH" description="have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet." url="https://static.wixstatic.com/media/1f3f2b_48f30828b7d740d98efb1a2f8febc010~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T213620_680.png" isInView={isInView} speed={20} />
    <Card title="Go to Uniswap" description="connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign." url="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniswap%20(2).png" isInView={isInView} speed={35} />
    <Card title="Switch ETH for $PEPE" description="switch ETH for $PEPE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility." url="https://static.wixstatic.com/media/1f3f2b_04aca37507ff420d94bd45bde7547fcc~mv2.png/v1/fill/w_241,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T215146_874.png" isInView={isInView} speed={50} />


    <div className='flex flex-row'>
        <div className='flex-1' id="section-two">
            {/* Other components */}
            {isInViewport && (
                <iframe
                src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
                height="660px"
                width="100%"
                style={styles}
                />
            )}
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
            <img 
                img src="https://static.wixstatic.com/media/1f3f2b_b1153043afba4b8e841b3f82859d3846~mv2.png/v1/crop/x_0,y_14,w_2472,h_2477/fill/w_454,h_455,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T221823_605.png"   
                alt="Section Three"
                className='w-[100%]'                   
            
            />
        </motion.div>
    </div>
    </div>
  )
}

export default SectionTwo