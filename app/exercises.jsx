import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';
import { fetchExercisesByBodyPart } from '../api/exerciseDB';
import ExerciseList from '../components/ExerciseList';

export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();
    // console.log('got item: ', item);

    useEffect(()=>{
        if(item) getExercises(item.name);
    },[item]);

    const getExercises = async (bodypart)=>{
        let data = await fetchExercisesByBodyPart(bodypart);
        // console.log('got data: ', data);
        setExercises(data);
    }
  return (
    <ScrollView className="bg-black">
        <StatusBar style="light" />
        <Image 
            source={item.image}
            style={{width: wp(100), height: hp(45)}}
            className="rounded-b-[40px]"
        />
        <TouchableOpacity
            onPress={()=> router.back()}
            className="bg-black mx-4 absolute flex justify-center items-center pr-1 rounded-full"
            style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
                 <Ionicons name="caret-back-outline" size={hp(4)} color="green" />
        </TouchableOpacity>

        {/* exercises */}
        <View className="mx-4 space-y-3 mt-4">
            <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-200">
            Exercises
            </Text>
            <View className="mb-10">
                <ExerciseList data={exercises} />
            </View>
        </View>
    </ScrollView>
  )
}