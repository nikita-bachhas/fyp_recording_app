import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Importing Different Pages
import StartPage from './pages/Start';
import Home from './pages/Home';
import PrerecordedPage from './pages/Prerecorded';
import PrerecordedImitationPage from './pages/PrerecordedImitation';
import PrerecordedErrorPage from './pages/PrerecordedError';
import LiveTeacherRecording from './pages/LiveTeacherRecording';
import StudentRecording from './pages/StudentRecording';
import Score from './pages/Score';
import Settings from './pages/Settings';
// import DjangoTutorial from './pages/DjangoTutorial';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartPage"
          component={StartPage}
          // options={{title: 'Beats Mobile Application'}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name="PrerecordedPage" component={PrerecordedPage} options={{ headerShown: false}}/>
        <Stack.Screen name="PrerecordedImitationPage" component={PrerecordedImitationPage} options={{ headerShown: false}}/>
        <Stack.Screen name="PrerecordedErrorPage" component={PrerecordedErrorPage} options={{ headerShown: false}}/>
        <Stack.Screen name="Teacher" component={LiveTeacherRecording} options={{ headerShown: false}}/>
        <Stack.Screen name="Student" component={StudentRecording} options={{ headerShown: false}}/>
        <Stack.Screen name="Score" component={Score} options={{ headerShown: false}}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false}}/>
        {/* <Stack.Screen name="DjangoTutorial" component={DjangoTutorial} options={{ headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack