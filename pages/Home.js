import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TouchableHighlight, ImageBackground, TouchableOpacity, Animated} from 'react-native';
import { Card } from '@rneui/themed';
import Emoji from 'react-native-emoji';
import { useNavigation } from '@react-navigation/native';

//Menu Bar Icons
import logo from '../assets/logo.png'
import home from '../assets/home.png'
import liveStreaming from '../assets/live-streaming.png'
import prerecorded from '../assets/mic.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'

//Menu and Logo Icons
import menu from '../assets/menu.png'
import close from '../assets/close.png'

//Importing components
import PreviousRecordingTable from "../components/PreviousRecordingsTable";

export default function Home({navigation}){
    const [currentTab, setCurrentTab] = React.useState("Home");
    //To get the current status of the menu:
    const [showMenu, setShowMenu] = React.useState(false);
    //Animated Properties
    const offsetValue = React.useRef(new Animated.Value(0)).current;
    const scaleValue = React.useRef(new Animated.Value(1)).current;
    const closeButtonOffset = React.useRef(new Animated.Value(0)).current;

    return(
      <SafeAreaView style={styles.container}>
        <View style={{justifyContent: 'flex-start', padding: 15}}>
          <View style={{paddingLeft: 5}}> 
            <ImageBackground 
              source={logo}
              style={styles.logoContainer}>
              </ImageBackground>
            </View>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#1f3872',
            marginTop: 20
          }}> Full Name </Text>

          <Text style={{
            marginTop: 6,
            color: '#1f3872',
            marginLeft: 5 
          }}>Student</Text>

          <View style = {{ flexGrow: 1, marginTop: 50}}>
            {
              //Tab Bar Buttons...
            }
            {TabButton(currentTab, setCurrentTab, "Home", home, "Home")}
            {TabButton(currentTab, setCurrentTab, "Pre-recorded Recordings", prerecorded, "PrerecordedPage")}
            {TabButton(currentTab, setCurrentTab, "Live Recordings", liveStreaming, "Teacher")}
            {TabButton(currentTab, setCurrentTab, "Settings", settings, "Settings")}
            {/* {TabButton(currentTab, setCurrentTab, "Django Tutorial", settings, "DjangoTutorial")} */}
          </View>

          <View>
            {TabButton(currentTab, setCurrentTab, "Logout", logout)}
          </View>
          
        </View>

        {
          //Over lay view
        }
        <Animated.View style={{
          flexGrow: 1, 
          backgroundColor: '#f1f7ff',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          //Transforming View:
          transform:[
            { scale: scaleValue},
            { translateX: offsetValue}
          ] 
        }}>

          {
            //Menu Button...
          }
          <Animated.View style = {{
            transform: [{
              translateY: closeButtonOffset
            }]
          }}>
            <TouchableOpacity onPress={() => {
              //Do Actions here
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true
              })
                .start()

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 280,
                duration: 300,
                useNativeDriver: true
              })
                .start()

              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true
              })
                .start()

                setShowMenu(!showMenu);
            }}>

              <ImageBackground 
                source={showMenu ? close : menu} 
                style={styles.menuContentContainer}>
              </ImageBackground>
            </TouchableOpacity>

            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              paddingTop: 20
            }}>{currentTab}</Text>

            <View style={{flexDirection: 'row', paddingTop: 10}}> 
              <Emoji name="wave" style={{fontSize: 40}} />
              <Text style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20
              }}>Hi Nikita7856, welcome to Beats!</Text>
            </View>
            
            <View style={{flexDirection: 'row'}}> 

              <TouchableHighlight
                style={styles.submit}
                onPress={() => navigation.push('PrerecordedPage')}
                underlayColor='#fff'>
                <Text style={[styles.submitText]}>Pre-recorded Recordings</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.submit}
                onPress={() => navigation.push('Teacher')}
                underlayColor='#fff'>
                <Text style={[styles.submitText]}>Live Recordings</Text>
              </TouchableHighlight>

            </View>
            

            <TouchableHighlight style={styles.scoreTable}> 
              <View>
                <Text style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#1f3872',
                  paddingLeft: 5
                  }}> Imitation Scores: </Text>

                <Text style={styles.noScoresToDisplayText}> You currently have no scores to display.</Text>
                <Text style={styles.toGetStartText}> To get started, click on either Pre-recorded Recordings or Live Recordings.</Text>
                {/* <PreviousRecordingTable/> */}
              </View>
            </TouchableHighlight>
          
          </Animated.View>
          <View style={styles.bottomView}>
            <Text>NTU Final Year Project 2022-2023</Text>
            <Text>Developed By: Bachhas Nikita</Text>
          </View>
        </Animated.View>
      </SafeAreaView>
    );
}

//To Create Multiple Buttons
const TabButton = (currentTab, setCurrentTab, title, image, component) => {
    const navigation = useNavigation(); 
  return(
    <TouchableOpacity onPress={() => {
      if(title == "Logout"){
        //Initiate logout and return to log-in page
      } else{
        setCurrentTab(title)
        navigation.navigate(component)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center', 
        paddingVertical: 8,
        backgroundColor: currentTab == title ? '#405cc4' : 'transparent',
        paddingLeft: 13, 
        paddingRight: 6,
        borderRadius: 8,
        width: 240,
        height: 50,
        marginTop: 15
      }}>
    
        <ImageBackground 
          source={image} 
          style={styles.menuBarContentContainer}>
          <Text style={{
            fontSize: 15, 
            fontWeight: 'bold',
            paddingLeft: 35,
            paddingTop: 5, 
            color: currentTab == title ? 'white' : '#405cc4',
          }}>{title}</Text>
        </ImageBackground>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  bottomView: {
    width: '115%',
    height: 65,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  menuBarContentContainer:{
    flex: 1,
    width: 25, 
    height: 25,
  },
  menuContentContainer:{
    width: 20, 
    height: 20,
    tintColor: 'black',
    marginTop: 40,
  },
  logoContainer:{
    width: 150, 
    height: 54,
    tintColor: 'black',
    marginTop: 10,
  }, 
  submit: {
    marginRight: 20,
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
    fontSize: 17, 
  }, 
  scoreTable: {
    marginRight: 20,
    marginLeft: 10,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    height: 420, 
    width: 335,
  },
  noScoresToDisplayText: {
    color: 'black',
    textAlign: 'center',
    paddingTop: 100,
  }, 
  toGetStartText: {
    color: 'black',
    textAlign: 'center',
  }
});