import { useEffect, useState } from "react";

function Pokemon(){
  const [pokemon, setPokemon] = useState(null);
  const id=1;
  useEffect(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data)
    setPokemon(data);
  }, []);


  return (
    <div>
          {pokemon && <div>
            {idFormat(pokemon.id)} <br/>
              Name: {pokemon.name} <br/>
             Types: {pokemon.types[0].type.name},{pokemon.types[1].type.name}
             <img src={pokemon.sprites.front_default} ></img>
          </div> }
    </div>
  )
}


function idFormat(id) {
  return (id.toString().length < 3) ? idFormat("0" + id) : id;
}

export default Pokemon;

/*N.°{idFormat(pokemon.id)} <br/>
          Name: {pokemon.name} <br/>
          Types: {pokemon.types.forEach(e => {
            return <li>{e.type.name}</li>
          })}*/