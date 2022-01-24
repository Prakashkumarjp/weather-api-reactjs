import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const SearchHooks=()=>{
    const [search,setSearch]=useState("")
    const [images,setImages]=useState([])
    const callUnsplashAPI=(searchText)=>{
        const url="https://api.openweathermap.org/data/2.5/weather?q=vellore&appid=736ea5ec4c39c863899d7194f258c657"+searchText
        axios.get(url).
        then((response)=>setImages(response.data.results)).catch((err)=>console.log(err))
    }
   const handleSubmit=(event)=>{
        event.preventDefault()
        callUnsplashAPI(search)
    }
    const handleChange=(event)=>{
        setSearch(event.target.value)
    }
    return(
                <div>
        <div>
                <h3> Your Image search engine</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='enter the search text' 
                    onChange={handleChange}></input>
                    <input type="submit" value="search"></input>
                </form>
              
            </div>
            <div className='output'>
            { images.map((item)=>(
                      <img src={item.urls.medium}></img>
                  ))
              }
            </div>
            </div>
    )
}
export default SearchHooks