import { useState, useEffect } from "react";

import './index.css'
import './content.css'
export default function Content() {
 const [listOfSrc, setListOfSrc] = useState([])
  const [lisOfname, setListOfName] = useState([])

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [listOfIds, setListOfIds] = useState([])
  const currentImgId = [];

  const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
   }


   
useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function (response) {
  return response.json();
}).then(function (response) {

  setListOfName(response.results)
 // console.log(response.results)
})
},[]);


const listOfUrl = lisOfname.map(list => 
  fetch(list.url)
  .then(function (response) {
     return response.json();
   }).then(function (response) {

    return response
    
   })
 )
 useEffect(() => {
 Promise.all(listOfUrl).then(function(res) { 
  if(listOfSrc.length < 1) {
  setListOfSrc(res)
  }
})
},[listOfUrl]);

function handleClick() {
  const shuffledList = [...listOfSrc]
  shuffle(shuffledList)
  setListOfSrc(shuffledList)
  setScore(score + 1)
  setListOfIds([...listOfIds, {id: currentImgId[0]}])
  if(listOfIds.length > 0) {
    for(let i = 0; i < listOfIds.length; i++){
 if(listOfIds[i].id.includes(currentImgId[0]) && score > bestScore) {
  setBestScore(score)
  setScore(0)
  setListOfIds([])
 } else if(listOfIds[i].id.includes(currentImgId[0]) && score < bestScore) {
  setScore(0)
  setListOfIds([])
 }
} } 

}

  return (
    <div>
      <div className='Header'>
        <h1>Memory-Card-Game</h1>
        <h3 className="description">Get points by clicking on an image but don&apos;t click on any more than once!</h3>
        <div className='ScoreBoard'>
          <h3>Score:{score}</h3>
          <h3>Best-Score:{bestScore}</h3>
        </div>
      </div>
            <center className="img-container">
      
                 {listOfSrc.map(list =>
                 <div key={list.id} className="img-wrapper"
                 onClick={handleClick}>
                  <img 
                  onClick={(e) => currentImgId.push(e.target.id)} 
                  src={list.sprites.back_shiny} id={list.id}
                   key={list.id} alt="" />
                  {list.name}
                  
                  </div>
                  )}
      
            </center>
    </div>
     
  )
}