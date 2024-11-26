import Image from "next/image";

export default function Hero1(){
    return(
        <div className="w-screen flex flex-col md:flex md:flex-row lg:flex lg:flex-row bg-[#F7F7F7] h-[228px] items-center">
            <div>
                <h1 className="text-[18px] md:text-[24px] lg:text-[24px] font-bold text-balance">
                Trusted by 2000+ companies worldwide.
                </h1>
                {/* text div */}
            </div>
            <div>
            <Image src={"/logos.png"} alt="logos" width={1280} height={56} />
            </div>
            {/* top g div */}
        </div>
    )
}