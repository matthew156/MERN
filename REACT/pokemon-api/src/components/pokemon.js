import React, {useState} from 'react';
import axios from 'axios'
const Pokemon = () => {
    const [allPokemon, setAllPokemon] = useState([])
    const getPokemonInfo = () =>{
        console.log("Getting Pokemon...")
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        // .then((response)=>{
        //     return response.json();
        // }).then(response => {
        //     console.log("response is --->", response)
        //     setAllPokemon(response.results)
        // }).catch(err=>{
        //     console.log(err);
        // })
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{
            console.log("response is --->", response.data)
            setAllPokemon(response.data.results)            
    })
    }        
    return (
       <>
       <div>
            <h3>Pokemon! Got to Catch em all!</h3>
            <button onClick={getPokemonInfo}>Catch em!</button>
        </div>
        {
            allPokemon.map((pokeObj, i)=>{
               return(
                   <div key={i}>
                       <h1>{pokeObj.name}</h1>
                   </div>
               )
            })
         
        }
        </>
        

        
    );
};

export default Pokemon;