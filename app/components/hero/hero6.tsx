import Image from "next/image";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Hero6(){
    return(
        <div className="w-screen pt-[100px] bg-[#F7F7F7] border-b-2 border-gray-500 pb-[150px] ">
        <div className="flex flex-col items-center justify-center mb-40">
          <h1 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold text-center mb-4">
            Customer Testimonials
          </h1>
          <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* text div */}
        </div>
        {/* top card div */}
            <div className="flex flex-col  md:flex md:flex-row lg:flex lg:flex-row justify-between items-center  w-screen   ">
<div className="flex flex-col items-center justify-between w-[362px] h-[321px] bg-[#F7F7F7] mb-10 md:mb-0 lg:mb-0">
<Card className="border-2 border-black rounded-lg bg-[#F7F7F7]">
  <CardHeader className="mb-6 ">
    <Image src={"/Stars1.png"} alt="star" width={116} height={18} className="pt-5" />
    
  </CardHeader>
  <CardContent className="mb-5">
    <p className="text-balance ">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    </p>
  </CardContent>
  <CardFooter>
    <div className="flex flex-row gap-7">
    <Avatar>
  <AvatarImage src={"/Image12.png"} />
  
</Avatar>
<div className="flex- flex-col">
    <h1 className="font-semibold mb-2">
        James Charles
    </h1>
    <p className="">
        Software Developer
    </p>
</div>

    </div>
  </CardFooter>
</Card>


    {/* 1st card */}
</div>
{/* 2nd card */}
<div className="flex flex-col items-center justify-between w-[362px] h-[321px] bg-[#F7F7F7] mb-10 md:mb-0 lg:mb-0">
<Card className="border-2 border-black rounded-lg bg-[#F7F7F7]">
  <CardHeader className="mb-6 ">
    <Image src={"/Stars1.png"} alt="star" width={116} height={18} className="pt-5" />
    
  </CardHeader>
  <CardContent className="mb-5">
    <p className="text-balance ">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    </p>
  </CardContent>
  <CardFooter>
    <div className="flex flex-row gap-7">
    <Avatar>
  <AvatarImage src={"/Image8.png"} />
  
</Avatar>
<div className="flex- flex-col">
    <h1 className="font-semibold mb-2">
        Harry Potter
    </h1>
    <p>
        Scrum Master
    </p>
</div>

    </div>
  </CardFooter>
</Card>


    {/* 2nd card */}
</div>
{/* 3rd card */}
<div className="flex flex-col items-center justify-between w-[362px] h-[321px] bg-[#F7F7F7] mb-10 md:mb-0 lg:mb-0">
<Card className="border-2 border-black rounded-lg bg-[#F7F7F7]">
  <CardHeader className="mb-6 ">
    <Image src={"/Stars1.png"} alt="star" width={116} height={18} className="pt-5" />
    
  </CardHeader>
  <CardContent className="mb-5">
    <p className="text-balance ">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    </p>
  </CardContent>
  <CardFooter>
    <div className="flex flex-row gap-7">
    <Avatar>
  <AvatarImage src={"/Image10.png"} />
  
</Avatar>
<div className="flex- flex-col">
    <h1 className="font-semibold mb-2">
        Jake Paul
    </h1>
    <p>
        Ux/Ui Designer
    </p>
</div>

    </div>
  </CardFooter>
</Card>


    {/* 3rd card */}
</div>
                {/* top card div */}
            </div>

        {/* top div */}
      </div>
    )
}