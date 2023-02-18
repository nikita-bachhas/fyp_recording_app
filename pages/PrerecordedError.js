import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import RecordingComparison from "../components/RecordingComparison";

const PrerecordedErrorPage = () => {
  const route = useRoute()

    return(
        <View style={styles.container}>
            <Text>Your Comparison score for: </Text>
            <Text style={[styles.songTitleText]}> {route.params.SongTitle} </Text>
            <RecordingComparison songToPlay = {route.params.SongTitle}/>
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
      fontSize: 20
    },
  });

export default PrerecordedErrorPage