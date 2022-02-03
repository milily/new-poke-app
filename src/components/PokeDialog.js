import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PokeModal = ({open, close, abilities, urlSprite}) => {
    // console.log("sprites", urlSprite)
    return (
        <div>
            
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img
                            width={'120'}
                            src={urlSprite.back_default}
                            alt={'pokemon'}
                        />
                        <img
                            width={'120'}
                            src={urlSprite.front_default}
                            alt={'pokemon'}
                        />
                    </div>
                    <Typography 
                        id="modal-modal-title" 
                        variant="h6" 
                        component="h2"
                        fontFamily="Monospace" >
                            Habilidades:
                    </Typography>
                    <Typography 
                        component={'span'} 
                        variant="body2" 
                        color="text.secondary">
                        {abilities.map((ability,index) =>{
                            return (
                                <Chip 
                                    key={index} 
                                    style={{marginRight: 5}} 
                                    label={ability.ability.name} 
                                    size="small" 
                                    color="success" 
                                    variant="outlined"
                                    />
                                )
                            })
                        }
                    </Typography>
                    {/* <div style={{display: 'flex', justifyContent: 'center'}}>
                        
                        <List >
                            {abilities.map((ability,index) => {
                                return(
                                    <ListItem key={index}>
                                        <ListItemText
                                            primary={ability.ability.name}
                                        />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div> */}
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                </Box>
            </Modal>
            
        </div>
    );
}

export default PokeModal