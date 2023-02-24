import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';

export default function PlayPrerecordedRecording(props) {
  const [sound, setSound] = React.useState();

  const SongToPlay = props.SongToPlay
  const songPath = '../assets/BreadNButter92bpm.mp3'

  const GetSongData = () => {
    
    for (let i = 0; i < PrerecordedRecordings.length; i++) {
      //From the JSON file
      const name = PrerecordedRecordings[i].SongTitle
    
      if (name == SongToPlay){
        const SongPath = PrerecordedRecordings[i].PathAddress
        
        console.log(SongToPlay, SongPath);
        return(SongPath)
      }
      else{
        console.log("Not current Track; proceed to next track"); 
      }
    }

    const DefaultSongPath = '../assets/BreadNButter92bpm.mp3'
    return(DefaultSongPath)
  }

  // const songPath = GetSongData()

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require(songPath)
    );

    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
      <Text> {<GetSongData/>} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    maxHeight: 40,
    marginTop: 10
  },
});