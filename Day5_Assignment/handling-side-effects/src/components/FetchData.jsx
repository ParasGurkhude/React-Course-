import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const FetchData = () => {
    let URL = "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1"

    let [data, setData] = useState([])

    function fetchData() {
        axios.get(URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        fetchData()
    },[])

    const card = {
        padding: "30px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        borderRadius: "20px",
        textAlign: "center"
    }

    const container = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: '30px'
    }
  return (
    <div style={container}>
        {
            data.map((ele,i) => (
                <div style={card} key={i}>
                    <h2>Id : {ele.id}</h2>
                    <h1>Title : {ele.title}</h1>
                    <h2>Body : {ele.body}</h2>
                </div>
            ))
        }
    </div>
  )
}
