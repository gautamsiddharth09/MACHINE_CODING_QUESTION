import './App.css'
import React, { useEffect, useState } from 'react'

function App() {

  const [ posts, setPosts ] = useState([])
  const [ page, setPage ] = useState(1)

  const getAllPosts = async ()=>{
       try{

        const fetchPosts = await fetch("https://randomuser.me/api/?results=500")

        if(!fetchPosts.ok){
          throw new Error("something went wrong")
        }

        const res = await fetchPosts.json()
        console.log("res", res.results)
        setPosts(res.results)
       }catch(error){
        console.error("Error!", error)
       }
  } 
 const limit = 5
const totalPage = Math.ceil(posts.length / limit);

 const skipPerPage = (page - 1) * limit
 const postsPerPage = posts.slice(skipPerPage, skipPerPage + limit )

 console.log("a", postsPerPage)

 const handleclick = ()=>{
    if(page >100 || page < 1){
      return
    }
    setPage(page+1)
 }

  useEffect(()=>{
    getAllPosts()
  },[])


  return (
    <>
    <div className="container">
     {postsPerPage.map((el, i)=>(
       <div className="card" key={i} >
       <h4>Serial No. {skipPerPage + i + 1}</h4>
        <p> Gender : {el.gender} </p>
        <p> Name : {el.name.title} {el.name.first} {el.name.last} </p>
        <p> Email : {el.email} </p>
        <p> Age : {el.registered.age} </p>
        <p> Contact : {el.phone} </p>
      </div>
     ))}

    </div>
   <div>
     
    {Array(totalPage).fill("").map((_,i)=>(
      <button key={i} className='pageBtn' onClick={handleclick} > {i+1}  </button>
    ))}
   </div>
    </>
  )
}

export default App