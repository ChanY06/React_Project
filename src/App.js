import React, {useState,useEffect,Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Restaurent from "./Components/Restaurent";
import Axios from "axios";
import{BrowserRouter as Router,Route,Switch} from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from "./Layout/Navbar";
import bookpage from './Pages/book';
import cancelbooking from './Pages/cancelbooking';
import updatebooking from './Pages/updatebooking';
import viewbooking from './Pages/viewbooking';
import notfound from './Pages/notfound';


function App() {

  
  const [search,setSearch]= useState("location");

  const [restaurent,setRestaurent]=useState([])

  const onInputChange = (e) => {
    setSearch(e.target.value); 
  };

  
useEffect( () =>{
   getRestaurent();
}, []);


const getRestaurent =async () => {
  const val=search;
  console.log(val);
  const data=await Axios.get(`http://api.localhost:3001/restaurent/${search}`);
  console.log(data);
  setRestaurent(data.data);
}
const onSearchClick= () =>{
  getRestaurent();
};
  return (
    <Router>
    <div className="App">  
    <Navbar />
<Header search={search} onInputChange={onInputChange} 
onSearchClick={onSearchClick}/>

<div className="container-lg">
  <div className="py-4">
<Restaurent restaurent={restaurent} />
    </div>
    </div>
<Switch>
<Route exact path="/" />
 <Route exact path="/About" component={About}/>
  <Route exact path="/Contact" component={Contact}/>
  <Route exact path="/bookpage/:res" component={bookpage}/>
  <Route exact path="/cancelbooking" component={cancelbooking}/>
  <Route exact path="/updatebooking" component={updatebooking}/>
  <Route exact path="/viewbooking"  component={viewbooking}/>
  <Route component={notfound}/>
</Switch>
</div>
</Router>
 
  );
}

export default App;
