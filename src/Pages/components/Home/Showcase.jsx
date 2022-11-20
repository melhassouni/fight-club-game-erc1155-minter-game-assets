import React, { useEffect, useState } from 'react'

var baseUri = 'https://gateway.pinata.cloud/ipfs/QmeKrN4aafy3Wqf4zzE1eUSp1WB7429G6gMo1GTPm83e6t/{id}.json'





// const randomMetaData =  metadata[Math.floor(Math.random()*metadata.length)];


const generateId = () => {
    return Math.floor((Math.random() * 9) + 1);
    // if(num < 0.3) return 1;  //probability 0.3
    // else if(num < 0.6) return 2; // probability 0.3
    // else if(num < 0.9) return 3; //probability 0.3
    // else return 4;  //probability 0.1
}



const Showcase = () => {

    const [randomNft, setRandomNft] = useState([])

    const randomMetaData = () =>{
        let x = generateId()
        let newBaseUri = baseUri.replace("{id}",x)
        fetch(newBaseUri)
                    .then((response) =>{ response.json()
                    .then((metadata) => { setRandomNft({id: metadata.id, name: metadata.name, image: metadata.image})
                })}).catch((err) =>{
                    console.log("Error with loadign metadata")
                })
    }

    useEffect(()=>{
        randomMetaData()
    },[])
    
    return (    
        <div id='Showcase' className="w-[80vw] m-auto max-h-screen">
            <div className="flex flex-col m-auto justify-center self-center items-center min-h-screen">
                <div className="flex justify-center self-center items-center">
                    <h1 className="text-3xl md:text-5xl monumentended-black text-center text-[#e0e0e0] md:my-20 mt-12">Collection Showcase</h1>
                </div>
                <div className='w-[90%] h-full flex gap-20 md:flex-row flex-col my-8'>
                    <div className='md:max-w-[50%] w-full'>
                        <div className='flex justify-center items-center px-8 py-16 bg-[#8e15ff] nft-card'>
                            <div className=''>
                                <div className=''>
                                    <h6 className='text-gray-800 monumentended-regular text-xs'>ID</h6>
                                    <h4 className="text-[#ffffff] monumentended-black text-base">{randomNft.id}</h4>
                                </div>
                                <div className='max-w-[70%]'>
                                    <h6 className='text-gray-800 monumentended-regular text-xs'>name</h6>
                                    <h1 className="text-sm md:text-3xl  text-[#ffffff] monumentended-black">{randomNft.name}</h1>
                                </div>
                            </div>
                            <div className="items-center justify-center md:max-w-[40%] max-w-[50%]">
                                <img src={randomNft.image} alt="nftimage"/>
                            </div>
                        </div>
                    </div>
                    <div className='md:min-w-[50%] w-full text-center md:text-left flex flex-col justify-center'>
                        <h1 className='text-[#a700ff] monumentended-black text-xl md:text-3xl my-2'>Get Started</h1>
                        <p className='md:min-w-[70%] w-full text-[.65rem] md:text-base monumentended-light md:monumentended-regular text-[#ffffff] my-2'>We will launch our Discord server for you to join, discuss and have fun with the community.<br></br>Sneak peak of our variety of fighter with diffrent powers to earn and compete with others investors</p>
                    </div>
                </div>


                
            </div>
            
            
        </div>
        
    );
}

export default Showcase;