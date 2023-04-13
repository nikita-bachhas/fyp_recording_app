import React from "react";
import { Text, View, StyleSheet, ImageBackground, Animated, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import SearchBarComponent from "../components/SearchBar";

//Menu and Logo Icons
import menu from '../assets/menu.png'
import back from '../assets/back.png'

const PrerecordedPage = ({navigation}) => {
    return(
        <View style={styles.container}>
        
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 20,
          paddingVertical: 20,
          }}>
          <TouchableHighlight onPress={() => {
            navigation.navigate('Home')}}>
            <View>
              <ImageBackground 
              source={back}
              style={styles.backContentContainer}>
              </ImageBackground>
            </View>
          </TouchableHighlight>
        </View>

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
            }}>Pre-recorded Recordings</Text>

          <ScrollView contentContainerStyle={styles.contentContainer}>
          
          <Text style={{
                fontSize: 12,
                color: 'black',
                paddingTop: 10, 
                paddingLeft: 8
              }}> Select or search for a pre-recorded recording to get started</Text>

          <View style={styles.searchBarContainer}> 
            <SearchBarComponent/>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Fleetwood Mac Tusk"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Fleetwood Mac: Tusk</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Michael Jackson Billie Jean"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Michael Jackson: Billie Jean</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Queen Another One Bites the Dust"})}
              underlayColor='#fff'>
              <View>
                <Text style={[styles.submitText]}>Queen: Another One Bites the</Text>
                <Text style={[styles.submitText]}> Dust</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Phil Collins You Can't Hurry Love"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Phil Collins: You Can't Hurry Love</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Bread & Butter"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Bread & Butter</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Big Bell Bounce"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Big Bell Bounce</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Hit Hat Hotness"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Hit Hat Hotness</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Terrific 2 Beat"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Terrific 2 Beat</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Tom Tom Time"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Tom Tom Time</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Useful Upbeats"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Useful Upbeats</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Beatle Beats"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Beatle Beats</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Stir the Sauce"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Stir the Sauce</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Quirkly Quarters"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Quirkly Quarters</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Jazz Jam"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Jazz Jam</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}> 
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Twist & Twirl"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Twist & Twirl</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Spacey Stuff"})}
              underlayColor='#fff'>
              <Text style={[styles.submitText]}>Spacey Stuff</Text>
            </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={styles.submit}
              onPress={() => navigation.push('PrerecordedImitationPage', {SongTitle: "Waltzy WorldV2"})}
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
    backContentContainer:{
      width: 26, 
      height: 26,
      tintColor: 'black',
      marginTop: 37,
      marginLeft: 320
    },
    submit: {
      marginRight: 15,
      marginLeft: 15,
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
    },
    searchBarContainer:{
      paddingTop: 20,
      paddingLeft: 10,
      marginRight: 10
    } 
  });

export default PrerecordedPage