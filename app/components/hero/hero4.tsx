import Image from "next/image";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
   
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button";
export default function Hero4(){
    return(
        <div className="w-screen flex-col mb-[100px]">
            <div className="mb-5">
                <h1 className="text-[32px] md:text-[56px] lg:text-[56px] font-bold mb-3 text-center">
                    Courses
                </h1>
                <p className="text-center mb-4">
                    Your Ultimate Guide To Learning
                </p>
                <div className="flex flex-row justify-center items-center gap-4">
                    <Button variant="ghost">Popular</Button>
                    <Button variant="ghost">Recommended</Button>
                    <Button variant="ghost">Best Price</Button>
                </div>
                {/* text-div */}
            </div>
            {/* top card div */}
            <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center  gap-4 w-full max-w-7xl">
                {/* 1st card row */}
                <div className="w-screen flex flex-col mb-6 gap-[70px]  md:flex md:flex-row lg:flex lg:flex-row ">
                    {/* 1st card */}
                    <div className="w-[416px]  mb-4 md:mb-0 lg:mb-0 flex flex-col rounded-lg   self-center">
                    <div className=" md:mb-6 lg:mb-6">
                    <Card className=" shadow-xl hover:scale-105 transition-transform ">
  <CardHeader>
    <Image src={"/Image2.png"} alt="image" width={416} height={300} className="mb-3" />
    <CardDescription className="mb-3">
        <div className="flex justify-between items-center"> 
            <div className="font-semibold">
               Design 
            </div>
            <Image src={"/Star.png"} alt="star" width={48} height={24} />
        </div>
        </CardDescription>
  </CardHeader>
  <CardContent className="mb-4">
    <h1 className="font-bold text-[24px] mb-2">
        UX/UI Design 201
    </h1>
    <p className="text-balance">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
    </p>
  </CardContent>
  <CardFooter className="flex flex-row gap-5 items-center">
    <div className="flex flex-row justify-between items-center">
        <Button variant="outline">Enroll Now</Button>
       
    </div>
     <h1 className="font-semibold text-[16px]">$400</h1>
  </CardFooter>
</Card>

                        {/* 1st card div ending */}
                    </div>
                    <div className=" hidden md:flex lg:flex ">
                    <Card className=" shadow-xl hover:scale-105 transition-transform ">
  <CardHeader>
    <Image src={"/Image5.png"} alt="image" width={416} height={300} className="mb-3" />
    <CardDescription className="mb-3">
        <div className="flex justify-between items-center"> 
            <div className="font-semibold">
               Art
            </div>
            <Image src={"/Star.png"} alt="star" width={48} height={24} />
        </div>
        </CardDescription>
  </CardHeader>
  <CardContent className="mb-4">
    <h1 className="font-bold text-[24px] mb-2">
        Art Specialization 
    </h1>
    <p className="text-balance">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
    </p>
  </CardContent>
  <CardFooter className="flex flex-row gap-5 items-center">
    <div className="flex flex-row justify-between items-center">
        <Button variant="outline">Enroll Now</Button>
       
    </div>
     <h1 className="font-semibold text-[16px]">$400</h1>
  </CardFooter>
</Card>
</div>
                    </div>
                    {/* 2nd card */}
                    <div className="w-[416px]  mb-4 md:mb-0 lg:mb-0 flex flex-col rounded-lg  md:pt-32 lg:pt-32 self-center">
                    <div className="md:mb-6 lg:mb-6">
                    <Card className="shadow-xl hover:scale-105 transition-transform ">
  <CardHeader>
    <Image src={"/Image3.png"} alt="image" width={416} height={300} className="mb-3" />
    <CardDescription className="mb-3">
        <div className="flex justify-between items-center"> 
            <div className="font-semibold">
               Programming 
            </div>
            <Image src={"/Star.png"} alt="star" width={48} height={24} />
        </div>
        </CardDescription>
  </CardHeader>
  <CardContent className="mb-4">
    <h1 className="font-bold text-[24px] mb-2">
        Introduction To Python
    </h1>
    <p className="text-balance">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
    </p>
  </CardContent>
  <CardFooter className="flex flex-row gap-5 items-center">
    <div className="flex flex-row justify-between items-center">
        <Button variant="outline">Enroll Now</Button>
       
    </div>
     <h1 className="font-semibold text-[16px]">$400</h1>
  </CardFooter>
</Card>

                        {/* 2nd card div ending */}
                    </div>
                    <div className=" hidden md:flex lg:flex ">
                    <Card className=" shadow-xl hover:scale-105 transition-transform ">
  <CardHeader>
    <Image src={"/Image6.png"} alt="image" width={416} height={300} className="mb-3" />
    <CardDescription className="mb-3">
        <div className="flex justify-between items-center"> 
            <div className="font-semibold">
               Law
            </div>
            <Image src={"/Star.png"} alt="star" width={48} height={24} />
        </div>
        </CardDescription>
  </CardHeader>
  <CardContent className="mb-4">
    <h1 className="font-bold text-[24px] mb-2">
        Rule Of Law
    </h1>
    <p className="text-balance">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
    </p>
  </CardContent>
  <CardFooter className="flex flex-row gap-5 items-center">
    <div className="flex flex-row justify-between items-center">
        <Button variant="outline">Enroll Now</Button>
       
    </div>
     <h1 className="font-semibold text-[16px]">$400</h1>
  </CardFooter>
</Card>
</div>
<div className="md:flex md:flex-col lg:flex lg:flex-col justify-center items-center hidden pt-24">
                <Button variant="outline">View All Courses</Button>
             </div>
                    </div>
                    {/* 3rd card div */}
                    <div className="w-[416px]  mb-4 md:mb-0 lg:mb-0 flex flex-col rounded-lg   self-center">
                    <div className="md:mb-6 lg:mb-6 mb-6">
                    <Card className="shadow-xl hover:scale-105 transition-transform ">
  <CardHeader>
    <Image src={"/Image4.png"} alt="image" width={416} height={300} className="mb-3" />
    <CardDescription className="mb-3">
        <div className="flex justify-between items-center"> 
            <div className="font-semibold">
               Business
            </div>
            <Image src={"/Star.png"} alt="star" width={48} height={24} />
        </div>
        </CardDescription>
  </CardHeader>
  <CardContent className="mb-4">
    <h1 className="font-bold text-[24px] mb-2">
        Data Analysis For Beginners
    </h1>
    <p className="text-balance">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
    </p>
  </CardContent>
  <CardFooter className=" flex flex-row gap-5 items-center">
    <div className="flex flex-row justify-between items-center">
        <Button variant="outline">Enroll Now</Button>
       
    </div>
     <h1 className="font-semibold text-[16px]">$400</h1>
  </CardFooter>
</Card>

                        {/* 3rd card div ending */}
                    </div>
                    <div className="flex flex-col justify-center items-center md:hidden lg:hidden ">
                <Button variant="outline">View All Courses</Button>
             </div>
                    <div className=" hidden md:flex lg:flex ">
                    <Card className=" shadow-xl hover:scale-105 transition-transform ">
  <CardHeader>
    <Image src={"/Image7.png"} alt="image" width={416} height={300} className="mb-3" />
    <CardDescription className="mb-3">
        <div className="flex justify-between items-center"> 
            <div className="font-semibold">
                Tech
            </div>
            <Image src={"/Star.png"} alt="star" width={48} height={24} />
        </div>
        </CardDescription>
  </CardHeader>
  <CardContent className="mb-4">
    <h1 className="font-bold text-[24px] mb-2">
        Introduction To Webflow
    </h1>
    <p className="text-balance">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
    </p>
  </CardContent>
  <CardFooter className="flex flex-row gap-5 items-center">
    <div className="flex flex-row justify-between items-center">
        <Button variant="outline">Enroll Now</Button>
       
    </div>
     <h1 className="font-semibold text-[16px]">$400</h1>
  </CardFooter>
</Card>
</div>
                    </div>
                    {/* 1st card row ending */}
                </div>
             
                {/* top card div ending */}
            </div>
            
             
            </div>
            {/* top div */}
        </div>
    )
}
