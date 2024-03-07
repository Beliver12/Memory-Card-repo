

import './Header.css'
//import React, { useEffect, useState } from "react";



export default function Header() {
  

  return (
    <div className='Header'>
      <h1>Memory-Card-Game</h1>
      <div className='ScoreBoard'>
        <h3>Score:</h3>
        <h3>Best-Score:</h3>
      </div>
    </div>
  );
}
