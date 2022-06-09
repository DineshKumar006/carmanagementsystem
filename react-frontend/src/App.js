import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import UpdateCarComponent from "./Components/UpdateCarComponent";



import {Route,Routes} from 'react-router-dom'
import LoginComponent from './Components/LoginComponent';
import ListCarComponent from './Components/ListCarComponent';
import ViewCarComponent from './Components/ViewCarComponent';
import {useNavigate,useLocation} from 'react-router-dom'
function App() {
  let [showLogin,setShowLogin]=useState(false)
  let navigate=useNavigate()
  let location=useLocation();

 const clickHandler=()=>{
    setShowLogin(true)
  }
  return (
   <React.Fragment>
     <HeaderComponent
     showLogin={clickHandler}
     />
                <div className="container" style={{position:"absolute" , top:"10px" , left:"0px" , height:"1000px" , right:"0px" , overflow:"hidden"}}>
                  <Routes>
                          <Route path='/' exact element={showLogin?<LoginComponent navigate={navigate} location={location}/>:<div></div>}/>
                          <Route path = "/cardetails"  element = {<ListCarComponent navigate={navigate} location={location}/>}/>
                         
                          <Route path = "/view-cardetail/:id" exact element = {<ViewCarComponent navigate={navigate} location={location}/>}/>
                           <Route path = "/update-cardetail/:id" exact element = {<UpdateCarComponent navigate={navigate} location={location}  />}/>
                          
                   </Routes>
                </div>
      <FooterComponent />
   </React.Fragment>
    
  );
}

export default App;
