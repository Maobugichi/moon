import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Faqs from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import { useState } from "react";
import SideNav from "./SideNav";
export default function Container() {
const [isClick, setIsClick] = useState(false)
  return(
    <div class="relative overflow-x-hidden w-full">
      <SideNav
      isClick={isClick}
      setIsClick={setIsClick}
      />
      <Nav
       isClick={isClick}
       setIsClick={setIsClick}
      />
      <Hero/>
      <About/>
      <Features/>
      <Faqs/>
      <Footer/>
    </div>
   
    )
}