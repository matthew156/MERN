import React, {useState} from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
const Search = () => {
const [type, setTypes] = useState("people")
const [stuff, allStuff] = useState()
const Submit = (e)=>{
e.preventDefault();
}
const getPeopleInfo = () => {
axios.get('https://swapi.dev/api/')
.then(response=>{
  console.log("response is =========>", response.data);
  setTypes(response.data);
})
}
return(
  <>
  <h1>TEST</h1>
  <button onClick={getPeopleInfo}>TEST ME</button>
  <div>
  <form onSubmit={Submit}>  
  <label>Search for... </label>
  <select id="type" onChange={(e)=>setTypes(e.target.value)} value={type}>
  <option value="people">People</option>
  <option value="planets">Planets</option>
  <option value="starships">Starships</option>
  <option value="films">Films</option>
  </select>
  <input type="number" name="id" placeholder="choose a number" onChange={e=>allStuff(e.target.value)}/>
  </form>
  </div>

 
  </>
)



};

export default Search;