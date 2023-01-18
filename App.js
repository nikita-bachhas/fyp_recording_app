import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Animated} from 'react-native';

//Importing Different Pages
import LoginStudentorTeacher from './pages/LoginPageStudentorTeacher';
import Login from './pages/LoginPage';
import SignUp from './pages/SignUpPage';
import Home from './pages/HomePage';
import LiveTeacherRecording from './pages/LiveTeacherRecording';
import LiveStudentRecording from './pages/LiveStudentRecording';
import Score from './pages/ScorePage';

//Importing Components
import Menu from './Components/Menu';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
    <Menu>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Beats Mobile Application'}}
        />
        <Stack.Screen name="Teacher" component={LiveTeacherRecording} />
        <Stack.Screen name="Student" component={LiveStudentRecording} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
      </Menu>
    </NavigationContainer>
  );
};

export default MyStack