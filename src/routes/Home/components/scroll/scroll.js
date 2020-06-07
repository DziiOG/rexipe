import React from 'react';
import {View,Text,ImageBackground,Image,StyleSheet,TouchableOpacity, Dimensions} from 'react-native';
import * as Animated from 'react-native-animatable';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class Scroll extends React.Component{
    render(){
        return(
            <Animated.View animation={this.props.animation} duration={1200} style={[styles.memo1,{backgroundColor : this.props.bgcolor,}]}>
            <View style={{borderRadius: 30,}}>
                    <ImageBackground source={this.props.background} style={{width:'100%',height:'100%',}} imageStyle={{ borderRadius : 18}} >
                    <View style={{
                        position: 'absolute',
                        bottom: 0
                    }}>

                        <Text style={{
                            color: "#fff",
                            fontSize: 28,
                            margin: 15,
                            fontWeight: 'bold'
                            
                        }}>{this.props.name}</Text>
                    </View>
                    </ImageBackground>
            </View>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    memo1 : {
        flex : 1,
        margin : 10,
        borderRadius : 18,
    },
    insideone : {
        flex : 1,
        padding : 10
    },
    insidetwo : {
        flex : 2,
        marginVertical : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    insidethree : {
        flex : 1,
        alignItems : 'flex-end',
        justifyContent : 'flex-end',
        margin : 10
    }
})
