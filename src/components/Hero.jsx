import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import SocialIcons from '../elements/SocialIcons';
import HeroPcs from '../elements/HeroPcs';

const backgroundStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("https://static.wixstatic.com/media/1f3f2b_45e0862f90b549b2b8858d28a44b60cc~mv2.png/v1/fill/w_980,h_898,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/1f3f2b_45e0862f90b549b2b8858d28a44b60cc~mv2.png")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    opacity: 0.2,
    transition: "opacity 2s",
    zIndex: -1,
};

const Hero = () => {
    const ref= useRef(null);
    const isInView = useInView(ref);

console.log(isInView);
  return (
    <div ref={ref} id='home'>
    <div style={backgroundStyle} />
        <div className='max-w-5xl mx-auto flex flex-row pt-48'>
                {/* Section 1 */}
            <div>
                <p className='text-5xl italic'>$pepe</p><br/>
                <motion.p 
                initial={{opacity: 0, x: -200}}
                animate={{opacity: isInView ? 1 : 0 , x: isInView ? 0 : -200  }}
                transition={{
                    duration: 1.5,
                    ease: "linear",
                    delay: 0.3 , 
                    bounceDamping: 10,
                    bounceStiffness: 600,
                }}
                className='text-3xl font-mono font-light leading-20'> The most memeable memecoin in<br/> existence. The dogs have had their <br/> day, it’s time for Pepe to take reign.</motion.p>
                <p className='flex flex-row my-10 gap-3'>
                    <SocialIcons url="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg" isInView={isInView}/>
                    <SocialIcons url="https://static.wixstatic.com/media/1f3f2b_8eaff3e5f42b45f88cf11d418e25d5e6~mv2.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/twitter%20(2).png" isInView={isInView}/>
                    <SocialIcons url="https://static.wixstatic.com/media/1f3f2b_95d714edb8484668b50ec07fb8b4f394~mv2.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/etherscan.png" isInView={isInView}/>
                    <SocialIcons url="https://static.wixstatic.com/media/1f3f2b_614e05b6d3e84630b377c85d7ed33137~mv2.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cm%20c.png" isInView={isInView}/>
                    <SocialIcons url="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_27,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniswap%20(2).png" isInView={isInView}/>
                </p>
            </div>

            <motion.div
                initial={{opacity: 0, x: 200}}
                animate={{opacity: isInView ? 1 : 0 , x: isInView ? 0 : 200  }}
                transition={{
                    duration: 1.5,
                    ease: "linear",
                    delay: 0.3 , 
                    bounceDamping: 10,
                    bounceStiffness: 600,
                }}               
            >
                <img src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_476,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T220301_142.png" 
                className='my-auto'
                alt="hero"
                />
            </motion.div>
        </div>

        <div className='max-w-5xl mx-auto'>
            <div className='flex flex-row gap-10'>
                <HeroPcs title="robinhood" url="https://static.wixstatic.com/media/c267fc_83cd83ac1b354055b51fa77dfba11a81~mv2.png/v1/fill/w_14,h_14,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed.png" isInView={isInView} />
                <HeroPcs title="coinbase" url="https://static.wixstatic.com/media/c267fc_e66f9e3851df4765a0f16b7380420265~mv2.png/v1/fill/w_14,h_14,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/coinbase-coin-logo-C86F46D7B8-seeklogo_com.png" isInView={isInView} />
                <HeroPcs title="binance" url="https://static.wixstatic.com/media/1f3f2b_58bf93c97a11404db3720ec6be4111ed~mv2.png/v1/fill/w_11,h_11,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Binance_Logo_svg.png" isInView={isInView} />
            </div>
            <br />
            <div className='flex flex-row gap-10'>
                <HeroPcs title="crypto.com" url="https://crypto.com/__assets/mkt-nav-footer/images/cdc_logo.svg" isInView={isInView} />
                <HeroPcs title="kraken" url="https://static.wixstatic.com/media/c267fc_15d836477efc4c10958505113b73f645~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kraken_300x300_x2.png" isInView={isInView} />
                <HeroPcs title="revolut" url="https://static.wixstatic.com/media/c267fc_3b6041a8f2c94731b04747a4d297bf4f~mv2.png/v1/fill/w_34,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/images.png" isInView={isInView} />
            </div>
            <br />
            <div className='flex flex-row gap-10'>
                <HeroPcs title="bybit" url="https://static.wixstatic.com/media/c267fc_34c34cdbe3594d86b3c2bd1b426b7144~mv2.webp/v1/fill/w_43,h_42,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bybit_logo-min.webp" isInView={isInView} />
                <HeroPcs title="upbit" url="https://static.wixstatic.com/media/c267fc_02419fca49cd4de4af5364a4f4dfe9d1~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/zFiXWHyH_400x400.png" isInView={isInView} />
                <HeroPcs title="uniswap" url="https://static.wixstatic.com/media/c267fc_a6c4d8b7f63e4eb7b4e876f778fb4b79~mv2.png/v1/fill/w_43,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Uniswap_Logo_svg.png" isInView={isInView} />
            </div>
            <br />
            
        </div>
    </div>
  )
}

export default Hero