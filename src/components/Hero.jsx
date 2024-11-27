import fore from "../assets/foreground.svg"
import { motion } from "motion/react"

export default function Hero() {
    return(
       <section className=" h-auto min-h-[80vh] lg:min-h-[150vh] flex items-center lg:items-end w-full" style={{ background: `url(${fore}) #071624 `, backgroundRepeat:"no-repeat", backgroundPosition:"center",  backgroundSize:"cover" }}>
        <div className="w-[90%]  mx-auto  h-auto min-h-[35vh] lg:min-h-[100vh] flex flex-col xl:gap-5 gap-8">
            <h1 className="tracking-tighter lg:text-[70px] text-[30px] w-full text-center lg:text-left text-white lg:w-[65%] font-semibold leading-[70px]">Trusted Multi-Chain <span className="text-[#e4b40d]">DEX</span> Platform</h1>
            <p className="tracking-tighter lg:text-[20px] text-lg text-center lg:text-left text-[#9E9E9E]">Trade, earn, and own crypto on the all-in-one-multi-chain DEX</p>
            <div className=" flex gap-4  xl:mx-0">
                <motion.button
                 whileHover={{scale:0.9, transition: {duration:.5}}}
                 className="font-raleway bg-gradient-to-b from-[#FFE68FD6] via-[#FFE68FD6] to-[#E4B40D] w-[159px] h-[47px] rounded-full text-14px ">Connect Wallet</motion.button>
                <motion.button 
                 whileHover={{scale:0.9, transition: {duration:.5}}}
                className="font-raleway tra border-2 border-[#e4b40d] text-[#e4b40d] w-[159px] h-[47px] rounded-full text-14px ">Trade Crypto</motion.button>
            </div>
         </div>
   
       </section>

    )
}