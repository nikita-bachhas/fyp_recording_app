import React from "react";
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { useRoute } from "@react-navigation/native";
import PlayPrerecordedRecording from "../components/playPrerecordedRecording";
// import Countdown from 'react-native-countdown-component'

export default function PrerecordedImitationPage() {
    const route = useRoute();

    return(
        <View style={styles.container}>

        <View style={[styles.topContainer]}>
            <Text style={[styles.songTitleText]}> {route.params.SongTitle} </Text>

            <PlayPrerecordedRecording songToPlay = {route.params.SongTitle} />

            {/* <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedInformationPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Recreate</Text>
            </TouchableHighlight> */}

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
    topContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'top',
      paddingTop: 100
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
      fontSize: 20
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
      marginTop: 15,
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