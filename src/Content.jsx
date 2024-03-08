import { useState, useEffect } from "react";

import './index.css'

export default function Content() {
  const [listOfUrl, setListOfUrl] = useState([])
  const [lisOfname, setListOfName] = useState([])
useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function (response) {
  return response.json();
}).then(function (response) {

  setListOfName(response.results)
 // console.log(response.results)
})
},[]);

useEffect(() => {
{lisOfname.map(list => 
  fetch(list.url)
  .then(function (response) {
     return response.json();
   }).then(function (response) {
    //console.log(response)
    listOfUrl.push(response.sprites.back_default)
     
console.log(listOfUrl)
   })
 )}
},[lisOfname, listOfUrl]);







  return (
      <div>
          <center>
             <div>
              {listOfUrl.map((list, i) => 
              <img src={list} key={i} alt="" />
              )}
             </div>
       
              {lisOfname.map(name => 
                  <p key={name.name}>{name.name}</p>
                  )}
          </center>
      </div>
  )
}