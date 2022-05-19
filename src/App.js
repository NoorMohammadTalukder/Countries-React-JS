import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';


function App() {
    return ( <
        div className = "App" > { /* <LoadCountries></LoadCountries> */ } <
        Countries > < /Countries> <
        /div>
    );
}

// function LoadCountries(){
//   const[countries,setCountries]=useState([]);

//   useEffect(()=>{
//     fetch("https://restcountries.com/v3.1/all")
//     .then(res=>res.json())
//     // .then(data=>console.log(data))
//     .then(data=>setCountries(data))
//   },[])
//   return(
//     <div>
//       <h1>All Countries Of the World !!!</h1>
//       <h3>Total Countries:{countries.length}</h3>
//       {/* {countries.map(country=><p>{country.name.common}</p>)} */}
//       {countries.map(country=><Country name={country.name.common} population={country.population}></Country>)}
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h3>Name:{props.name}</h3>
//       <h6>Population:{props.population}</h6>
//     </div>
//   )
// }
export default App;