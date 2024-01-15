import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { fetchExercisesByBodypart } from '../api/exerciseDB';

export default function Exercises() {
    const router = useRouter();
    const item = useLocalSearchParams();
    console.log('got item', item)

    useEffect(()=>{
        if(item) getExercises(item.name);

    }, [item]);

    const getExercises = async (bodyParts)=>{
        let data = await fetchExercisesByBodypart(bodypart);
        console.log('got data:', data);
    }

  return (
    <View className='mt-20'>
        <Text>
          Exercises
        </Text>
      
      <TouchableOpacity onPress={()=> router.back()}>
        <Text>
            go Back
        </Text>
      </TouchableOpacity>
    </View>
  )
}