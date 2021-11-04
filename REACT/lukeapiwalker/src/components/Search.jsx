import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Search = () => {
    const [categories, setCategories] = useState([])
    const history = useHistory(); 


    const [formInfo, setFormInfo] = useState({ 
        id:"",
        category: "people"
    })

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(response=>{
                console.log("logging response-->", response.data)
                let result = Object.keys(response.data) 
                console.log("RESULT IS THIS--->",result)
                setCategories(result)
            })
            .catch(err=>console.log(err))
    },[])


    const changeHandler = (e)=>{
        console.log("changing inputs")
      
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })

    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("submitteed with this info", formInfo )
      
        history.push(`/${formInfo.category}/${formInfo.id}`)


    }

    

    return (
        <div>
            <form onSubmit= {submitHandler} className= "d-flex">
                <div className="form-group">
                    <label htmlFor="">Search For</label>
                    <select onChange = {changeHandler} className="form-control" name="category" id="">
                        {
                           categories.map((cat, i)=>{
                                return(
                                    <option key = {i} value={cat}>{cat}</option>
                                )
                           })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input onChange= {changeHandler} className = "form-control" type="number" name="id" id="" />
                </div>
                <input type="submit" value="Search" className="btn-success btn-sm" />
            </form>
        </div>
    );
};

export default Search;