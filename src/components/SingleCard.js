import React, { Fragment, useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";

const SingleCard = ({pokename, pokeurl}) => {

    const [pokeInfo, setPokeInfo] = useState([])

    useEffect(() => {
        singlePokeInfo()
    },[])

    const singlePokeInfo = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
            .then((response) => {
                console.log(response.data)
                const apiresponse = response.data
                setPokeInfo(apiresponse)
        })
    }

    return(
        <Fragment>
            <Card >
                <CardMedia
                    component="img"
                    image={pokeInfo.sprites.other.home.front_default}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pokename}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {pokeurl}
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default SingleCard