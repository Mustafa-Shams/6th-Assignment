import Image from "next/image";

export default function Header(){
    return(
       
                <div className="w-screen hidden h-[54px] px-10 border-b-2 border-black  
                 mb-2 md:flex md:flex-row lg:flex lg:flex-row justify-between items-center gap-8 bg-gray-300  ">
                   <div className="text-[14px] gap-[16px]   font-normal   ">
                   Phone Number: 956 742 455 678 | Email:info@ddsgnr.com
                   </div>
                   <div className=" ">
               <Image 
               src={"/Social Links.png"}
               alt="Social Links"
               width={100}
               height={100}
               />
                   </div>
                </div>
       
               
       
           )
        }
 
