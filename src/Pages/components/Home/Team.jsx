import React from 'react'
import teamImage from 'assets/images/mohamedali.png'

const Team = ()=>{
    return(
        <div id='Team' className='w-[80vw] m-auto min-h-screen flex justify-center items-center'>
            <div className='w-full h-[50%] flex flex-col justify-center items-center'>
                <div className='w-[80] m-auto'>
                    <h1 className='text-center text-3xl md:text-5xl monumentended-black my-20 text-white'>Team</h1>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center md:items-start mb-16 mx-auto'>
                    <div className='flex flex-col justify-center items-center w-[70%] md:w-[20%] my-6 md:mx-8'>
                        <div className='rounded-full overflow-hidden'>
                            <img src={teamImage} alt='team member'/>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center'>
                            <h3 className='text-base md:text-xl monumentended-black text-white mt-10 min-w-[full]'>Mohamed Ali EL Hassouni</h3>
                            <h6 className='text-xs md:text-sm monumentended-regular text-[#b496fc] mt-1 min-w-[full]'>CREATIVE DIRECTOR</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Team