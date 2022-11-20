import React from 'react'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'

import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { Link, animateScroll as scroll } from "react-scroll";



import logo from "assets/images/logo.png";


const goToHome = () => {
    scroll.scrollToTop();
}







const NavbarItem =({title,classProps, onClick}) => {
    return (
        <li className={`mx-4 curso-pointer ${classProps}`} >
            <Link
                activeClass="active"
                to={title}
                spy={true}
                smooth={true}
                onClick={onClick}
                duration={500}
            >
                {title}
            </Link>
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (

        <nav id="Home" className=" px-8 py-6 w-full flex md:justify-center justify-between items-center">
            <div className="md:flex-[0.5] flex-initial md:justify-center justify-between items-center">
                <img src={logo} alt="logo.png" className="w-24 cursor-pointer" onClick={goToHome}/>
            </div>
            <ul className="text-white text-xs text-monumentext-regular md:flex hidden list-none flex-row justify-between cursor-pointer items-center flex-initial monumentended-light">
                {["Home","Showcase","Roadmap","Team","Contact"].map( (item, index) => (
                    <NavbarItem to={item} key={item + index} title={item}/>
                )) }
                <NavLink
                    className="text-gray-800 flex bg-[#f4f6fd] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#a700ff] hover:text-white monumentended-regular"
                    to="/play"
                >
                    PLAY
                </NavLink>
                {/* <li className="text-gray-800 flex bg-[#f4f6fd] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f1daff]">
                    PLAY
                </li>   */}

            </ul>     
            
            <div className="flex relative">
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer"  onClick={()=>setToggleMenu(false)}/> 
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer"  onClick={()=>setToggleMenu(true)}/>}

                {toggleMenu &&(
                            <ul
                                className="z-10 fixed top-0 right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                                flex flex-col justify-around items-center bg-[#6b2ff8] text-white monumentended-light animate-slide-in "
                            >
                                <div className='h-[70%] flex flex-col justify-between items-center'>
                                <li className="text-xl w-[75%] relative -top-1 flex flex-row-reverse my-2">
                                    <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                                </li>
                                {["Home","Showcase","Roadmap","Team","Contact"].map( (item, index) => (
                                <NavbarItem to={item} key={item + index} title={item} classProps="text-white text-xs monumentended-light my-2 md:text-lg text-center" onClick={() => setToggleMenu(false)}/>
                                )) }
                                </div>
                            </ul>
                
                    
                )}
            </div>

        </nav>

        );
}

export default Navbar;