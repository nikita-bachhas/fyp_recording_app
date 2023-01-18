import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Menu Bar Icons
import user from '../assets/user.png'
import home from '../assets/home.png'
import liveStreaming from '../assets/live-streaming.png'
import prerecorded from '../assets/mic.png'
import settings from '../assets/settings.png'
import logout from '../assets/logout.png'

//Menu and Logo Icons
import menu from '../assets/menu.png'
import close from '../assets/close.png'

export default function Menu(){
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
          <Image source={user} style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            marginTop: 8
          }}></Image>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#405cc4',
            marginTop: 20
          }}> Username </Text>

          <TouchableOpacity>
            <Text style={{
              marginTop: 6,
              color: '#405cc4',
              marginLeft: 5 
            }}>View Profile</Text>
          </TouchableOpacity>

          <View style = {{ flexGrow: 1, marginTop: 50}}>
            {
              //Tab Bar Buttons...
            }
            {TabButton(currentTab, setCurrentTab, "Home", home, 'Home')}
            {TabButton(currentTab, setCurrentTab, "Live Recordings", liveStreaming, 'LiveTeacherRecording')}
            {TabButton(currentTab, setCurrentTab, "Pre-recorded Recordings", prerecorded)}
            {TabButton(currentTab, setCurrentTab, "Settings", settings)}
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
          </Animated.View>

        </Animated.View>
      </SafeAreaView>
    );
}

//To Create Multiple Buttons
const TabButton = (currentTab, setCurrentTab, title, image, componentName) => {
    const navigation = useNavigation(); 
  return(
    <TouchableOpacity onPress={() => {
      if(title == "Logout"){
        //Initiate logout and return to log-in page
      } else{
        setCurrentTab(title)
        navigation.navigate(componentName)
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
  }
});