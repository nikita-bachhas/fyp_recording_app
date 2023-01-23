import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importing Different Pages
// import LoginStudentorTeacher from './pages/LoginPageStudentorTeacher';
// import Login from './pages/LoginPage';
// import SignUp from './pages/SignUpPage';
import LiveTeacherRecording from './pages/LiveTeacherRecording';
import StudentRecording from './pages/StudentRecording';
import Score from './pages/Score';
import PrerecordedPage from './pages/Prerecorded';
import Settings from './pages/Settings';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{title: 'Beats Mobile Application'}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Teacher" component={LiveTeacherRecording} options={{ headerShown: false}}/>
        <Stack.Screen name="Student" component={StudentRecording}/>
        <Stack.Screen name="Score" component={Score} />
        <Stack.Screen name="PrerecordedPage" component={PrerecordedPage} options={{ headerShown: false}}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack