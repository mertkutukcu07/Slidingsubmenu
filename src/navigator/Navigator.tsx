import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Anasayfa from '../screens/Anasayfa';
import Sosyal from '../screens/Sosyal';
import Bülten from '../screens/Bülten';
import ikikirkbes from '../screens/ikikirkbes';
import Kuponlarım from '../screens/Kuponlarım';
import Images from '../constants/Images';
import Voleybol from '../screens/categories/Voleybol';
import BuzHokeyi from '../screens/categories/BuzHokeyi';
import Hentbol from '../screens/categories/Hentbol';
import UzunVadeli from '../screens/categories/UzunVadeli';
import mma from '../screens/categories/mma';
import Bültenim from '../components/Bultenim';
import Canli from '../components/Canli';
import MacOnu from '../components/MacOnu';
import MenuIcerik from '../components/Menuİcerik';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Anasayfa" component={Anasayfa} />
      <Stack.Screen name="Menuİcerik" component={MenuIcerik} />
      <Stack.Screen name="Voleybol" component={Voleybol} />
      <Stack.Screen name="BuzHokeyi" component={BuzHokeyi} />
      <Stack.Screen name="Hentbol" component={Hentbol} />
      <Stack.Screen name="UzunVadeli" component={UzunVadeli} />
      <Stack.Screen name="MMA" component={mma} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            activeBackgroundColor: 'black',
            inactiveBackgroundColor: 'black',
          }}>
          <Tab.Screen
            name="Anasayfa"
            component={HomeStack}
            options={{
              tabBarLabel: 'Anasayfa',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={Images.img.home} // Add the path to the relevant logo file here
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Sosyal"
            component={Sosyal}
            options={{
              tabBarLabel: 'Sosyal',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={Images.img.share} // Add the path to the relevant logo file here
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Bülten"
            component={Bülten}
            options={{
              tabBarLabel: 'Bülten',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={Images.img.hand} // Add the path to the relevant logo file here
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="2.45"
            component={ikikirkbes}
            options={{
              tabBarLabel: '2.45',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={Images.img.one} // Add the path to the relevant logo file here
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Kuponlarım"
            component={Kuponlarım}
            options={{
              tabBarLabel: 'Kuponlarım',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={Images.img.card} // Add the path to the relevant logo file here
                  style={{width: size, height: size, tintColor: color}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  slidingSubmenu: {
    position: 'absolute',
    bottom: 60, // Adjust the value to position it just above the bottom tab bar
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  submenuItem: {
    paddingHorizontal: 10,
  },
  submenuItemText: {
    color: 'white',
  },
});

export default Navigator;
