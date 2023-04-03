import React from 'react';
import {Stack, Typography} from "@mui/material";
import Icon from "../assets/icons/gym.png";

interface BodyPartProps{
    item: string;
    bodyPart: string;
    setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const BodyPart = (props:BodyPartProps) => {
  return (
    <Stack onClick={() => {
      props.setBodyPart(props.item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }} alignItems="center" justifyContent="center" className='bodyPart-card' sx={props.bodyPart === props.item? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}>
        <img src={Icon} alt="dumbell" style={{width:"40px", height:"40px"}}/>
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {props.item}</Typography>
    </Stack>
  )
}

export default BodyPart