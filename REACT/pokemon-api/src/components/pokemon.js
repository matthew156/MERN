import React, {useState} from 'react';
const Pokemon = () => {
    const [allPokemon, setAllPokemon] = useState([])
    const getPokemonInfo = () =>{
        console.log("Getting Pokemon...")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=800")
        .then((response)=>{
            return response.json();
        }).then(response => {
            console.log("response is --->", response)
            setAllPokemon(response.results)
        }).catch(err=>{
            console.log(err);
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