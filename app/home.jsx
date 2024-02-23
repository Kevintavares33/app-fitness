import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BodyParts from '../components/BodyParts';
import ImageSlider from '../components/Imageslider';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-black flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />

      {/* punchilne and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-neutral-200"
            >
                READY TO
            </Text>
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-green-500"
            >
                WORKOUT
            </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
            <Image 
                source={require('../assets/images/perfil.png')}
                style={{height: hp(6), width: hp(6)}} 
                className="rounded-full"
            />
            <View 
                className="bg-black rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                style={{height: hp(5.5), width: hp(5.5)}}
            >
                <Ionicons name="notifications" size={hp(3)} color="green" />
            </View>
        </View>
      </View>

      <View>
        <ImageSlider />
      </View>

        {/* body parts list */}
      <View className="flex-1">
        <BodyParts />
      </View>


    </SafeAreaView>
  )
}