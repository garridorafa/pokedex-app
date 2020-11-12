import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: solid 2px;
  display:flex;
  flex-direction: column;
  align-items:center;
  width: 220px;
  padding: 11px;
  background-color:Lavender;
  border-radius: 5px
`
const StyledId = styled.div`
  color:white;
  background-color: black;
  margin: 10px;
  padding: 4px;
  border-radius:22px;
  align-self: end
`
const StyledName = styled.div`
 font-size: 1.6rem;
 text-transform: capitalize;
`
const StyledTypes = styled.ul`
  align-self: start;
  display: flex;
  list-style: none;
  li {
    color: black;
    background-color: #9bcc50;
    margin-right:6px;
    padding: 0px 10px;
    border-radius: 4px;
    text-transform: capitalize;
  }
`

function Pokemon(){
  const [pokemon, setPokemon] = useState(null);
  const id=1;
  useEffect(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
    setPokemon(data);
  }, []);


  return (
    <div>
      {pokemon && 
        <StyledDiv>
          <StyledId>
            N.º{idFormat(pokemon.id)}
          </StyledId>
          <div>
            <img src={pokemon.sprites.front_default} ></img>
          </div>
          <StyledName>
            {pokemon.name}
          </StyledName>
          <StyledTypes>
            <li>
              {pokemon.types[0].type.name}
            </li>
            <li>
              {pokemon.types[1].type.name}
            </li>
          </StyledTypes>
          
        </StyledDiv>}
    </div>
  )
}

function idFormat(id) {
  return (id.toString().length < 3) ? idFormat("0" + id) : id;
}

export default Pokemon;