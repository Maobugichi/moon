import { useEffect } from "react";

export default function SideNav({isClick,setIsClick}) {
    console.log(isClick)
    const cancel = document.querySelector(".cancel");
    const sideNav = document.querySelector(".nav-side");

    useEffect(() => {
        if (isClick) {
            sideNav.classList.remove("animate-fade2")
            sideNav.classList.add("animate-fade")
        } 

        if (!isClick && sideNav) {
            
                sideNav.classList.remove("translate-x-full")
                sideNav.classList.add("animate-fade2")
                 setTimeout(() => {
                  sideNav.classList.remove("animate-fade")
                  sideNav.classList.add("translate-x-full")
                 }, 1000)
           
        }
    })

    function setClick() {
        setIsClick(!isClick)
    }
    return(
     <div className="nav-side translate-x-full h-[100vh] fixed lg:hidden   z-10 w-full grid place-items-center gap-11" style={{backgroundColor: "rgba(7,22,36,0.9)"}}> 
      <i onClick={setClick} className="fa-solid fa-xmark fa-2xl absolute top-12 right-5 cancel" style={{color: "#fff"}}></i>
      <ul className="flex pl-5  text-2xl  flex-col w-full  h-1/2 justify-between">
        <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">Home</li>
        <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">About Us</li>
        <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">Roadmap</li>
        <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">FAQs</li>
        <li className="transition-colors duration-700 text-white hover:text-[#e4b40d]">Contact Us</li>
      </ul>
    </div>
    )
}