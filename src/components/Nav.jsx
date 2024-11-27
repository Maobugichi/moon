import logo from "../assets/logo.svg"
import { motion } from "motion/react"

export default function Nav({isClick, setIsClick}) {

  function click() {
    setIsClick(true)
  }

    return(
        <header className="absolute z-0 w-full ">
        <nav className="flex w-[90%] mx-auto justify-between h-[100px] items-center">
          <img className="w-[150px] lg:w-[194px] lg:h-[73px]" src={logo} alt="moonex logo"/>
          <ul className="hidden lg:flex  lg:w-[60%] lg:justify-between">
              <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">Home</li>
              <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">About Us</li>
              <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">Roadmap</li>
              <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">FAQs</li>
              <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">Contact Us</li>
          </ul>

          <div className="menu lg:hidden">
          <i onClick={click} className="fa-solid fa-bars fa-xl lg:hidden " style={{color: "#FFD43B"}}></i>
          </div>
          <motion.button
          whileHover={{scale:0.9, transition: {duration:.5}}}
          className="font-raleway hidden lg:block lg:w-[159px] lg:bg-gradient-to-b from-[#FFE68FD6] via-[#FFE68FD6] to-[#E4B40D] lg:h-[47px] rounded-full  hover:animate-customKeyframe">Connect Wallet</motion.button>
        </nav>
     </header>
    )
}