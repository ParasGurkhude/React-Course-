import React, { useEffect, useState } from 'react'

export const Timer = () => {
    let [count, setCount] = useState(0)
    console.log("first")
    useEffect(()=>{
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
          }, 1000);
      
        return () => {
            clearInterval(timer)
        }
    },[])
  return (
    <div>
        <h1>Count : {count} seconds </h1>
    </div>
  )
}
