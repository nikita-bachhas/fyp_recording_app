import React from "react";
import { Text, View, StyleSheet, ImageBackground, Animated, TouchableHighlight, ScrollView } from 'react-native';
import PreviousRecordingTable from "../components/PreviousRecordingsTable";
import SearchBarComponent from "../components/searchBar";

//Menu and Logo Icons
import menu from '../assets/menu.png'

const PrerecordedPage = ({navigation}) => {
    return(
        <View style={styles.container}>
            {/* <PreviousRecordingTable/> */}

          <Animated.View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 20,
            paddingVertical: 20,
            }}>
            <ImageBackground 
              source={menu} 
              style={styles.menuContentContainer}/>
          </Animated.View>

          <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 90,
              paddingLeft: 10,
            }}>Pre-Recorded Recordings</Text>

          <ScrollView contentContainerStyle={styles.contentContainer}>
          
          <Text style={{
                fontSize: 12,
                color: 'black',
                paddingTop: 10, 
                paddingLeft: 8
              }}> Select or search for a pre-recorded recording to get started</Text>

          {/* <SearchBarComponent/> */}

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Madagascar 3: Afro Circus</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Teacher')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Fleetwood Mac: Tusk</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Phil Collins: You Can't Hurry Love</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Teacher')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Bread & Butter</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Big Bell Bounce</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Teacher')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Hit Hat Hotness</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Terrific 2 Beat</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Teacher')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Tom Tom Time</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Useful Upbeats</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Teacher')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Beatle Beats</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Stir the Sauce</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Teacher')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Quirkly Quarters</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Jazz Jam</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Teacher')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Twist & Twirl</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedPage')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Spacey Stuff</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('Teacher')}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Waltzy WorldV2</Text>
            </TouchableHighlight>
          </View>
          </ScrollView>

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
    menuContentContainer:{
      width: 20, 
      height: 20,
      tintColor: 'black',
      marginTop: 40,
    },
    submit: {
      marginRight: 15,
      marginLeft: 10,
      marginTop: 20,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      height: 100, 
      width: 150,
      justifyContent: 'center',
      alignItems: 'center'
    },
    submitText: {
      color: '#1f3872',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 17
    }, 
    contentContainer: {
      paddingVertical: 5,
      paddingBottom: 75
    }
  });

export default PrerecordedPage