import './index.css'; 
// import './assets/main.css'
// import './assets/tailwind.css'

import 'animate.css';


import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate  
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home.js";
import Mint from "./Pages/Mint.js";
import NotFoundPage from "./Pages/NotFoundPage.js";
import Play from "./Pages/play.js";


import Swal from 'sweetalert2'


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

function App() {
  

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain)
  console.table(blockchain);


  useEffect(()=>{
    console.log("app >>",blockchain)
    if(blockchain.loading === false && blockchain.errorMsg !== ''){
        notify(blockchain.errorMsg)
    }

    
}, [blockchain])


  return (
    <Router>
      <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mint" element={<Mint />} />
          <Route exact path="/play" element={<Play />} />          
          <Route exact path="/404" element={<NotFoundPage />} />
          <Route element={<Navigate replace to="/404" />} />
      </Routes>

    </Router>

  );
}

export default App;
