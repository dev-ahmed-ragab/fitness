import { Box } from '@mui/system';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import BmiCalculator from '../components/BmiCalculator';
import { useState } from 'react';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
      <BmiCalculator />
    </Box>
  );
};

export default Home;
