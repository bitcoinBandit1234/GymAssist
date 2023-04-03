import React, {useState} from 'react';
import {Box} from "@mui/material";
import HeroBanner from '../Components/HeroBanner';
import Exercises from '../Components/Exercises';
import SearchExercise from '../Components/SearchExercise';

interface ExerciseData {
  id: number;
  name: string;
  gifUrl: string;
  equipment: string;
  bodyPart: string;
  target: string;
}

const Home = () => {
  const [exercises, setExercises] = useState<ExerciseData[]>([]);
  const[bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
    <HeroBanner/>
    <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </Box>

  )
}

export default Home;