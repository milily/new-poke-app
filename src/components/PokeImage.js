import React from "react";
import CardMedia from '@mui/material/CardMedia';

const PokeImage = ({urlSprite}) =>{
    return(
        <CardMedia
            component="img"
            image={urlSprite?.other?.home?.front_default}
            alt="green iguana"
        />
    )
}

export default PokeImage