import React, { useState, useEffect } from 'react';

function useLike(){
  const [liked, setLiked] = useState(1);
  const onClick = (e)=>{
    setLiked(liked + 1);
  }
  return ({
    liked,
    onClick
  })
}

function useInput(v, fn){
  const [value, setValue] = useState(v);
  
  const onChange =(e)=>{
    let isWillUpdate = true;
    if(typeof fn === 'function'){
      isWillUpdate = fn(value)
    }
    if(isWillUpdate){
      setValue(e.target.value)
    }
  }
  
  return({
    value,
    onChange
  })
}


function App(){
  const like = useLike();
  const maxL = (v) => v.length < 10;
  const name = useInput('Mr.', maxL);
  return(
    <div>
      <div>
        <p>
          <button onClick={like.onClick}>좋아요({like.liked})</button>
        </p>
      </div>
      <div>
        <input type="text" value={name.value} onChange={name.onChange}  />
      </div>
    </div>
  )
}

export default App;
