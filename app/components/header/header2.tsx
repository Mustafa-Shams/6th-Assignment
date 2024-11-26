import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
   
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  



export default function Header2(){
    return(
        <div className="w-screen h-[72px] bg-[#F7F7F7] justify-between items-center flex flex-row">
            <div className="justify-center items-center  ">
            <Image  className=""
            src={"/Ddsgnr Library.png"}
            alt="Ddsgnr logo"
            width={130}
            height={41}
            />
            </div>
        <div className="hidden lg:flex bg-white justify-center items-center ">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">Courses</Button>
        <Button variant="ghost">Services</Button>
        <Button variant="ghost">Achivement</Button>
        <Button variant="ghost">About Us</Button>
        <Button variant="ghost">Testimonials</Button>
        <Button  variant="secondary" className="bg-white text-black">Login</Button>
        <Button >Sign Up</Button>   
            {/* menubar */}
        </div>
        <div className="lg:hidden">
        <DropdownMenu>
  <DropdownMenuTrigger><Image src={"/Menu.png"} alt="menu" width={24} height={24}
  /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel><Button variant="ghost">Home</Button></DropdownMenuLabel>
    <DropdownMenuItem><Button variant="ghost">Courses</Button></DropdownMenuItem>
    <DropdownMenuItem><Button variant="ghost">Services</Button></DropdownMenuItem>
    <DropdownMenuItem><Button variant="ghost">About Us</Button></DropdownMenuItem>
    <DropdownMenuItem><Button variant="ghost">Testimonials</Button></DropdownMenuItem>
    <DropdownMenuItem><Button  variant="secondary" className="bg-white text-black">Login</Button></DropdownMenuItem>
    <DropdownMenuItem><Button >Sign Up</Button>   </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
        {/* top g div */}
        </div>
    )
}
