import dollar from "../assets/Dollar.svg"
import shield from "../assets/shield.svg"
import phone from "../assets/phone.svg"
import buzz from "../assets/buzz.svg"

export default function Features() {
    return(
      <section className="w-full h-auto min-h-[180vh] lg:min-h-[80vh] bg-[#071624]">
        <div className="w-[90%]  mx-auto flex flex-col gap-10">
            <h2 className="text-2xl lg:text-[45px] text-center text-[#e4b40d]"><span className="text-[white]">Our</span> Features</h2>
            <div className="flex lg:flex-row flex-col items-center gap-6">
                <div className=" flex flex-col gap-5 bg-[#101d29] border-2 border-[#FFFFFF0D] w-[95%]  xl:w-[25%] h-[281px] rounded-lg p-5">
                    <div className="h-[68px] w-[68px] grid place-items-center  bg-[#212f3a] rounded-full">
                        <img src={dollar} alt="dollar sign"/>
                    </div>
                    <h3 className="font-raleway text-[20px] text-[#ECF1F0]">Cheapest Txs</h3>
                    <p className="font-roboto text-[16px] text-[#B6B6B6]">Exchange popular digital currencies at the cheapest possible transaction price</p>
                </div>

                <div className="flex flex-col gap-5 bg-[#101d29] border-2 border-[#FFFFFF0D] w-[95%] xl:w-[25%] h-[281px]   rounded-lg p-5">
                    <div className="h-[68px] w-[68px] grid place-items-center bg-[#212f3a] rounded-full">
                        <img src={shield} alt="shield check"/>
                    </div>
                    <h3 className="font-raleway text-[20px] text-[#ECF1F0]">CerTik</h3>
                    <p  className="font-roboto text-[16px] text-[#B6B6B6]">We are Audited by Certik. Certik is the leading security-focused ranking platform</p>
                </div>

                <div className="flex flex-col gap-5 bg-[#101d29] border-2 border-[#FFFFFF0D] w-[95%] xl:w-[25%] h-[281px]  rounded-lg p-5">
                    <div className="h-[68px] grid place-items-center w-[68px] bg-[#212f3a] rounded-full">
                        <img src={phone} alt="no phone sign"/>
                    </div>
                    
                    <h3 className="font-raleway text-[20px] text-[#ECF1F0]">No Contract Sells</h3>
                    <p  className="font-roboto text-[16px] text-[#B6B6B6]">No contract sells to fund the marketing wallets</p>
                </div>

                <div className="flex flex-col gap-5 bg-[#101d29] border-2 border-[#FFFFFF0D] w-[95%] xl:w-[25%] h-[281px] rounded-lg p-5">
                    <div className="h-[68px] w-[68px] grid place-items-center bg-[#212f3a] rounded-full">
                        <img src={buzz} alt=""/>
                    </div>
                    <h3 className="font-raleway text-[20px] text-[#ECF1F0]">CrossDex Support</h3>
                    <p className="font-roboto text-[16px] text-[#B6B6B6]">Exchange popular digital currencies at the cheapest possible transaction price</p>
                </div>
            </div>
        </div>
      </section>
    )
}