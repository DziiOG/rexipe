import React from 'react';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import {View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {Text} from 'native-base'

import { NavigationContainer } from '@react-navigation/native';
import Home from '../routes/Home/components/Home';


import { createStackNavigator } from '@react-navigation/stack';
import Recipe from '../routes/Recipe/Recipe';

const Stack = createStackNavigator();
const RecipeStack = createStackNavigator();

const Drawers = createDrawerNavigator();
//const Tab = createBottomTabNavigator();









function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/image.png')}
    />
  );
}







function MyDrawer({navigation}) {
  return (
    
          <NavigationContainer >
              <Drawers.Navigator  initialRouteName="Home"    drawerContent={(props)=> <CustomDrawerContent></CustomDrawerContent>}>
                <Drawers.Screen name="Home"  component={HomeStack} />
                <Drawers.Screen name="RecipeStack" component={RecipeStackScreen} />
              </Drawers.Navigator>
            </NavigationContainer>
          
     
  );
}




function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerTitle: "Categories",
      headerTitleAlign: 'left',
      headerTitleStyle: {fontSize: 40},
      
      headerRight: ((props)=> (  <Avatar.Image source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPMPR8kZTIDExkEf15iSImqhGt3R-I6Tp_gwOcQKHkRtIQVI1G&usqp=CAU'
                            }}
                            size={50}
                            >

                            </Avatar.Image>)),
      headerRightContainerStyle: {marginRight: 15, marginTop: 0 },
      headerStyle: {
        height: 70
      }
    }}>
     
      <Stack.Screen name="HomeComponent"  component={Home} />
    </Stack.Navigator>
  );
}

function RecipeStackScreen({navigation}) {
  return (
    <RecipeStack.Navigator screenOptions={{
      headerTitle: "",
      headerRight: ((props)=> (<Icon name="heart" size={30} style={{
        color: '#fff',

      }}></Icon>  )),
      headerRightContainerStyle: {marginRight: 15, marginTop: 0 },
      headerLeft: ((props)=> (
      <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>   
          <Icon name="arrow-left" size={30} style={{
            color: '#fff'
          }}></Icon>
      </TouchableOpacity>
      
      )),
      headerStyle: {
      
      },
      headerTransparent: true,
      headerLeftContainerStyle: {marginLeft: 15, marginTop: 0 },
    
    }}>
      <RecipeStack.Screen name="Recipe"  component={Recipe} />
    </RecipeStack.Navigator>
  );
}



function CustomDrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);  
      const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
}

  return (
    
      

    <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPMPR8kZTIDExkEf15iSImqhGt3R-I6Tp_gwOcQKHkRtIQVI1G&usqp=CAU'
                            }}
                            size={50}
                            >

                            </Avatar.Image>
                            <View style={{marginLeft: 15, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Text  style={styles.title}></Text>
                                
                            </View>
                        </View>

                        
                    </View> 
                    <Drawer.Section style={styles.drawerContent}>
                        <DrawerItem icon={({size}) => (
                                <Icon
                                    name="home-outline"
                                    color="#d2d2d2"
                                    size={size}
                                    >

                                </Icon>
                                
                                )} 
                                label="Home"
                                
                                onPress={()=> {props.navigation.navigate('Home')}}
                                >
                        </DrawerItem>
                       
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme}></Switch>
                                    </View>
                                </View>
                            </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({color, size}) => (
                    <Icon
                    name="exit-to-app"
                    color="#d2d2d2"
                    size={size}
                    >

                    </Icon>
                )} label="Sign Out"
                onPress={()=> {}}
                >

                </DrawerItem>
            </Drawer.Section>
        </View>
        
     
  );
}

/*

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Measurements"
          component={Measurements}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  };

*/







const styles = StyleSheet.create({
  drawerContent: {
      flex: 1,
  },
  userInfoSection: {
      paddingLeft: 20,
  },
  title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
  },
  caption: {
      fontSize: 14,
      lineHeight: 14,
  },
  row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
  },
  section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
  },
  paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
  },
  drawerSection: {
      marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 15,
  }
})




export default MyDrawer;