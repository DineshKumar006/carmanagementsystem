import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import UpdateCarComponent from "./Components/UpdateCarComponent";
import { Route, Routes } from 'react-router-dom'
import LoginComponent from './Components/LoginComponent';
import ListCarComponent from './Components/ListCarComponent';
//import ViewCarComponent from './Components/ViewCarComponent';
import { useNavigate, useLocation } from 'react-router-dom'
import MainImage from './images/logo.jpeg'

function App() {
  let [showLogin, setShowLogin] = useState(false)
  let [isWrongCredentials, setisWrongCredentials] = useState(false)
  let [isLoggedIn, setisLoggedIn] = useState(false)
  let [showList,setShowList] =  useState(false)
  let navigate = useNavigate()
  let location = useLocation();

  const clickHandler = () => {
    console.log('clicked')
    setShowLogin(true)
  }


  const loginClicked = (username, password) => {

    if (username === 'Mukesh' && password === 'kumar') {
      setisLoggedIn(true)
      setisWrongCredentials(false)
      navigate("/cardetails")

    }
    else {
      setisWrongCredentials(true)

    }
  }

  const logoutHandler = () => {
    setisLoggedIn(false)
    setisWrongCredentials(false)
    navigate("/")
  }

  const renderMainTemplate = () => {
    return (<div style={{ marginTop: 100 }}>
      A car dealership, or car dealer, is a business that sells new or used cars at the retail level, based on a
      dealership contract with an automaker or its sales subsidiary.
      It can also carry a variety of Certified Pre-Owned vehicles.
      It employs automobile salespeople to sell their automotive vehicles. It may also provide maintenance services for cars, and employ automotive technicians to stock and sell spare automobile parts and process warranty claims.
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={MainImage} style={{ width: '50%', height: '50%' }} />
      </div>
    </div>
    )
  }


  const showListHandler=()=>{
    setShowList(true)
  }


  return (
    <React.Fragment>
      <HeaderComponent
        showLogin={clickHandler}
        isLoggedIn={isLoggedIn}
        logoutHandler={logoutHandler}
        showListHandler={showListHandler}
        showList={showList}

      //  isLoggedIn={}
      />
      <div className="container">
        <Routes>
          <Route path='/' exact element={showLogin ? <LoginComponent navigate={navigate} location={location}
            loginClicked={loginClicked}
            isWrongCredentials={isWrongCredentials}
            isLoggedIn={isLoggedIn}

          />

            :
            <React.Fragment>
              {renderMainTemplate()}
            </React.Fragment>

          }

          />
          <Route path="/cardetails" element={<ListCarComponent navigate={navigate} location={location} showList={showList} />} />

          {/* <Route path = "/view-cardetail/:id" exact element = {<ViewCarComponent navigate={navigate} location={location}/>}/> */}
          <Route path="/update-cardetail/:id" exact element={<UpdateCarComponent navigate={navigate} location={location} />} />

        </Routes>
      </div>
      <FooterComponent />
    </React.Fragment>

  );
}

export default App;
