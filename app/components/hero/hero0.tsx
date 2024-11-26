import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Hero0(){
    return(
        <div className="w-screen justify-center items-center flex flex-col md:flex-row lg:flex-row  ">
            <div className="flex flex-col items-center space-y-5 mb-5 md:mb-0 lg:mb-0">
                <h1 className="text-[40px] md:text-[56px] lg:text-[56px] font-bold text-balance text-center ">
                    Learn New Skills Online With Ease
                </h1>
                <p className="text-balance text-center">
                Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
                <div className="flex flex-row ">
                    <Button variant="outline" className="hidden md:flex lg:flex">Start Learning Now</Button>
                    <Button className="md:hidden lg:hidden">Start Learning Now</Button>
                    <Button className="hidden md:flex lg:flex">Explore Courses</Button>
                    <Button variant="outline" className="md:hidden lg:hidden">Explore Courses Now</Button>
                </div>
                {/* text div */}
            </div>
            <div>
                <Image src={"/Image.jpg"} alt="image" width={767} height={390} />
            </div>
            {/* top g div */}
        </div>
    )
}