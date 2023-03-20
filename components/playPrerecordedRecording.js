import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';
import { Audio } from 'expo-av';

export default function PlayPrerecordedRecording(props) {
  const [sound, setSound] = React.useState();

  const SongToPlay = props.SongToPlay

  // function getRecordingDuration() {
  const getRecordingDuration = () => {
    for (let i = 0; i < PrerecordedRecordings.length; i++) {
      const name = PrerecordedRecordings[i].SongTitle

      if (name == SongToPlay){
        const duration = PrerecordedRecordings[i].Duration
        return(duration)
      }
      else {
        console.log("Unable to Find Recording Duration")
      }
    }
  }

  const duration = getRecordingDuration()

  async function playSound() {
    if (SongToPlay ==  "Fleetwood Mac Tusk"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/Tusk_2018_Remaster_Percussion_Beat.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Michael Jackson Billie Jean"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/Michael_Jackson_Billie_Jean_Percussion_Beat.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Queen Another One Bites the Dust"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/Queen_Another_One_Bites_The_Dust_Percussion_Beat.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Phil Collins You Can't Hurry Love"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/you_cant_hurry_love_by_phil_collins.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Bread & Butter"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/BreadNButter92bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Big Bell Bounce"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/BigBellBounce98bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Hit Hat Hotness"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/HiHatHotness100bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Terrific 2 Beat"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/Terrific2Beat105bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Tom Tom Time"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/TomTomTime88bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Useful Upbeats"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/UsefulUpbeats95bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Beatle Beats"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/BeatleBeats100bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Stir the Sauce"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/StirtheSauce80bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Quirkly Quarters"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/QuirkyQuarters85bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Jazz Jam"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/JazzJam95bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Twist & Twirl"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/TwistNTwirl100bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Spacey Stuff"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/SpaceyStuff105bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else if (SongToPlay ==  "Waltzy WorldV2"){
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/WaltzyWorldV2105bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
    else{
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/BreadNButter92bpm.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
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
      <Text style={{
        fontSize: 17, 
        paddingLeft: 30
        }}> Duration: {duration}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    maxHeight: 40,
    marginTop: 10,
    paddingBottom: 2
  },
});