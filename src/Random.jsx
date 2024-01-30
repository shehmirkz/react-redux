import React from 'react'

function Random () {

    let number = Math.random() * 100;



  return (
    <h1>Random Component Number {Math.round(number)}</h1>
  )
};

export default Random;
