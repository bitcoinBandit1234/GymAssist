import React, {useEffect, useState, Dispatch, SetStateAction} from 'react';
import {Box, Button, Stack, Typography, TextField} from "@mui/material";
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

interface ExerciseData {
  id: number;
  name: string;
  gifUrl: string;
  equipment: string;
  bodyPart: string;
  target: string;
}

interface searchExerciseProps{
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  setExercises: Dispatch<SetStateAction<ExerciseData[]>>;
}

const SearchExercise = (props:searchExerciseProps) => {
  const [search, setSearch] = useState<string>("");
  const[bodyParts,setBodyParts] = useState<string[]>([]);

  useEffect(()=>{
    const fetchExerciseData = async ()=>{
      const bodyPartsData = await fetchData<string[]>('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(["all", ...bodyPartsData]);
    }
    fetchExerciseData()
  },[])



  const handleSearch = async()=>{
    try{
      if(search){
        const exercisesData = await fetchData<ExerciseData>('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        if(exercisesData){
          const searchedExercise = exercisesData.filter((exercise)=> exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search))
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          setSearch('');
          props.setExercises([...searchedExercise]);
        }
      }
    }catch(error){
    console.log(error);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight="700" sx={{fontSize:{lg:"44px", xs:"30px"}}} mb="50px" textAlign="center"> Awesome Exercise For You</Typography>
      <Box position="relative" mb="72px">
        <TextField onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value.toLowerCase())} sx={{input: {fontWeight:"700", border:"none", borderRadius:"4px"}, width:{lg:"800px", xs:"350px"}, backgroundColor:"#fff", borderRadius:"40px"}}  value={search} placeholder="Search Exercises" type="text"  />
      <Button className="search-btn" onClick={handleSearch} sx={{bgcolor:"#FF2625", color:"#fff", textTransform:"none", width:{lg:"175px", xs:"80px"}, fontSize: {lg:"20px", xs:"14px"}, height:"56px", position:"absolute", right:"0"}}>Search</Button>
      </Box>
      <Box sx={{position:"relative", width:'100%', p:'20px'}}>
       <HorizontalScrollBar arr={bodyParts} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercise