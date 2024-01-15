import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BodyParts from '../components/BodyParts';
import ImageSlider from '../components/ImageSlider';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-white flex space-y-5' edges={['top']}>
      <StatusBar style='dark'/>

      {/* punchiline and avatar*/}
        <View className='flex-row justify-between items-center mx-5'>
            <View className='space-y-2'>
                <Text
                style={{fontSize:hp(4.5)}}
                className='font-bold tracking-wider text-neutral-700'
                >
                    Ready to 
                </Text>

                <Text
                style={{fontSize:hp(4.5)}}
                className='font-bold tracking-wider text-rose-500'
                >
                    Workout
                </Text>
             </View>
          
          <View className='flex justify-center items-center space-y-2'>
             <Image
                source={require('../assets/images/perfil.png')}
                style={{height: hp(6), width: hp(6)}}
                className='rounded-full'
             />

                <View
                 className='bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300'
                 style={{height: hp(5.4), width: hp(5.4)}}
                
                 >
                 <Ionicons name='notifications' size={hp(3)} color='gray'/>
                </View>
            </View>
        </View>

        {/* image slider /*/}

        <View>
            <ImageSlider/>
        </View>

      {/* Bodyparts-list/*/}

        <View className="flex-1">
          
          <BodyParts/>

        </View>

    </SafeAreaView>
  )
}