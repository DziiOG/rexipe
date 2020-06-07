import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import { Icon } from 'native-base';
import { ProductConsumer } from '../../../../context';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export class TopPicksCardComponent extends Component {
   
    render() {
    console.log(this.props.id + "from top Card")
        return (
            <ProductConsumer>
                {
                    (value)=> (

            <TouchableOpacity style={{
                flexDirection: 'column',
                backgroundColor: '#transparent',
                height:height * 0.32,
                width: width * 0.42,
                borderRadius: 23,
                borderWidth: 0.3,
                margin: 15
            }}
            
             onPress={()=> {this.props.navigation.navigate('RecipeStack',)
              value.getItemId(this.props.id)
             }}
            >
                <View style={{
                    backgroundColor: '#transparent',
                    height: '40%',
                    width: '88%',
                    margin: 10
                }}>
                    <ImageBackground style={{
                      width: '100%',
                      height: '100%'          
                    }} source={{
                        uri: this.props.image
                    }}
                    imageStyle={{
                        borderRadius: 23
                    }}
                    >
                     <View style={{
                    backgroundColor: 'transparent',
                    height:  20,
                    marginTop: 75,
                    paddingHorizontal: 8
                     
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#00ff00',
                        height: height * 0.043,
                        borderRadius: 15,
                        width: width * 0.14,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        
                    }}>{(this.props.ratings/30 * 5).toFixed(1)}</Text>
                    </TouchableOpacity>
                </View>
                        
                    </ImageBackground>

                </View>
                   
                <View style={{
                    backgroundColor: '#transparent',
                    height: height * 0.09,
                    width: width * 0.33
                }}>
                    <Text style={{
                        padding: 15,
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>
                       {this.props.title}
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'transparent',
                    height: height * 0.07,
                    borderBottomLeftRadius: 23,
                    borderBottomRightRadius: 23
                }}>
               <Text style={{
                   margin: 8,
                   color: "#00ff00",
                   fontSize: 18
               }}>{"$"}{this.props.price}</Text>
                    
                </View>
            </TouchableOpacity>
                    )
                }
            </ProductConsumer>
        )
    }
}



export default TopPicksCardComponent;
