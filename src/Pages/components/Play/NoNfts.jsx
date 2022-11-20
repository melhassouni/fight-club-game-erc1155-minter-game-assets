import React from "react";
import { Link } from "react-router-dom";



const NoNfts = () => {
    return(
        <div className="w-full h-screen bg-[#051937]">
            <div className="flex flex-col justify-center items-center max-w-[60%] h-full m-auto">
                <h1 className="text-white text-2xl monumentended-black text-center my-8">Oops! it seems like you own no Fight-Club NFT; Please mint your fighter before you can join the game.</h1>
                <Link to="/mint" className="py-4 px-8 bg-[#a700ff] text-white text-base monumentended-regular"> go to mint page</Link>
            </div>
        </div>
    )
} 

export default NoNfts