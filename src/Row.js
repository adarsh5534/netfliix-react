import React, { useState, useEffect } from 'react'
import instance from './baseUrl'
import axios from 'axios'
import './Row.css'
function Row({ title, fetchUrl, isLargerow }) {
    const [movies, setmovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/";
    // fn to call  api

    async function getData() {

        const output = await instance.get(fetchUrl)
        // console.log();
        setmovies(output.data.results)
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
// console.log(a);
return (

    <div className='row'>
        <h1>{title}</h1>
        <div className='movies'>
            {
                movies.map(movie => (
                    <img className={`movie ${isLargerow && 'largemovie'}`}
                        src={`${base_url}${isLargerow?movie.poster_path:movie.backdrop_path}`}
                        alt={movie.original_title} />

                ))
              

            }
            </div>
            </div>
)



        }

        
   
        

        export default Row