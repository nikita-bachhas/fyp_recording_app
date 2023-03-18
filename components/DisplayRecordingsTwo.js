import React from "react";
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import billieJeanWaveform from '../assets/billieJeanWaveform.png';

const DisplayRecordingsTwo = (props) => {

    const SongToPlay = props.SongToPlay

    return(
        <View style={styles.container}>

            <Text style={styles.songTitleText}>Display Recordings Two</Text> 
            <Text>{SongToPlay}</Text> 
            <ImageBackground 
              source={billieJeanWaveform} 
              style={{width: 360, height: 56,}}>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  songTitleText: {
    color: '#1f3872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,  
  },
});

export default DisplayRecordingsTwo