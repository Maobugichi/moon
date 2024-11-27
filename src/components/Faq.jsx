import fold from "../assets/fold.png"
import add from "../assets/add.svg"
import chev from "../assets/chev.svg"
export default function Faqs() {
    let prev
    function change(e) {
        const cell = document.querySelectorAll(".grow")
     
        e.target.src = chev
       
        cell.forEach(item => {
          
          if (item.parentNode.nextElementSibling.childNodes[0].src == chev) {
              item.classList.add("animate-grow")
              item.classList.toggle("hidden") 
        } 
       })

    }

   

    return(
    <section className={`h-auto min-h-[60vh] lg:min-h-[100vh] grid place-items-center `} style={{background: `url(${fold}) #071624 `}}>
        <div className=" w-[90%] lg:w-[80%] text-center rounded-lg mx-auto h-auto min-h-[464px] flex flex-col gap-8 justify-center   bg-[#0d1c28] pb-4">
            <h3 className="lg:text-3xl text-2xl text-[#e4b40d]">
            FAQs
            </h3>
            <div className="font-raleway border-t border-[#D9D9D91A] w-[95%] mx-auto h-auto min-h-[300px]  flex flex-col justify-evenly ">
            <div className="border-b border-[#D9D9D91A]  p-3 pb-5 flex justify-between items-center w-full mx-auto h-auto min-h-[68px] ">
                <div className="h-auto min-h-[50px] w-[70%] ">
                <p className="text-left text-md lg:text-[18px] text-[#FFFFFF]">How do i get a Referral Code?</p>
                <p className=" mt-3 text-left  text-[0px]  h-0 hidden grow text-[#636970]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolori</p>
                </div>
                <div onClick={change} className="cell w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] bg-[#28333b] rounded-full grid place-items-center">
                <img src={add} alt="plus sign"/>
                </div>
            </div>
    
            <div className=" p-3 pb-5 w-full  border-b border-[#D9D9D91A] mx-auto  h-auto min-h-[68px] flex justify-between items-center">
                <div className="h-auto min-h-[50px] w-[70%]">
                    <p className="text-sm text-left lg:text-lg text-[#FFFFFF] w-[80%] lg:w-full">Do I get rewarded in tokens or ETH when i refer buyers?</p>
                    <p className="mt-3 text-left text-[0px]  h-0 hidden grow text-[#636970]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et doloribus cum dolorem </p>
                </div>
                <div onClick={change} className="cell w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] bg-[#28333b]  rounded-full grid place-items-center">
                    <img src={add} alt="plus sign"/>
                </div>
            </div>
    
            <div className=" p-3 pb-5 w-full mx-auto  h-auto min-h-[68px]  border-b border-[#D9D9D91A] flex justify-between">
                <div className="h-auto min-h-[50px] w-[70%]">
                <p className="text-left text-md lg:text-lg text-[#FFFFFF]">How do i get a Referral Code?</p>
                <p className="mt-3 text-left text-[0px] h-0 hidden grow text-[#636970]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et doloribus </p>
                </div>
                
                <div onClick={change} className="cell w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] bg-[#28333b]  rounded-full grid place-items-center">
                <img src={add} alt="plus sign"/>
                </div>

                
            </div>
            </div>
            
        </div>
    </section>

    )
}