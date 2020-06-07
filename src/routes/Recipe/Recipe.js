import React, {useState, useEffect, Fragment} from 'react'
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView, ActivityIndicator,  } from 'react-native'
import {Icon, Content} from 'native-base'
import * as Animatable from 'react-native-animatable';
import { Divider } from 'react-native-paper';
import axios from 'axios';
import { ProductConsumer } from '../../context';
import TopPicksCardComponent from '../Home/components/TopPicksCardComponent/TopPicksCardComponent';


const width = Dimensions.get("screen").width;


const Recipe = ({navigation, route}) => {
   
    
    
  
    
    const getRandomColor = () => {
        return 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + '0.9' +')';
    
    }

    return (
        <ProductConsumer>
            {
                (value)=> (
                    (value.loading == false)?

                        <View style={styles.container}>
                        <View style={styles.header}>
                            <ImageBackground
                                    animation="bounceIn"
                                    duration={15000}
                                    onAnimationEnd={()=> {} }
                            source={{
                                uri: value.recipeDetails.image
                            }}
                            style={styles.logo}
                            imageStyle={{
                                width: '100%',
                                height: '100%'
                            }}
                            >
                            
                            </ImageBackground>
                        </View>
                        <Animatable.View  
                        animation="fadeInUpBig"
                        style={styles.footer}>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            marginTop: 20,
                            marginLeft: 20
                        
                        }}>
                        {
                             (
                                <Fragment>
                                <Text style={styles.title}>{value.recipeDetails.title}</Text>
                            <Text style={styles.textSign}>{value.recipeDetails.creditsText}</Text>
                            <View style={{
                                marginTop: 15
                            }}>
                                <Divider></Divider>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 15
                            }}>
                                <Icon name="heart"  style={{
                                    color: '#d2d2d2',
                                    fontSize: 30
                                }}></Icon>
                                <Text style={{
                                    margin: 8,
                                    color: '#d2d2d2'
                                }}>{value.recipeDetails.aggregateLikes}</Text>

                                <Icon name="ios-clock" style={{
                                    color: '#d2d2d2',
                                    paddingHorizontal: 15
                                }}></Icon>
                                <Text style={{
                                    marginTop: 8,
                                    left: -6,
                                    color: '#d2d2d2'
                                }}>{value.recipeDetails.readyInMinutes}{"'"}</Text>

                                
                                <Text style={{
                                    color: `#5cccee`,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    margin: 5,
                                    paddingHorizontal: 15
                                }}>{value.recipeDetails.servings}{" "}{"servings"}</Text>
                            
                            </View>
                            <View style={{
                                marginTop: 15
                            }}>
                                <Divider></Divider>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}>

                                <TouchableOpacity onPress={()=> {
                                    value.setActiveIndex(0)
                                }} style={{
                                    
                                    marginTop: 20,
                                    marginRight: 40
                                }}>
                                    <Text style={{
                                        color: value.activeIndex == 0 ? `#5cccee` : '#d2d2d2',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}>Ingredients</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=> {
                                    value.setActiveIndex(1)
                                }} style={{
                                    
                                    marginTop: 20,
                                    marginRight: 40
                                }}>
                                    <Text style={{
                                        color: value.activeIndex == 1 ? `#5cccee` : '#d2d2d2',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}>Preparations</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=> {
                                    value.setActiveIndex(2)
                                }} style={{
                                    
                                    marginTop: 20,
                                    marginRight: 40
                                }}>
                                    <Text style={{
                                        color: value.activeIndex == 2 ? `#5cccee` : '#d2d2d2',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}>Others like this</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                position: 'absolute',
                                width: width * 0.9, 
                                bottom: height * 0.00,
                                height: height * 0.38
                            }}>
                            {
                                (value.activeIndex == 0) &&
                                <Content style={{
                                    marginTop: 25
                                }}>
                                <SafeAreaView>
                                    <View style={{
                                        flexDirection: 'column'
                                    }}>
                                    {
                                        (value.recipeDetails.extendedIngredients == false) ? <View style={{alignItems: 'center', justifyContent: 'center', flex:3}}>
                                    <ActivityIndicator size="large" color={getRandomColor()}></ActivityIndicator>
                                </View> :
                                        value.recipeDetails.extendedIngredients.map((element, index)=> (

                                        <View key={index} >
                                            <Text style={{
                                            color: `#5cccee`,
                                            fontSize: 15,
                                            fontWeight: 'bold'  
                                        }}>For {element.aisle}</Text>
                                            <Text style={{
                                            color: '#d2d2d2',
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                            paddingHorizontal: 15,
                                            marginTop: 5  
                                        }}>{element.original}</Text>
                                        <View style={{
                                                marginTop: 15
                                            }}>
                                                <Divider></Divider>
                                            </View>
                                        </View>
                                        ))
                                    }

                                    </View>
                                </SafeAreaView>
                                </Content>
                            }

                            {
                                (value.activeIndex == 1) &&
                                <Content style={{
                                    marginTop: 25,
                                    flexWrap: 'wrap'
                                }}>
                                <SafeAreaView>
                                    <View style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        padding: 10
                                    }}>
                                       
                                            <View style={{
                                                    marginTop: 15
                                                }}>
                                                    <Divider></Divider>
                                                </View>
                                                                        <View >
                                                                            <Text style={{
                                                                            color: `#5cccee`,
                                                                            fontSize: 15,
                                                                            fontWeight: 'bold'  
                                                                        }}>For Paired Wines</Text>
                                            
                            

                                                <Text style={styles.textSign}>{value.recipeDetails.winePairing.pairingText}</Text>
                                                <View style={{
                                                    marginTop: 15
                                                }}>
                                                    <Divider></Divider>
                                                </View>
                                                <Text style={{
                                                                            color: `#5cccee`,
                                                                            fontSize: 15,
                                                                            fontWeight: 'bold'  
                                                                        }}>For Instructions</Text>
                                                <Text style={styles.textSign}>{value.recipeDetails.instructions}</Text>
                                                                        </View>
                                   
                                    </View>
                                </SafeAreaView>
                                </Content>
                            }

                            {
                                (value.activeIndex == 2) &&
                                <Content style={{
                                    marginTop: 25
                                }}>
                                <SafeAreaView>
                                    <View style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap'
                                    }}>
                                    {
                                        (value.recipeDetails.productMatches == false) ? <View style={{alignItems: 'center', justifyContent: 'center', flex:3}}>
                                    <ActivityIndicator size="large" color={getRandomColor()}></ActivityIndicator>
                                </View> :
                                        value.recipeDetails.winePairing.productMatches.map((element, index)=> (

                                        <View key={index} style={{
                                            marginTop: (index % 2 === 0) ? 0 : 40
                                            }}>
                                            <TopPicksCardComponent navigation={navigation} title={element.title} id={element.id} image={element.image} ratings={element.averageRatings} price={element.price}></TopPicksCardComponent>
                                        
                                        </View>
                                        ))
                                    }

                                    </View>
                                </SafeAreaView>
                                </Content>
                            }

                            </View>
                                </Fragment>
                            )
                        }
                            
                        </View>
                        </Animatable.View>
                        
                    </View>: <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1
                    }}>
                        <ActivityIndicator size="large" color={getRandomColor()}></ActivityIndicator>
                    </View>
                )
            }
        </ProductConsumer>


    )
}

export default Recipe

const {height} = Dimensions.get("screen");
const height_logo = height * 0.48

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'transparent'
    },
    header:{
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
       
    },
    logo: {
        width: '112%',
        height: '112%'
    },
    title: {
        color: `#5cccee`,
        fontSize: 20,
        fontWeight: 'bold'
      
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
        color: '#d2d2d2',
        marginTop: 5,
        fontWeight: 'bold',
        flexWrap: 'wrap'
    }
});
