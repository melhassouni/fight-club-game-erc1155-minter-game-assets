
import Swal from 'sweetalert2'
import React from "react"
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import fighterPlaceHolder from 'assets/images/fighter.jpg'
import { fetchData } from 'redux/data/dataActions'






const notify = (note)=>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: note,
    confirmButtonText: 'OK',
    confirmButtonColor: '#d74d63',
    backdrop: 'rgba(187, 180, 202, 0.8)',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__slideOutUp'
    }
  }).then((response) =>{
    if(response.isConfirmed){
      window.location.reload()
    }
  })
}


const errorMessageOccured = 'something went wrong. Please, check your Balance of FCT or your network. try refreshing the page and try again.'

const getRevertReason = require('eth-revert-reason')


const generateId = () => {
    return Math.floor((Math.random() * 9) + 1);
    // if(num < 0.3) return 1;  //probability 0.3
    // else if(num < 0.6) return 2; // probability 0.3
    // else if(num < 0.9) return 3; //probability 0.3
    // else return 4;  //probability 0.1
}

function getRPCErrorMessage(err){
    var open = err.stack.indexOf('{')
    var close = err.stack.lastIndexOf('}')
    var j_s = err.stack.substring(open, close + 1);
    var j = JSON.parse(j_s);
    var reason = j.data[Object.keys(j.data)[0]].reason;
    return reason;
}

const Minter = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain)
    const [disabled, setDisability] = useState(true);

    useEffect( () => {
        if(blockchain.account != null) setDisability(false);
    }, [blockchain.account])

    const mint = async(_account) =>{
        let trHash = ''
        const _id = generateId();
        const _amount = 1;
        blockchain.fightclubnft.methods
        .mintCharacter(_account, _id, _amount)
        .send({from: _account})
        .on('transactionHash', async(hash) =>{
            trHash = hash
        }).once("error", async(err) =>{
            dispatch(fetchData(blockchain.account));
            notify(errorMessageOccured)
        }).then((receipt) => {
            dispatch(fetchData(blockchain.account));
        })
    }


    return(
        <div className="flex flex-col w-full min-h-[85vh] justify-center items-center py-10">
                <h1 className="text-2xl md:text-4xl py-20 max-w-[70%] text-center text-[#1a2e55] monumentended-extrablack">Fight Club Game Minter</h1>
                <div className="px-8 drop-shadow-xl hover:drop-shadow-2xl ">
                        <div className="flex flex-col justify-center items-center md:max-w-[45%] min-w-[70%] min-h-full m-auto bg-[#051937] rounded-lg overflow-hidden relative">
                            <div className="overflow-hidden"><img className="object-fill" src={fighterPlaceHolder} alt="fighterImage"/></div>
                            <div className="flex flex-col justify-center items-center py-10">
                                <h1 className="text-lg md:text-xl pb-4 monumentended-regular w-[90%] text-center text-[#ffffff]">Get your fighter</h1>
                                <button
                                    className={"bg-[#a700ff] text-[#ffffff] monumentended-regular py-2 md:px-10 px-9 text-lg tracking-widest md:text-base rounded-md border-white border-2"}
                                    disabled={disabled}
                                    onClick={() => {
                                        mint(blockchain.account)
                                    }}
                                 >mint</button>
                            </div>
                        </div>
                        
                </div>
        </div>
    )
}

export default Minter;