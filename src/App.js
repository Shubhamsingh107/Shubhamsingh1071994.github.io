import React, { useState } from 'react';
import Tweet from './Tweet';

export default function App() {

const [isRed,setRed] = useState(false);
const [count,setCount] = useState(0);

const Increment=()=>{
  setCount(count+1);
  setRed(!isRed);
}

const[users,setUsers]=useState([
  {name:'Ed',message:'Hello dear welcome'}
  
  ])

  return (
    <div className='app'>
      
      <h1 className={isRed ? 'red' : ""}>Change my color</h1>
      
      {users.map(user=>(<Tweet name={user.name} message={user.message}/>))}
      
      <Tweet name="kachalo" message="bandar" wonder="bander"/>
      <Tweet name="beta" message="ki" wonder="ki"/>
      <Tweet name="kha" message="khopdi" wonder="lat"/>
      <Tweet name="gye" message="pe" wonder="pe"/>
      <Tweet name="the" message="soe" wonder="roe"/>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  )

  }
