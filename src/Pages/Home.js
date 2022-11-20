/*Home.jsx*/
import '../index.css'; 
import React from "react";
import {NavBar, Welcome, Showcase, Roadmap, Team, Contact} from "Pages/components/Home/"
//Functional Component 
const MainPage = () => {
  return (
    <div>
      <div className="max-h-screen bg-[#051937]">
        <NavBar />
        <Welcome/>
      </div>
      <div id="Showcase" className='w-full min-h-auto bg-[#051937]' >
        <Showcase />
      </div>
      <div id="Roadmap" className='w-full min-h-auto bg-[#f4e7ff]'>
        <Roadmap />
      </div>
      <div id="Team" className='w-full min-h-auto bg-[#051937]'>
        <Team />
      </div>
      <div className='w-full min-h-auto bg-[#f4e7ff]' >
        <Contact />
      </div>
    </div>

    
  );
};

export default MainPage;