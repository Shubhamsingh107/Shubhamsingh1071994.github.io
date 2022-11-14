import React from 'react';
import "./App.css";

export default function Tweet({name,message,wonder}) {
  return (
    <div className='tweet'>
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>{wonder}</h3>
    </div>
  )
}
