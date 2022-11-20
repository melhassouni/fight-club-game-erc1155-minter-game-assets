import React from 'react'
import {MdEmail} from 'react-icons/md';
import {FaDiscord} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoYoutube} from 'react-icons/io';


const Contact = () => {
    return (
        <div id='Contact' className="w-[80%] min-h-full m-auto py-20">
            <div className="flex md:flex-row flex-col flex-1 justify-center items-center md:gap-24 gap-16 ">
                    <div className="flex flex-col justify-center md:text-left text-center md:max-w-[30%] max-w-full ">
                        <h1 className="monumentended-black text-5xl mb-8 text-[#a700ff]" >Join Us</h1>
                        <h6 className=" monumentended-regular text-[.7rem] text-gray-900">meet and be one of our multi and creative community, were you can have access and be the first one hearing our latests news and updates.</h6>
                    </div>
                    <div className="flex  md:max-w-[50%] flex-col justify-start items-center w-max ">
                        <div className=" flex justify-center items-center my-2 self-center ">
                            <MdEmail className="fill-[#a700ff] " size="1em" />
                            <p className="ml-2 monumentended-regular text-[.65rem] md:text-sm">fightclubgame@contact.com</p>
                        </div>
                        
                        <div className=" flex flex-1 justify-center items-center my-2">
                            <a className=" mx-4 bg-[#ffffff] rounded-full p-2"  href="#"> <FaDiscord className="fill-[#a700ff]" size="1em" /> </a>
                            <a className=" mx-4 bg-[#ffffff] rounded-full p-2" href="#"> <BsTwitter className="fill-[#a700ff]" size="1em" /> </a>
                            <a className=" mx-4 bg-[#ffffff] rounded-full p-2" href="#"> <FiInstagram className="fill-[#a700ff] stroke-white" size="1em" /> </a>
                            <a className=" mx-4 bg-[#ffffff] rounded-full p-2" href="#"> <IoLogoYoutube className="fill-[#a700ff]" size="1em" /> </a>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Contact;