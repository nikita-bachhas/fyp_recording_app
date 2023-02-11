import React from "react";
import { Text, View, StyleSheet, TouchableHighlight, Modal, Button, useState} from 'react-native';
import { useRoute } from "@react-navigation/native";
// import CountDown from "react-native-countdown-component";
import PlayPrerecordedRecording from "../components/playPrerecordedRecording";

export default function PrerecordedImitationPage() {
    
    const route = useRoute();

    const [counter, setCounter] = React.useState(3);
    
    const [intervalId, setIntervalId] = React.useState(null)

    const [modalVisible, setModalVisible] = React.useState(true);

    async function timer () {
      if (counter > 0) {
          const id = setInterval(() => Math.max(setCounter(counter => counter - 1), 0), 1000);
          setIntervalId(id)
          console.log("Starting Timer", id);
      }
    }

    return(
        <View style={styles.container}>

        <View style={[styles.topContainer]}>
            <Text style={[styles.songTitleText]}> {route.params.SongTitle} </Text>

            <PlayPrerecordedRecording songToPlay = {route.params.SongTitle} />
            
            <Modal
              transparent = {true} visible={modalVisible}>
              <View style = {{backgroundColor: "#000000aa", flex: 1}}>
                <View style = {{backgroundColor: "#fff", flex: 1, marginTop: 280, marginBottom: 290, marginRight:50, marginLeft: 50, padding: 40, borderRadius: 10, flex: 1}}> 
                  <Text style={[styles.instructionsText]}>Press "Play Sound" to listen to the beat.</Text>
                  <Text style={[styles.instructionsText]}>To imitate the beat, press "Recreate" and start tapping once the countdown timer reaches to 0.</Text>
                  <Text style={[styles.instructionsText]}>Once done, press "Stop".</Text>
                  <Button title="Close" onPress={() => setModalVisible(false)}/>
                </View>
              </View>
            </Modal>
            
            <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={timer}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Recreate</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={timer}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Stop</Text>
            </TouchableHighlight>
            </View>

            {/* <CountDown
              size={35}
              until={3}
              timeToShow={['S']}
              digitStyle={{backgroundColor: '#FFF'}}
              digitTxtStyle={{color: '#1f3872'}}
              timeLabels={{m: null, s: null}}
            /> */}

          <Text style={[styles.timerText]}>Start Tapping In: {counter}</Text>
            {/* <TouchableOpacity><Button style={styles.button} title='start timer' onPress={timer}></Button></TouchableOpacity> */}

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
    instructionsText: {
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 17, 
    }, 
    submitText: {
      color: '#1f3872',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18
    }, 
    timerText: {
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      paddingTop: 20
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