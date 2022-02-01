import React, { Fragment, useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from "axios";
import PokeImage from './PokeImage'

const SingleCard = ({pokename, pokeurl}) => {

    const [pokeInfo, setPokeInfo] = useState([])

    useEffect(()=>{
        const singlePokeInfo = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
                .then((response) => {
                    const apiresponse = response.data;
                    setPokeInfo(apiresponse);
                }
            )
        }
        singlePokeInfo()
    },[pokename])

    

    return(
        <Fragment>
            <Card>
                <CardActionArea>
                    <PokeImage urlSprite={pokeInfo.sprites}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pokename}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {pokeurl}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Fragment>
    )
}

export default SingleCard