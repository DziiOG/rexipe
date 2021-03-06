import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base'
import * as Animatable from 'react-native-animatable';

export class SplashScreen extends Component {

    

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Animatable.Image
                            animation="bounceIn"
                            duration={15000}
                            onAnimationEnd={()=> {} }
                    source={require('../../../assets/tits.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                    ></Animatable.Image>
                </View>
                <Animatable.View  
                animation="fadeInUpBig"
                style={styles.footer}>
                    <Text style={styles.title}>Stay connected with everyone</Text>
                    <Text style={styles.title}>Sign in with account</Text>
                    <View style={styles.button}>

                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignInScreen')}}>
                            <LinearGradient colors={["rgba(90, 93, 165, 1)","rgba(0, 0, 0, .7)"]}
                            style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {marginRight: 5} ]}>Get Started</Text>
                                <Icon
                                name="ios-arrow-dropright"
                                color="#fff"
                                size={20}
                                >

                                </Icon>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                
            </View>
        )
    }
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgba(90, 93, 165, 1)'
    },
    header:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'rgba(90, 93, 165, 1)',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});





