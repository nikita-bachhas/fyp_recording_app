import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native";
import ComparisonAlgorithm from "../components/ComparisonAlgorithm";
import DisplayRecordings from "../components/DisplayRecordings";

const PrerecordedErrorPage = ({navigation}) => {
  const route = useRoute()

    return(
        <View style={styles.container}>
            <Text>Your Comparison score for: </Text>
            <Text style={[styles.songTitleText]}> {route.params.SongTitle} </Text>
            <Text> {route.params.StudentLeftArray} </Text>
            <Text> {route.params.StudentRightArray}</Text>

            {/* <ComparisonAlgorithm SongToPlay = {route.params.SongTitle} StudentLeftArray = {route.params.StudentLeftArray} StudentRightArray = {route.params.StudentRightArray}/> */}
            
            {/* <DisplayRecordings/>  */}

            <TouchableOpacity
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: route.params.SongTitle})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Retry</Text>
            </TouchableOpacity>

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
      paddingBottom:120
    },
    submitText: {
      color: '#1f3872',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18
    }, 
    submit: {
      marginRight: 15,
      marginLeft: 15,
      marginTop: 130,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      height: 70, 
      width: 150,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

export default PrerecordedErrorPage