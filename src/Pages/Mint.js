/*index.jsx*/
import React from "react";
import { Header, Minter, Collection } from "Pages/components/Mint";

//Functional Component 
const MainPage = () => {
  return (
    <div>
      <Header/>
      <Minter/>
      <Collection/>
    </div>
  );
};

export default MainPage;