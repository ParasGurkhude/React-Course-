import React from 'react'
import { useRef, useEffect } from 'react'

export const FocusInput = () => {
    const name = useRef("")


    useEffect(()=> {
        name.current.focus()
    },[])
  return (
    <div>
        <input ref={name} placeholder='Enter Name Here...' type='text' />
    </div>
  )
}

