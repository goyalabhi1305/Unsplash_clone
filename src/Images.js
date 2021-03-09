import React, { useEffect, useState } from 'react'
import axios from './axios'

const API_KEY = "ZMJmZPc1yC4VwB0jluonDVPAtZE92VwNhX8iOq2eZ2k";
const url_fetch = `/photos?page=1&client_id=${API_KEY}`;



function Images() {

    // const [img, SetImg] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(url_fetch);
            
    //         SetImg(request.data.results[
                
    //             Math.floor(Math.random() * request.data.results.length - 1)
    //         ]);
    //         return request;
    // }
    // fetchData();
    // }, [])

    
    return (
        <div>
            
        </div>
    )
}

export default Images
