import React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableHighlight} from 'react-native';

import drums from '../assets/drums.png'

const StartPage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ImageBackground 
              source={drums} 
              style={styles.drumsContentContainer}/>

            <Text style={[styles.welcomeText]}>Welcome To Beats!</Text>

            <View style={{flexDirection: 'column'}}>
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Home')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Sign Up</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Home')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Login</Text>
            </TouchableHighlight>
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
    drumsContentContainer:{
        width: 200, 
        height: 200,
      },
    submit: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#1f3872',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1f3872',
        height: 70, 
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
      },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
      },
    welcomeText: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        fontFamily: 'Papyrus', 
        paddingTop: 40
      },
  });

export default StartPage