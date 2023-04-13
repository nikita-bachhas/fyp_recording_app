import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableHighlight, ImageBackground } from 'react-native';

import user from '../assets/user.png'
import email from '../assets/email.png'
import idCard from '../assets/idCard.png'
import shield from '../assets/shield.png'
import checked from '../assets/checked.png'
import back from '../assets/back.png'

const LoginPage = ({navigation}) => {
    const [usernameText, onChangeUsernameText] = React.useState('Username');
    const [passwordText, onChangePasswordText] = React.useState('Password');
    
    return(
        <View style={styles.container}>

            <ImageBackground 
              source={back} 
              style={styles.backContentContainer}/>

            <Text style={[styles.headingText]}>Login</Text>

            <View style={styles.searchSection}>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeUsernameText}
                  value={usernameText}/>
                      
              <ImageBackground 
                  source={idCard} 
                  style={styles.ImageStyle}/>
            </View>

            <View style={styles.searchSection}>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangePasswordText}
                  value={passwordText}/>

              <ImageBackground 
                  source={shield} 
                  style={styles.ImageStyle}/>
            </View>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Home')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Login</Text>
            </TouchableHighlight>
            
            <View style={{flexDirection: 'row', marginTop: 60}}>  
              <Text style={{
                color: '#1f3872',
                }}> Forget Username?</Text>

              <Text style={{
                color: '#1f3872',
                fontWeight: 'bold', 
                paddingLeft: 5
                }}>Reset Username</Text>
             </View>

             <View style={{flexDirection: 'row', marginTop: 5}}>  
              <Text style={{
                color: '#1f3872',
                }}> Forget Password?</Text>

              <Text style={{
                color: '#1f3872',
                fontWeight: 'bold', 
                paddingLeft: 5
                }}>Reset Password</Text>
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
    input: {
        height: 60,
        width: 280,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderColor: '#fff'
      },
    headingText: {
        color: '#1f3872',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 15
      },
    submit: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#1f3872',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1f3872',
        height: 65, 
        width: 200,
        justifyContent: 'center',
        alignItems: 'center'
      },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
      },
    ImageStyle: {
        marginRight: 5,
        height: 50,
        width: 50,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    searchSection: {
      flex: 0.125,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 20, 
      marginTop: 13
    },
    backContentContainer:{
      width: 30, 
      height: 30,
      tintColor: 'black',
      marginRight: 320, 
      marginBottom: 30
    },
  });

export default LoginPage