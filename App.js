import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/Home'
import Second from './screens/Second'
import Modal from './screens/Modal'
import MenuOne from './screens/MenuOne';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MenuScreens() {
  return(
    <Drawer.Navigator initialRouteName="MenuOne" screenOptions={{headerShown:false}}>
      <Drawer.Screen name="MenuOne" component={MenuOne} />
      <Drawer.Screen name="Second" component={Second} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="MenuScreens"
          component={MenuScreens}>
        </Stack.Screen>
        <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
          <Stack.Screen name='Modal' component={Modal} />
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style='dark' />
    </NavigationContainer>
  );
}

/*
Graveyard

<Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Group>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name='Second' component={Second} />
  </Stack.Group>
  <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
    <Stack.Screen name='Modal' component={Modal} />
  </Stack.Group>
</Stack.Navigator>
*/