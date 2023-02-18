import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';

const RecordingComparison = (props) => {

    //Coming dynamically
    const songToPlay = props.songToPlay
    const StudentLeftArray = []
    const StudentRightArray = []

  
    // async function Comparison(){
    const Comparison = () => {
      for (let i = 0; i < PrerecordedRecordings.length; i++) {
        //From the JSON file
        const name = PrerecordedRecordings[i].SongTitle
        if (name == songToPlay){
          const PreRecordedLeftArray = PrerecordedRecordings[i].LeftArray
          const PreRecordedRightArray = PrerecordedRecordings[i].RightArray
          console.log(songToPlay, name, StudentLeftArray, PreRecordedLeftArray, StudentRightArray, PreRecordedRightArray); 
          return("Twilight Breaking Dawn Part 1")
        }
        else{
          console.log("Not current Track; proceed to next track"); 
        }
      }
    }

    return(
        <View style={styles.container}>
            <Text>{songToPlay}</Text>
            <Text style={[styles.songTitleText]}>{<Comparison/>}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    maxHeight: 40,
    marginTop: 10
  },
  songTitleText: {
    color: '#1f3872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
});

export default RecordingComparison