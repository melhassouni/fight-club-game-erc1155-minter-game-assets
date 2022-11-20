import React  from "react";

const Roadmap = () => {
    return(
        <div id='Roadmap'  className="flex flex-col justify-center items-center w-[80%] m-auto min-h-screen">
            <div className="w-ful h-full my-20">

                <div className="flex justify-center items-center monumentended-black md:text-5xl text-2xl">
                    <h1 className="mt-4 mb-16">Roadmap</h1>
                </div>
                <div className="my-8 w-full grid md:grid-flow-col grid-flow-row md:grid-cols-3 justify-center items-center md:gap-16 gap-20">
                    <div className="flex flex-1 flex-col justify-center items-center text-center py-20 px-4  bg-[#0f193a]  rounded-2xl">
                        <h1 className="relative monumentended-regular text-[#a700ff] p-4 bg-[#f4e7ff] my-4 rounded-full"><span className="-z-1 bg-[#a700ff] top-0 left-0 absolute h-full w-full rounded-full animate-ping"></span>Q1</h1>
                        <p className="max-w-[80%] my-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center py-20 px-4 bg-[#f4e7ff] rounded-3xl drop-shadow-[0_0_13px_rgba(0,0,0,0.09)]">
                        <h1 className="relative text-white monumentended-regular p-4 bg-[#a700ff] my-4 rounded-full "><span className="-z-1 bg-[#e6b7ff] top-0 left-0 absolute h-full w-full rounded-full animate-ping"></span>Q2</h1>
                        <p className="max-w-[80%] my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-center text-center py-20 px-4  bg-[#0f193a] rounded-2xl">
                        <h1 className="relative monumentended-regular text-[#a700ff] p-4 bg-[#f4e7ff] my-4 rounded-full"><span className="-z-1 bg-[#a700ff] top-0 left-0 absolute h-full w-full rounded-full animate-ping"></span>Q3</h1>
                        <p className="max-w-[80%] my-6 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default  Roadmap;