/*index.jsx*/
import React from "react";
import logo from "assets/images/logo.png"
//Functional Component 
const NotFoundPage = () => {
  return (
    <div className="flex justify-center	h-[100vh] items-center m-auto">
      <h3 className="text-black-500  text-3xl">404</h3>
      <img src={logo}  alt=""/>
    </div>
  );
};

export default NotFoundPage;