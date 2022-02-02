import React, { Fragment, useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import NavBar from "./NavBar";
import Grid from '@mui/material/Grid';
import pokeball from '../assets/pokeball.png'

const PokeCard = () => {
    const [pokecard, setPokecard] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(()=>{
        pokeapi()
    },[])

    const pokeapi = async() => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100', {method: 'GET'})
        const apiresponse = await response.json()
        setPokecard(apiresponse.results)
        setIsLoading(false)
    }

    if(isLoading){
        return(
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item lg={2} >
                    <img
                        sx={{ alignItems: 'center' }}
                        width={'200'}
                        src={pokeball}
                        alt={'pokemon logo'}
                        className="pokeball"
                    />
                </Grid>
            </Grid>
        )
    }

    return(
        <Fragment>
            <Grid container sx={{ justifyContent: 'center' }}>
                <NavBar />
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        {
                            pokecard.map((card, index) =>{
                                return(
                                    <Grid style={{marginTop: 40}} item key={index} lg={2} xs={12} md={4} sm={6}>
                                        <SingleCard
                                            container
                                            uniqueKey={index} 
                                            pokename={card.name}
                                            pokeurl={card.url}>
                                        </SingleCard>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default PokeCard;