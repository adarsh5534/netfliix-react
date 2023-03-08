import React, { useState, useEffect} from 'react'
import instance from './baseUrl'
import './banner.css'
function Banner({fetchUrl}) {
    const [movies, setmovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";
    // fn to call  api

    async function getData() {

        const output = await instance.get(fetchUrl)
        // console.log();
        setmovies(output.data.results[
Math.floor(Math.random()*output.data.results.length-1)        ])
    }
    //


//
useEffect(() => {
    getData()
    // 

    //
}, []

)
// console.log(movies);
function turncate(str, n){
    return str?.length>n?str.substr(0,n-1)+". . .":str
}
  return (
    <div className='banner'
    style={{
        backgroundImage:`url(${base_url}${movies?.backdrop_path})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
      
    }}
    >
        <div className='bannercontent'>
        <h1 className='title'>{movies?.name}</h1>
        <h4 className='overview'>{ turncate(movies?.overview,150)}</h4>
        </div>
    
    </div>
  )
}

export default Banner