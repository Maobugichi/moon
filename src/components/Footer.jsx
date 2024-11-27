import footerLogo from "../assets/footer-logo.svg"
import vector from "../assets/Vector.svg"
import twitter from "../assets/Twitter.svg"
import social from "../assets/social.svg"


export default function Footer() {
    return(
    <footer className="bg-[#051422] h-auto min-h-[45vh] grid place-items-center">
      <div className="font-raleway flex w-[90%] mx-auto justify-between  items-center">
        <img className="w-[40%] lg:w-[20%] mt-5" src={footerLogo} alt="logo"/>
        <ul className=" hidden lg:flex w-[40%] justify-between text-[#FFFFFF] text-lg">
          <li>About Us</li>
          <li>Roadmap</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>

        <div className="flex  lg:w-[15%] flex-col gap-5 text-center">
          <h4 className="text-3xl text-[white]">Contact <span className="text-[#e4b40d]">Us</span></h4>
          <div className="flex  justify-between">
            <img src={social} alt="telegram logo"/>
            <img src={vector} alt="discord"/>
            <img src={twitter} alt="twitter logo"/>
          </div>
        </div>
      </div>
   </footer>)
}