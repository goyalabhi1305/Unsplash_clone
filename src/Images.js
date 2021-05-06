import React, { useEffect, useState } from 'react'
import axios from 'axios'


const API_KEY = "ZMJmZPc1yC4VwB0jluonDVPAtZE92VwNhX8iOq2eZ2k";
const url_fetch = `https://api.unsplash.com/photos?page=1&client_id=${API_KEY}`;



function Images() {



    const [img, SetImg] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            try {
                const request = await axios.get(url_fetch);
                request.data?.forEach((val) => {

                    const img_url = val.urls.regular
                    SetImg(state=> [...state,img_url])
                })
            }
            catch(e){
                console.log("an err occured. Error: ",e)
            }
    }
    fetchData();
    }, [])
    return (
        <>
            <div className="imgcnt">

                {img?.map((val) => {
                    return (
                <img src={val} alt="" className="img_singl" />
                        
                    )
                    
                })}
            
            </div>
        </>
    )
}

export default Images
