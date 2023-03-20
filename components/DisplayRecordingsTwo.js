import React from "react";
import { Text, View, StyleSheet, ImageBackground, Button} from 'react-native';
import PlayPrerecordedRecording from "../components/PlayPrerecordedRecording";
import * as Progress from 'react-native-progress';

//Import Waveforms
import tuskWaveform from '../assets/tuskWaveform.png';
import billieJeanWaveform from '../assets/billieJeanWaveform.png';
import youCantHurryLoveWaveform from '../assets/youCantHurryLoveWaveform.png';
import breadnbutterWaveform from '../assets/breadnbutterWaveform.png';
import bigbellbounceWaveform from '../assets/bigbellbounceWaveform.png';
import hihathotnessWaveform from '../assets/hihathotnessWaveform.png';
import terrific2beatWaveform from '../assets/terrific2beatWaveform.png';
import tomtomtimeWaveform from '../assets/tomtomtimeWaveform.png';
import usefulupbeatsWaveform from '../assets/usefulupbeatsWaveform.png';
import beatlebeatsWaveform from '../assets/beatlebeatsWaveform.png';
import stirthesauceWaveform from '../assets/stirthesauceWaveform.png';
import quirkyquartersWaveform from '../assets/quirkyquartersWaveform.png';
import jazzjamWaveform from '../assets/jazzjamWaveform.png';
import twistntwirlWaveform from '../assets/twistntwirlWaveform.png';
import spaceystuffWaveform from '../assets/spaceystuffWaveform.png';
import waltzyworldv2Waveform from '../assets/waltzyworldv2Waveform.png';


const DisplayRecordingsTwo = (props) => {

    const SongToPlay = props.SongToPlay
    const Duration = props.Duration
    var image = null
    var audioPath = null
    const [stopwatch, setStopwatch] = React.useState(0);
    const [sound, setSound] = React.useState(false);

    const startStopwatch = () => {
        setSound(!sound)
        console.log("Stopwatch started.")
        let interval = setInterval(() => setStopwatch(lastStopwatchCount => lastStopwatchCount + 1), 1000);
        return () => clearInterval(interval)
    }

    const stopWatchPercent = () => {
        if (stopwatch!= 0){
            return(stopwatch/Duration)
        }
        else{
            return(0)
        }
    }

    const imageSource = () => {
        if (SongToPlay ==  "Fleetwood Mac Tusk"){
            image = tuskWaveform
        }
        else if (SongToPlay ==  "Michael Jackson Billie Jean"){
            image = billieJeanWaveform
            audioPath="../assets/Queen_Another_One_Bites_The_Dust_Percussion_Beat.mp3"
        }
        else if (SongToPlay ==  "Phil Collins You Can't Hurry Love"){
            image = youCantHurryLoveWaveform
        }
        else if (SongToPlay ==  "Queen Another One Bites the Dust"){
            image = queenAnotherOneBitesTheDustWaveform
        }
        else if (SongToPlay ==  "Bread & Butter"){
            image = breadnbutterWaveform
        }
        else if (SongToPlay ==  "Big Bell Bounce"){
            image = bigbellbounceWaveform
        }
        else if (SongToPlay ==  "Hit Hat Hotness"){
            image = hihathotnessWaveform
        }
        else if (SongToPlay ==  "Terrific 2 Beat"){
            image = terrific2beatWaveform
        }
        else if (SongToPlay ==  "Tom Tom Time"){
            image = tomtomtimeWaveform
        }
        else if (SongToPlay ==  "Useful Upbeats"){
            image = usefulupbeatsWaveform
        }
        else if (SongToPlay ==  "Beatle Beats"){
            image = beatlebeatsWaveform
        }
        else if (SongToPlay ==  "Stir the Sauce"){
            image = stirthesauceWaveform
        }
        else if (SongToPlay ==  "Quirkly Quarters"){
            image = quirkyquartersWaveform
        }
        else if (SongToPlay ==  "Jazz Jam"){
            image = jazzjamWaveform
        }
        else if (SongToPlay ==  "Twist & Twirl"){
            image = twistntwirlWaveform
        }
        else if (SongToPlay ==  "Spacey Stuff"){
            image = spaceystuffWaveform
        }
        else if (SongToPlay ==  "Waltzy WorldV2"){
            image = waltzyworldv2Waveform
        }
        else{
            image = queenAnotherOneBitesTheDustWaveform
        }
        return(image)
    }

    const value = stopWatchPercent();

    return(
        <View style={styles.container}>

            {/* <Text style={styles.songTitleText}>Display Recordings Two</Text>  */}

            <ImageBackground 
              source={imageSource()} 
              style={{width: 360, height: 56, marginTop: 30, marginBottom: 20}}>
            </ImageBackground>

            <View style={styles.progressBarContainer}> 
                <Progress.Bar progress={0.3} width={320} color={'#1f3872'}/>
            </View>

            {/* <PlayPrerecordedRecording SongToPlay = {SongToPlay}/> */}

            <View style={{flexDirection: 'row',  marginTop:15}}>
                <Button title={sound ? 'Pause Sound' : 'Play Sound'} onPress={startStopwatch} />
                {Duration<10 ? <Text style={{fontSize: 17, paddingLeft: 50, marginTop:10}}> 0:0{Duration} </Text> : <Text style={{fontSize: 17, paddingLeft: 170, marginRight: 10, marginTop:10}}>0:{Duration}</Text>}
            </View>

            <Text style={{fontSize: 20, color: 'red', fontWeight: 'bold', marginTop: 20, textAlign: 'center'}}> ERROR at 0:06</Text>
            <Text style={{fontSize: 20, marginTop: 10, textAlign: 'center'}}> Missed a beat at this mark</Text>
            {/* <Text style={{fontSize: 20, textAlign: 'center', marginTop: 30,}}> Press play sound to listen and understand where you erred beat by beat.</Text> */}
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
  progressBarContainer: {
    marginTop:20
  },
});

export default DisplayRecordingsTwo