import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import UpdateCarComponent from "./Components/UpdateCarComponent";



import {Route,Routes} from 'react-router-dom'
import LoginComponent from './Components/LoginComponent';
import ListCarComponent from './Components/ListCarComponent';
//import ViewCarComponent from './Components/ViewCarComponent';
import {useNavigate,useLocation} from 'react-router-dom'
function App() {
  let [showLogin,setShowLogin]=useState(false)
  let [isWrongCredentials,setisWrongCredentials]=useState(false)
  let [isLoggedIn,setisLoggedIn]=useState(false)
  let navigate=useNavigate()
  let location=useLocation();

 const clickHandler=()=>{
   console.log('clicked')
    setShowLogin(true)
  }


const loginClicked = (username,password) => {

    if (username === 'Mukesh' && password === 'kumar') {
          setisLoggedIn(true)
          setisWrongCredentials(false)
          navigate("/cardetails")

    }
    else {
      setisWrongCredentials(true)
 
    }
}

const logoutHandler=()=>{
  setisLoggedIn(false)
  setisWrongCredentials(false)
  navigate("/")
}


  return (
   <React.Fragment>
     <HeaderComponent
     showLogin={clickHandler}
     isLoggedIn={isLoggedIn}
     logoutHandler={logoutHandler}

    //  isLoggedIn={}
     />
                <div className="container">
                  <Routes>
                          <Route path='/' exact element={showLogin?<LoginComponent navigate={navigate} location={location} 
                          loginClicked={loginClicked}
                          isWrongCredentials={isWrongCredentials}
                          isLoggedIn={isLoggedIn}
                          
                          />:<div style={{marginTop:100}}>car makkhsjdcksllcjsbdc hkcjhsjcmkshbc </div>}/>
                          <Route path = "/cardetails"  element = {<ListCarComponent navigate={navigate} location={location}/>}/>
                         
                          {/* <Route path = "/view-cardetail/:id" exact element = {<ViewCarComponent navigate={navigate} location={location}/>}/> */}
                           <Route path = "/update-cardetail/:id" exact element = {<UpdateCarComponent navigate={navigate} location={location}  />}/>
                          
                   </Routes>
                </div>
      <FooterComponent />
   </React.Fragment>
    
  );
}

export default App;
