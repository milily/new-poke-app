import React, { Fragment, useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import NavBar from "./NavBar";
import Grid from '@mui/material/Grid';

const PokeCard = () => {
    const [pokecard, setPokecard] = useState([])

    useEffect(()=>{
        pokeapi()
    },[])

    const pokeapi = async() => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100', {method: 'GET'})
        const apiresponse = await response.json()
        setPokecard(apiresponse.results) 
       
    }
    return(
        <Fragment>
            <NavBar />
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        {
                            pokecard.map((card, index) =>{
                                return(
                                    <Grid item key={index} lg={2} xs={12} md={4} sm={6}>
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