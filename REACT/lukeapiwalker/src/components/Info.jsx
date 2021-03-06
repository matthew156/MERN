import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'

const Info = () => {
    const { id, category } = useParams();
    const [info, setInfo] = useState({})

    useEffect(()=>{
       
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            console.log(response)
            setInfo(response.data)
        })
        .catch(err=> console.log(err))

    }, [id,category]) 
    


    return (
        <div>
            {category == 'people'?
            <> 
                <h1>Showing info about person number: {id}</h1>
                <h1>{info.name}</h1>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
            </>:category =='planets'?
            <>
                <h1>PLanet name: {info.name}</h1>
                <p>Climate: {info.climate}</p>
            </>:<h1>Its some other category</h1>
            
        }

        </div>
    );
};

export default Info;