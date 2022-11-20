import React from 'react'
import { Link } from 'react-router-dom';
import standingCharacters from "assets/images/standingCharacters.png";


const Welcome = () => {
    return (
        <div  className="text-white flex flex-1 items-center justify-center md:flex-row flex-col w-[75vw] m-auto ">
            
            <div className="container flex md:flex-row flex-col gap-12 md:py-8 py-4 w-full justify-between items-center">
                <div className="md:text-left text-center flex flex-1 min-w-[50%] flex-col justify-center gap-4 md:items-start items-center my-2">
                    <h1 className=" md:text-6xl monumentended-black text-3xl">Your gate to metaverse</h1>
                    <p className="md:text-base text-xs monumentended-light my-6">FCT is a limited NFT collection where the nft itself can be played with as you can fight and earn tokens while playing.</p>
                    <Link to="/mint" className="py-4 px-6 bg-[#a700ff] rounded-full hover:bg-white text-[#ffffff] monumentended-regular hover:monumentended-black hover:text-[#a700ff]"> mint now</Link>
                </div>
                <div className="flex flex-1 flex-col max-w-full md:w-[90%] flipImage">
                    <img src={standingCharacters} alt="peacesign.png" />
                </div>
            </div>
            
        </div>
    );
}

export default Welcome;