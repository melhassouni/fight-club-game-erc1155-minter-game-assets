import React, { useState } from "react"
import {NavLink} from 'react-router-dom'
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';


import logo from "assets/images/logo.png";
import {connect} from "redux/blockchain/blockchainAction"


import { FaRegDotCircle, FaRegCircle } from 'react-icons/fa'



var truncate = function (fullStr, strLen) {
    if (fullStr.length <= strLen) return fullStr;

    let separator = '...';

    var sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow/2),
        backChars = Math.floor(charsToShow/2);

    return fullStr.substr(0, frontChars) + 
           separator + 
           fullStr.substr(fullStr.length - backChars);
};



const Header = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain)
    const [accountHash, setButtonText] = useState("Connect wallet");


    


    useEffect(() => {
        if(blockchain.account != null){ setButtonText(truncate(blockchain.account, 12)) }
        else { setButtonText("Connect wallet") }

      }, [blockchain.account] );

      function renderIcon() {
                  if(accountHash === "Connect wallet"){ return <FaRegCircle className=" text-gray-50"/> }
                  else return <FaRegDotCircle className=" text-white"/>
        }

    return(
        <div className=" w-full min-h-[5vh] bg-[#051937]">
            <div className="flex flex-col md:flex-row justify-between items-center w-[70%] min-h-full m-auto p-8 ">
                <NavLink
                    to="/"
                    className="min-w-[10%] pb-10 md:py-0"
                >
                    <img  src={logo}  alt="logo.png" className="w-24 cursor-pointer"/>
                </NavLink>
                <button onClick={   async(e) =>{
                    await dispatch(connect())
                } } className="flex justify-center items-center text-sm md:text-lg py-2 px-4 md:py-4 md:px-8 bg- bg-[#a700ff] text-gray-50 rounded-full monumentended-regular"><span className="pr-4"> { renderIcon() } </span> {accountHash}</button>
            </div>
        </div>
    )
}

export default Header;