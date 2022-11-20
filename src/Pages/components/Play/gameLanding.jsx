import React from "react";
import { useDispatch } from "react-redux";
import {connect} from "redux/blockchain/blockchainAction"
import { fetchData } from "redux/data/dataActions";
const GameLanding = () =>{

    const dispatch = useDispatch();


    return(
    <div className="w-full h-screen">
        <div className="flex flex-col justify-center items-center bg-image-game h-full">
            <h1 className='text-white text-5xl monumentended-black my-10'>Play Now</h1>
            <button className='py-5 px-8 bg-[#a700ff] rounded-full monumentended-black text-white text-base tracking-widest'
            
            onClick={ async(e) =>{
                    await dispatch(connect())
                    await dispatch(fetchData())
                } }>Connect wallet</button>
        </div>
    </div>
    )
}

export default GameLanding;