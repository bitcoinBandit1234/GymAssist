import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import "../App.css"
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

interface HorizontalScrollBarProps {
    arr: string[];
    bodyPart: string;
    setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  }

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="right-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="left-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

const HorizontalScrollBar = (props: HorizontalScrollBarProps) => {
  const {arr} = props;

  return(
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {arr.map((item, index) => (
        <Box
          key={index}
          title={item}
          m="0 40px"
        >
          <BodyPart item={item} setBodyPart={props.setBodyPart} bodyPart={props.bodyPart} /> 
        </Box>
      ))}
    </ScrollMenu>
  )
}
export default HorizontalScrollBar
