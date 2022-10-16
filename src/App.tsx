import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';
import { AnimatedHamburger, Item } from './shared/AnimatedHamburger';
import axios, { Axios } from 'axios';
import { HomePage } from './pages/home/HomePage';
import {  CatalogPage } from './pages/catalog/CatalogPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactsPage } from './pages/contacts/ContactsPage';


interface User {
  name: string;
}

// non si puo usare let counter1;

/* let counter2:any;
let counter3 = 123; //inferenza = capacità di dedurre il tipo
let user:User | null = {name:"franco"}

function getName2(prop:string){
  return "your name is " + prop

}
//sono equivalenti
const getName3 = (prop?:string) => {
  


  return `your name is ${prop || "not set"}`;
} */
/*  */

function App() {
  const [items,setItems] = useState<Item[]>([]);

useEffect(()=> {
  axios.get<Item[]>('http://localhost:3001/config').then(res =>  { setItems(res.data) } );
},[])


  /*   return (
      <div>
        <h1>
            your name is : {user?.name || "paolo"}
  
        </h1>
      </div>
  
    ); */


/*   const items = [
    { icon: "fa fa-cog", url: "http://www.google.it/" },
    { icon: "fa fa-bar-chart", url: "http://www.google.it/" },
    { icon: "fa fa-bar-chart", url: "http://www.google.it/" },
    { icon: "fa fa-bar-chart", url: "http://www.google.it/" },
    { icon: "fa fa-bar-chart", url: "http://www.google.it/" },
    { icon: "fa fa-bar-chart", url: "http://www.google.it/" },


  ]; */

  const goto = (url:string) => {
    /* window.open(url); */
    window.location.href = url;

  }


  return (
    <div>

      <h1> Scerra Fanculo</h1>
      
     

      <h1>Gooey Menu</h1>
      <h2>Using CSS and SVG Filters</h2>
      <h3>By <a href="https://codepen.io/lbebber">Lucas Bebber</a></h3>
      <h4><a href="https://codepen.io/lbebber/pen/LELBEo" target="_blank">Version 1</a> - Version 2 - <a href="https://codepen.io/lbebber/pen/pvwZJp" target="_blank">Version 3</a> - <a href="https://codepen.io/lbebber/pen/rawQKR" target="_blank">Version 4</a></h4>
      <AnimatedHamburger items={items} onIconClick={goto} />
      <BrowserRouter>
      <Routes>
        <Route path="/home"  element={<HomePage/>}>  </Route>
        <Route path="/contacts"  element={<ContactsPage/>}>  </Route>

        <Route path="/catalog"  element={<CatalogPage/>}>  </Route>



        
      </Routes>
    
      </BrowserRouter>




    </div>
  );
}

export default App;
