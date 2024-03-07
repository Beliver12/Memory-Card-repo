import { useState, useEffect } from "react";


export default function Content() {
  const [listOfUrl, setListOfUrl] = useState([])
  const [lisOfname, setListOfName] = useState([])
  const listOfSrc = [];
useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function (response) {
  return response.json();
}).then(function (response) {

  setListOfName(response.results)
 console.log(response.results)
})
},[]);

useEffect(() => {
{lisOfname.map(list => 
  fetch(list.url)
  .then(function (response) {
     return response.json();
   }).then(function (response) {
    //console.log(response)
    setListOfUrl(response.sprites.back_default)
console.log(listOfUrl)
   })
 )}
},[lisOfname]);


      


  return (
      <div>
          <center>
     
          <img src={listOfUrl}   alt="" />
        
          
         
              {lisOfname.map(name => 
                  <p key={name.name}>{name.name}</p>
                  )}
          </center>
      </div>
  )
}