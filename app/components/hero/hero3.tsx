import Image from "next/image";

export default function Hero3(){
    return(
        <div className="w-screen mt-[50px] mb-14 ">
            <div className="flex flex-col items-center justify-center mb-5 ">
                <h1 className="font-bold text-[32px] md:text-[48px] lg:text-[48px] text-center">
                    Our Achievement
                </h1>
                <p className="text-balance text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                </p>
                {/* text div */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center ">
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl">
                        +200
                    </h1>
                    <p className="mt-2">
                        Courses
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl">
                        50k
                    </h1>
                    <p className="mt-2">
                        Mentors
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl">
                        370K 
                    </h1>
                    <p className="mt-2">
                        Students
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl">
                        100+
                    </h1>
                    <p className="mt-2">
                        Recognition
                    </p>
                </div>
                    
                {/* achievement div */}
            </div>
            {/* top g div */}
        </div>
    )
}