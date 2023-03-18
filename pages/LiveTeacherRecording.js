import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Animated, TouchableHighlight} from 'react-native';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';
import PopupInstructionLive from "../components/PopupInstructionLive";

//Menu and Logo Icons
import menu from '../assets/menu.png'
import back from '../assets/back.png'

export default function LiveTeacherRecording({ navigation, route }) {

  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        
        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
          <Button style={styles.button} onPress={() => Sharing.shareAsync(recordingLine.file)} title="Share"></Button>
          <Button style={styles.button} onPress={() => navigation.push('Student', {RecordingTitle: "Recording One"})} title="Recreate"></Button> 
          {/*Proceed to new page to recreate beat*/}
        </View>
      );
    });
  }

  return (
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

          <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 90,
              marginRight: 120
            }}>Live Recordings</Text>

      <PopupInstructionLive/>
      <View style={styles.contentContainer}>
        <Text>{message}</Text>

          <TouchableHighlight
              style={styles.submit}
              onPress={recording ? stopRecording : startRecording}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
            </TouchableHighlight>

        {getRecordingLines()}
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomView}>
        <Text>NTU Final Year Project 2022-2023</Text>
        <Text>Developed By: Bachhas Nikita</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#f1f7ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 300
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
  menuContentContainer:{
    width: 20, 
    height: 20,
    tintColor: 'black',
    marginTop: 40,
  },
  backContentContainer:{
    width: 26, 
    height: 26,
    tintColor: 'black',
    marginTop: 37,
    marginLeft: 320
  },
  submit: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    height: 70, 
    width: 170,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    color: '#1f3872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },
});