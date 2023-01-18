import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import * as Sharing from 'expo-sharing';

export default function LiveStudentRecording({ navigation, route }) {
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
            <Button style={styles.button} onPress={() => navigation.push('Score')} title="Compare"></Button> 
            {/*Proceed to new page to recreate beat*/}
          </View>
        );
      });
    }
  
    return (
      <View style={styles.container}>
        <Text>{message}</Text>
        <Button
          title={recording ? 'Stop Recording' : 'Start Recording'}
          onPress={recording ? stopRecording : startRecording} />
        {getRecordingLines()}
        <View style={styles.bottomView}>
        <Text>NTU Final Year Project 2022-2023</Text>
        <Text>Developed By: Bachhas Nikita</Text>
        </View>
        <StatusBar style="auto" />
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
    }
  });