import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
export default function Hero5(){
    return(
        <div className="w-screen bg-[#F7F7F7] pb-[50px]">
                <div className="flex flex-col justify-center items-center pt-40 mb-28">
                    <h1 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold mb-5">
                        Our Team
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                    {/* text-div */}
                </div>
                {/* team div  */}
                <div className="flex flex-col md:flex md:flex-row lg:flex g:flex-row items-center  justify-between ">
                     {/* 1st col */}
                     <div className="md:flex md:flex-col lg:flex lg:flex-col items-center justify-center ">
                        <div className="flex flex-col items-center justify-center mb-10 md:mb-28 lg:mb-28">
                            <Image src={"/Image8.png"} alt="image" width={80} height={80} className="mb-5"/>
                            <h1 className="font-semibold text-[20px] text-center mb-3">James Ndudku</h1>
                            <p className="text-center mb-6">
                                Marketing Coordinator
                            </p>
                            <Image src={"/Social Icons.png"} alt="socialicons" width={100} height={24} />
                        </div>
                        <div className="md:flex md:flex-col lg:flex lg:flex-col items-center justify-center hidden">
                            <Image src={"/Image11.png"} alt="image" width={80} height={80} className="mb-6" /> 
                            <h1 className="text-[20px] font-semibold text-center mb-3">
                                Erick Kipkembol
                            </h1>
                                <p className="text-center mb-6">
                                    Web Designer
                                </p>
                                <Image src={"/Social Icons.png"} alt="socialicons" width={100} height={24} />
                        </div>
                        </div>
                        {/* 2nd col */}
                        <div className="md:flex md:flex-col lg:flex lg:flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center mb-10 md:mb-28 lg:mb-28">
                            <Image src={"/Image9.png"} alt="image" width={80} height={80} className="mb-5"/>
                            <h1 className="font-semibold text-[20px] text-center mb-3">Joseph Munyambu</h1>
                            <p className="text-center mb-6">
                                Nursing Assitant
                            </p>
                            <Image src={"/Social Icons.png"} alt="socialicons" width={100} height={24} />
                            </div>
                            <div className="md:flex md:flex-col lg:flex lg:flex-col items-center justify-center hidden">
                            <Image src={"/Image12.png"} alt="image" width={80} height={80} className="mb-6" /> 
                            <h1 className="text-[20px] font-semibold text-center mb-3">
                                    Stephen Kerobo
                            </h1>
                                <p className="text-center mb-6">
                                    President Of Sales
                                </p>
                                <Image src={"/Social Icons.png"} alt="socialicons" width={100} height={24} />
                            </div>
                        </div>
                        {/* 3rd col */}
                        <div className="md:flex md:flex-col lg:flex lg:flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center mb-6 md:mb-28 lg:mb-28">
                            <Image src={"/Image10.png"} alt="image" width={80} height={80} className="mb-5"/>
                            <h1 className="font-semibold text-[20px] text-center mb-3">Joseph Ngumbau</h1>
                            <p className="text-center mb-6">
                                Medical Assitant
                            </p>
                            <Image src={"/Social Icons.png"} alt="socialicons" width={100} height={24} />
                            </div>
                            <div className="md:hidden lg:hidden items-center justify-center">
                                <Button variant="outline">
                                        View All Members
                                </Button>
                            </div>
                            <div className="md:flex md:flex-col lg:flex lg:flex-col items-center justify-center hidden">
                            <Image src={"/Image13.png"} alt="image" width={80} height={80} className="mb-6" /> 
                            <h1 className="text-[20px] font-semibold text-center mb-3">
                                    Joohn Leboo
                            </h1>
                                <p className="text-center mb-6">
                                    Dog Trainer 
                                </p>
                                <Image src={"/Social Icons.png"} alt="socialicons" width={100} height={24} />
                            </div>
                        </div>
                    {/* team div ending */}
                </div>
            {/* top div */}
        </div>
    )
}