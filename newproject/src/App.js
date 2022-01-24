import React, {useState } from "react";
import axios from 'axios'
import './App.css';

function App() {
 const [search, setSearch] = useState("");
 const [images, setImages] = useState([]);
const CallUnsplashApi= (searchText)=>{
  const url="https://api.unsplash.com/search/photos?client_id=b2UsjXpykp0aKsAu7toQFHbtKSgvkjLx3OlR9MJW700query="+searchText
  axios.get(url).
  then((response)=>setImages(response.data.results)).catch((err)=>console.log(err))
}


const handleSubmit =(e)=>{
   e.preventDefault();
   CallUnsplashApi(search)
}

 const handleChange = (e) =>{
  setSearch(e.target.value);
 }

  return(
    <div className="searchImage">
      <h2>Image Search Engine</h2>
      <form onSubmit={handleSubmit}>
     <input id="text"
      onChange={handleChange}
      placeholder="Ener your text..."/>
     <input type="submit" value="search">Serach</input>
      </form>
      {
                    images.map((item)=>(
                        <img src={item.urls.medium}></img>
                    ))
                }

    </div> 
    
    )
}

export default App;