
import uniswap from "../assets/uniswap.svg"
import check from "../assets/check.svg"
import close from "../assets/close.svg"
import gr from "../assets/gr.svg"
import about from "../assets/about.png"
export default function About() {
 
    return(
     <section className="h-auto min-h-[70vh] lg:min-h-[100vh] bg-[#071624]">
        <div className="w-[90%] mx-auto grid gap-5">
           
            <h2 className="tracking-tighter lg:text-4xl text-2xl text-[white] lg:text-left text-center">Why <span className="text-[#e4b40d]">MoonEX </span> ?</h2>
            <div className="w-full   lg:p-5 h-[480px] flex items-center rounded-lg" style={{background:`url(${about}) #101f29`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <table className="w-full h-[90%] ">
                    <tr className="h-[5%] ">
                      <th className="w-[30%] border-r border-[#D9D9D91A]"><p className="mb-1 lg:text-2xl text-md text-[#e4b40d]">comparison</p></th>
                      <th className="w-[30%] border-r border-[#D9D9D91A]"><img className="lg:w-1/2  mx-auto"  src={gr} alt="logo moonex"/></th>
                      <th className="w-[30%]"><img className="lg:w-[40%] w-[90px] mx-auto" src={uniswap} alt="uniswap logo"/></th>
                    </tr>
                    <tr >
                      <td className=" border-r border-b border-t border-[#D9D9D91A] text-[#F0F0F0B2] lg:pl-8 pl-3 lg:text-[20px] text-sm w-1/2">1. Point no one</td>
                      <td className=" border-r border-b border-t border-[#D9D9D91A] "><img className="mx-auto w-[30px]"  src={check} alt="check icon"/></td>
                      <td className="border-r border-b border-t border-[#D9D9D91A] "><img className="mx-auto w-[38px]"  src={close} alt="close icon"/></td>
                     
                    </tr>
                    <tr>
                      <td className="border-r border-b border-t border-[#D9D9D91A] text-[#F0F0F0B2]  lg:pl-8 pl-3 lg:text-[20px] text-sm">2. Point no one</td>
                      <td className="border-r border-b border-t border-[#D9D9D91A]"><img className="mx-auto w-[30px]"  src={check} alt="check icon"/></td>
                      <td className="border-r border-b border-t border-[#D9D9D91A]"><img className="mx-auto w-[38px]"  src={close} alt="close icon"/></td>
                     
                    </tr>
        
                      <tr>
                      <td className="border-r border-b border-t border-[#D9D9D91A] text-[#F0F0F0B2]  lg:pl-8 pl-3 lg:text-[20px] text-sm">3. Point no one</td>
                    <td className="border-r border-b border-t border-[#D9D9D91A]"><img className="mx-auto w-[30px]"  src={check} alt="check icon"/></td>
                  <td className="border-r border-b border-t border-[#D9D9D91A]"><img className="mx-auto w-[38px]"  src={close} alt="close icon"/></td>
                  </tr>
    
                  <tr>
                    <td className="border-r border-b border-t border-[#D9D9D91A] text-[#F0F0F0B2]  lg:pl-8 pl-3 lg:text-[20px] text-sm">4. Point no one</td>
                    <td className="border-r border-b border-t border-[#D9D9D91A]"><img className="mx-auto w-[30px]"  src={check} alt="check icon"/></td>
                    <td className="border-r border-b border-t border-[#D9D9D91A]"><img className="mx-auto w-[38px]"  src={close} alt="close icon"/></td>
                  </tr>

                  <tr>
                    <td className=" border-r border-b border-t border-[#D9D9D91A] text-[#F0F0F0B2]  lg:pl-8 pl-3 lg:text-[20px] text-sm">5. Point no one</td>
                    <td className="border-r border-b border-t border-[#D9D9D91A]"><img className="mx-auto w-[30px]"  src={check} alt="check icon"/></td>
                    <td className="border-r border-b border-t border-[#D9D9D91A]"><img className="mx-auto w-[38px]"  src={close} alt="close icon"/></td>
                  </tr>
            </table>
        </div>
        
          
    </div>
   </section>
    )
}



