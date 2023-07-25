import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Pokemones = () => {
    const [pokemones, setPokemones]= useState([])
    const [pokemonSelected, setPokeonSelected]= useState("")
    const navigate = useNavigate()
    const url = "https://pokeapi.co/api/v2/pokemon"
    const getPokemon= async()=>{
        const res = await fetch(url)
        const {results} = await res.json();
        setPokemones(results);
    }
    const goToPokemonDetail = async ()=>{
        if(pokemonSelected) navigate(`/pokemones/${pokemonSelected}`)
        else alert ("Debe seleccionar un pokemon")
    }
    useEffect(()=>{
        getPokemon();
    },[])
    return (
    <div className="mt-5 text-center">
        <h1>Selecciona un pokemon</h1>
        <div className='col-5 col-sm-3 col-lg-2 mx-auto'>
            <select 
        value={pokemonSelected}
        className='form-select text-center' 
        onChange={({target})=>setPokeonSelected(target.value)}>
                <option value="" disabeled>Pokemones</option>
                {
                    pokemones.map(({name})=>(
                        <option value={name}>{name}</option>
                    ))
                }
              </select>
                <Button variannt="outline-dark"
                onClick={goToPokemonDetail}
                className='mt-3' style={{width:120}}>
                    Ir a Detalle
                </Button>

        </div>

    </div>
  )
}

export default Pokemones