import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Animated, ScrollView} from 'react-native';
import { useRoute } from "@react-navigation/native";
import ComparisonAlgorithmOne from "../components/ComparisonAlgorithmOne";
import BeatComparison from "../components/BeatComparison";
import TempoComparison from "../components/TempoComparison";
import DisplayRecordingsOne from "../components/DisplayRecordingsOne";
import menu from '../assets/menu.png'
import back from '../assets/back.png'

const PrerecordedErrorPage = ({navigation}) => {
  const route = useRoute()

    return(
        <View style={styles.container}>
          <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 20,
            paddingVertical: 20,
            }}>
            <TouchableOpacity>
              <ImageBackground 
                source={back} 
                style={styles.backContentContainer}
                onPress={() => navigation.push('Home')}
                />
            </TouchableOpacity>
            </View>
          
          <Animated.View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 20,
            paddingVertical: 20,
            }}>
            <ImageBackground 
              source={menu} 
              style={styles.menuContentContainer}/>
          </Animated.View>

            <Text>Your Comparison score for: </Text>
            <Text style={[styles.songTitleText]}> {route.params.SongTitle} </Text>
            
            {/* <Text> {route.params.StudentLeftArray} </Text>
            <Text> {route.params.StudentRightArray}</Text>
            <Text> {route.params.Duration}</Text> */}

            <ComparisonAlgorithmOne SongToPlay = {route.params.SongTitle} StudentLeftArray = {route.params.StudentLeftArray} StudentRightArray = {route.params.StudentRightArray}/>
            
            {/* <BeatComparison SongToPlay = {route.params.SongTitle} StudentLeftArray = {route.params.StudentLeftArray} StudentRightArray = {route.params.StudentRightArray}/>
            <TempoComparison SongToPlay = {route.params.SongTitle} StudentLeftArray = {route.params.StudentLeftArray} StudentRightArray = {route.params.StudentRightArray} Duration = {route.params.Duration}/> */}
            
            {/* <ScrollView contentContainerStyle={styles.contentContainer}>
              <DisplayRecordingsOne/> 
            </ScrollView> */}

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.submitRetry}
                onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: route.params.SongTitle})}
                underlayColor='#fff'>
                <Text style={[styles.submitText]}>Retry</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.submitReturn}
                onPress={() => navigation.push('PrerecordedPage')}
                underlayColor='#fff'>
                <Text style={[styles.submitText]}>Return to Recordings</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomView}>
            <Text>NTU Final Year Project 2022-2023</Text>
            <Text>Developed By: Bachhas Nikita</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f7ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomView: {
      width: '100%',
      height: 65,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fill: {
      flex: 1,
      margin: 16
    },
    button: {
      margin: 16
    }, 
    songTitleText: {
      color: '#1f3872',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom:70
    },
    submitText: {
      color: '#1f3872',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18
    },
    submitRetry: {
      marginRight: 20,
      marginLeft: 30,
      marginTop: 440,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      height: 80, 
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    submitReturn: {
      marginRight: 20,
      marginLeft: 10,
      marginTop: 440,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      height: 80, 
      width: 210,
      justifyContent: 'center',
      alignItems: 'center'
    },
    backContentContainer:{
      width: 26, 
      height: 26,
      tintColor: 'black',
      marginTop: 37,
      marginLeft: 320
    },
    menuContentContainer:{
      width: 20, 
      height: 20,
      tintColor: 'black',
      marginTop: 40,
    },
  });

export default PrerecordedErrorPage