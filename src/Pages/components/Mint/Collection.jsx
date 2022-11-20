import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from 'redux/data/dataActions'




 const notEmpty = (array) =>{
     if(typeof array != undefined && array != null && array.length != null && array.length > 0) return true
     else return false
 }

 






const Collection = () => {


    const getImageUri = async(uri)=> {
        try {
          let response = await fetch(uri);
          let responseJson = await response.json();
          const imageurl = await responseJson.image
          console.log("Image",imageurl)
         } catch(error) {
          console.error(error);
        }
      }





    const dispatch = useDispatch()
    const blockchain = useSelector( (state) => state.blockchain )
    const data = useSelector( (state) => state.data )
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

    console.log(data.allOwnerFighters)
    return(
        <div className="flex flex-col justify-center items-center w-full min-h-[30vh]">
            <div className="w-full">
                <div className="text-center monumentended-black text-3xl text-[#1a2e55] mt-40">Your Nfts Collection</div>
                <div className="w-full my-14 mb-24">
                    <div className="w-[85%] m-auto ">

                        { notEmpty(data.allOwnerFighters)
                            
                            ?
                                <div>
                                        <div className="max-w-[full] m-auto grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-20 grid-flow-row p-8 md:p-16">
                                        {
                                        nfts.map((nft, index) => {
                                        return(
                                            
                                                    <div className="w-full">
                                                        <div key={index} className="bg-gray-100 p-8 shadow-md flex flex-col justify-center items-center overflow-hidden max-w-full">
                                                            <div className="box-content">
                                                                <img className="" src={nft.metadata.image} alt="fighter"/>    
                                                            </div>
                                                            <div className="py-4 flex flex-col justify-start items-start">
                                                                <h1 className="my-2 monumentended-regular text-gray-500 text-[.5rem] md:text-sm">Fighter Name: <span className="mx-2 py-1 px-2 bg-[#1a2e55] rounded-md text-gray-50 inline-block">{nft.metadata.name}</span></h1>
                                                                <h3 className="my-2 monumentended-regular text-gray-500 text-[.5rem] md:text-xs">ID<span className="mx-2 py-1 px-2 bg-[#1a2e55] rounded-md text-gray-50">{nft.id}</span></h3>
                                                                <h3 className="my-2 monumentended-regular text-gray-500 text-[.5rem] md:text-xs">Amount<span className="mx-2 py-1 px-2 bg-[#1a2e55] rounded-md text-gray-50">{nft.amount}</span></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                        )
                                            })
                                        }

                                        
                                        </div>
                                                                        
                                            <div className="flex flex-col w-[45%] md:w-[7%] m-auto my-8">
                                                <Link to="/play" className="bg-[#a694f3] text-white px-4 py-2 rounded-full text-center monumentended-regular text-xs md:text-base">play</Link>
                                            </div>
                                </div>

                            :   <div className="w-[85%] md:w-[50%] h-[10vh] md:min-h-[20vh] m-auto bg-gray-100 p-8 flex justify-center items-center rounded-xl ">
                                    <h3 className="monumentended-regular text-xs md:text-lg text-center">No collection to show</h3>
                                </div>
                        }
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Collection