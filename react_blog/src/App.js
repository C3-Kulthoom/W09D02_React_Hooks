import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
function App() {
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result)=>{
      setPosts([...posts,...result.data])
    })
    },[])
  const [posts, setPosts] = useState([{userId: 8,id:110  , title: "commeting" , body:"i love commints"},{userId: 6,id: 120  , title: "flying" , body:"i love to fly "}]);
 const [userId , setUserId] =  useState("")
 const [id , setId] =  useState("")
 const [title , setTitle] =  useState("")
 const [body , setBody] =  useState("")

  return (

    <>
    <div className="App">
     <h1>Blog App </h1>
    </div>

    <div className="App">
     {
       posts.map((e,i)=>{
         return (<div>
           <h1 key={i}>{e.title} <p key={i} >
           {e.body} </p></h1>
         </div>)
       })
     }
    </div>
    <div className="App">

    <input type=
    'text'  placeholder=" insert userId" onChange={(e)=>{setUserId(e.target.value)}}></input>
    <input type=
    'text'  placeholder=" insert id" onChange={(e)=>{setId(e.target.value)}} ></input>
    <input type=
    'text'  placeholder=" insert title" onChange={(e)=>{setTitle(e.target.value)}} ></input>
    <input type=
    'text'  placeholder=" insert body" onChange={(e)=>{setBody(e.target.value)}} ></input>
    <button  onClick={(e)=>{setPosts([...posts,{userId:userId, id:id , title:title , body:body }])}}> ADD </button>
    </div>



    </>
  );
}

export default App;
