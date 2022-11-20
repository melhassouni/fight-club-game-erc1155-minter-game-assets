import React, { useState } from "react";

import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GameLanding, NoNfts, Canvas } from "./components/Play";
import { fetchData } from 'redux/data/dataActions'




const notEmpty = (array) =>{
    if(typeof array != undefined && array != null && array.length != null && array.length > 0) return true
    else return false
}



function Play () {

    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)
    const data = useSelector( (state) => state.data )
    const [component, setComponent] = useState(<GameLanding/>)


    const [nfts, setNfts] = useState([])

    const setNftCollection = () => {
        setNfts([])
        data.allOwnerFighters.forEach(nft => {
                fetch(nft.uri)
                .then((response) =>{ response.json()
                .then((metadata) => {
                    setNfts((prevState) => [...prevState, {id: nft.id, amount: nft.amount, metadata: metadata}])
                    console.log("NFTS ARE",nfts)
            })}).catch((err) =>{
                console.log("Error with loadign metadata")
            })
        });
    }
    useEffect(() =>{
        setNftCollection()
    }, [data.allOwnerFighters])


    useEffect(()=> {
        if(blockchain.account != null && blockchain.fightclubnft != null){
            dispatch(fetchData(blockchain.account));
        }
    }, [dispatch, blockchain.fightclubnft, blockchain.account])
    

    useEffect(()=>{
        while(blockchain.loading){
            
        }
        if(blockchain.account){
            let array = data.allOwnerFighters
            if(notEmpty(array)){
                setComponent(<Canvas/>)
            }else setComponent(<NoNfts/>)
        }else{
            return setComponent(<GameLanding/>)
        }
    }, [blockchain.account, blockchain.loading, data.allOwnerFighters])
    


    return component

    
}

export default Play

