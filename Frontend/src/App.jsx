import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products , setProducts] = useState([])
  const [search , setSearch] = useState('')
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(false)
  

  useEffect(()=>{
    
 ;( async function fetchdata(para){
  try {
    setLoading(true)
    setError(false)
    const response = await axios.get('/api/products?search='+ search);
  
    setProducts(response.data)
    console.log(response.data);

    setLoading(false)
    
  } catch (error) {
    setError(true)
    
  }
  
 }

 )()
 
 

  },[search]);


  if(error){
    return <div>{error.messageerror}</div>
  }
  
  if(loading){
    return <div>Loading...</div>
  }


  return (
    <>
     <h1>Api Fetch</h1>
     <h2>No of Products are . {products.length}</h2>
     <input type="text" 
     value={search}
     onChange={(e)=>setSearch(e.target.value)}
     
     />
     
    </>
  )
}

export default App
