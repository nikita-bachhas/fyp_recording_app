import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const DisplayRecordings = () => {

    return(
        <View style={styles.container}>
            <Text style={[styles.songTitleText]}>Display Recording Errors</Text>
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
    fontSize: 20,  
  },
});

export default DisplayRecordings