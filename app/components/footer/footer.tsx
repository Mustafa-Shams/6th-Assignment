import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer(){
    return(
     <div className="w-screen pt-[100px]">
      <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row md:justify-between lg:justify-between mb-16">
          <div className="flex flex-col items-center mb-4 ">
            <h1 className="font-semibold mb-2 text-center">
              Subscribe To Our Newsletter
            </h1>
            <p className="text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {/* text div */}
          </div>
          {/* button div */}
        <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row  items-center">
          <div className="hidden md:flex lg:flex ">
            <div className="flex space-x-4">
              <div className="flex flex-col space-y-3 ">
             <Input type="email" placeholder="Email" />
            <p>
            By subscribing you agree to with our Privacy Policy
            </p>
            </div>
            <Button type="submit" size={"lg"}>Subscribe</Button>
            </div>
             </div>
             <div className="flex flex-col space-y-6 md:hidden lg:hidden">
            <Input type="email" placeholder="Email" />
            <Button type="submit" size={"lg"}>Subscribe</Button>
            <p>
            By subscribing you agree to with our Privacy Policy
            </p>
            </div>
        </div>
        {/* 1st div */}
      </div>

{/* 2nd div */}
      <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-center items-center md:justify-between lg:justify-between pb-[50px] border-b-2 border-gray-500 ">
           <Image src={"/Ddsgnr Library.png"} alt="icon" width={130} height={40} className="mb-6 md:mb-0 lg:mb-0" />
           
              <div className="flex flex-col space-y-6 mb-7 md:mb-0 lg:mb-0">
                <h1 className="font-semibold text-center">
                  Courses
                </h1>
                <Button variant="ghost">Business</Button>
                <Button variant="ghost">Development</Button>
                <Button variant="ghost">Technology</Button>
                <Button variant="ghost">Design</Button>
                <Button variant="ghost">Programming</Button>
              </div>

              <div className="flex flex-col space-y-6 mb-7 md:mb-0 lg:mb-0">
                <h1 className="font-semibold text-center">
                  Resources
                </h1>
                <Button variant="ghost">Career</Button>
                <Button variant="ghost">Resume</Button>
                <Button variant="ghost">Learning</Button>
                <Button variant="ghost">Interview Preparation</Button>
                <Button variant="ghost">Jobs</Button>
              </div>

              <div className="flex flex-col space-y-6 mb-7 md:mb-0 lg:mb-0">
                <h1 className="font-semibold text-center">
                  About Us
                </h1>
                <Button variant="ghost">Contact</Button>
                <Button variant="ghost">Help/Support</Button>
                <Button variant="ghost">FAQ</Button>
                <Button variant="ghost">Terms & Condition</Button>
                <Button variant="ghost">Partners</Button>
              </div>

            {/* 2nd div ending */}
      </div>
      {/* 3rd div  */}
      <div className="flex flex-col pt-12 pb-10 md:flex md:flex-row lg:flex lg:flex-row lg:justify-between md:justify-between items-center justify-center">
          <h1 className="mb-4 md:mb-0 lg:mb-0">
          2024 Ddsgnr. All right reserved.
          </h1>
          <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row items-center gap-6 mb-4 md:mb-0 lg:mb-0">
<h1 className="underline">
Privacy Policy
</h1>
<h1 className="underline">
  Terms of Service
</h1>
<h1 className="underline">
  Cookies settings
</h1>
          </div>
<Image src={"/Social Links.png"} alt="social links" width={132} height={24} />
        {/* 3rd div ending */}
      </div>

          {/* top div */}
     </div>
    )
}