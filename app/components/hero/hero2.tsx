import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"

export default function Hero2(){
    return(
        <div className="w-screen flex flex-col  justify-between ">
        <div className="flex flex-col justify-between items-center mb-4">
            <h1 className="text-[32px] md:text-[48px] lg:text-[48px] items-center text-center text-balance font-bold">
                Explore Courses By Categories
            </h1>
            <p className="text-balance text-center">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
            {/* text div */}
        </div>
        {/* top card div */}
        <div className="flex flex-col justify-center ">
            {/* 1 card row */}
            <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row items-center md:space-x-2 lg:space-x-3 lg:justify-between lg:items-center">
                    {/* 1st card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/pen-tool-2.png"} alt="pento0l" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                            Design & Development
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                        {/* 1st card ending */}
                    </div>
                    {/* 2nd card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/volume-high.png"} alt="volumehigh" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                            Marketing
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                      
                        {/* 2nd card ending */}
                    </div>
                    {/* 1st card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/group.png"} alt="pento0l" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                             Development
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                        {/* 3rd card ending */}
                    </div>

                {/* 1st card row div ending */}
            </div>
            {/* 2nd card row div start */}
            <div className="hidden md:flex md:flex-row lg:flex lg:flex-row items-center   md:space-x-2 lg:space-x-3 lg:justify-between lg:items-center">
                    {/* 1st card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/microphone.png"} alt="microphone" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                            Communication
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                        {/* 1st card ending */}
                    </div>
                    {/* 2nd card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/link.png"} alt="link" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                            Digital Marketing
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                      
                        {/* 2nd card ending */}
                    </div>
                    {/* 1st card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/arrow-2.png"} alt="arrow2" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                             Self-Development
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                        {/* 3rd card ending */}
                    </div>

                {/* 2nd card row div ending */}
            </div>
            {/* 3rd card row start */}
            <div className="hidden md:flex md:flex-row lg:flex lg:flex-row items-center mb-4 md:space-x-2 lg:space-x-3 lg:justify-between lg:items-center">
                    {/* 1st card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/briefcase.png"} alt="briefcase" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                            Business
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                        {/* 1st card ending */}
                    </div>
                    {/* 2nd card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/book2.png"} alt="book2" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                            Finance
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                      
                        {/* 2nd card ending */}
                    </div>
                    {/* 1st card */}
                    <div className="w-[416px] h-[132px] rounded-md p-[16px]  bg-[#F7F7F7] flex flex-row mb-3 ">
                        <div className="bg-white p-4 flex w-[100px] justify-center items-center ">
                     <Image src={"/book.png"} alt="book" width={32} height={32}
                      />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 text-center">
                        <h1 className="font-semibold">
                             Consulting
                        </h1>
                        <p>
                            50+ Courses Available
                        </p>
                      </div>
                        {/* 3rd card ending */}
                    </div>

                {/* 3rd card row div ending */}
            </div>
            {/* top card div ending */}
            <div className=" flex justify-center  items-center">
            <Button variant="outline">View All Courses</Button>
        </div>
        </div>
        
        {/* top g div */}
    </div>
    )
}