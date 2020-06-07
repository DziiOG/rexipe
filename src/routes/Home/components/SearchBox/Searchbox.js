import React, { Component, Fragment } from 'react'
import { Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import { Icon, Right } from 'native-base';
import { ProductConsumer } from '../../../../context';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;


export default class Searchbox extends Component {






    render() {
        return (
            
            <ProductConsumer>
                {
                    (value)=> (

            <View style={{
                position: 'absolute',
                width: width,
                height: height * 0.08,
                backgroundColor: 'transparent',
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 15
                }}>
                {
                    value.modal == false ? 
                    <Fragment>

                        <TextInput placeholderTextColor="#000000" placeholder="Search Popular Foods" style={{
                            paddingHorizontal: 15,
                            fontSize: 25,
                            fontWeight: 'bold'
                        }}
                        onChangeText={()=>{}}
                        onFocus={()=>{value.openModal()}}

                        autoFocus={this.props.autoFocus}
                        ></TextInput>
                        <Right style={{
                            marginRight: 15
                        }}>
                        {

                        this.props.showCancel ? 
                        
                        <TouchableOpacity onPress={()=>{alert("You have been pressed Cancel")}}>
                            <Text>Cancel</Text> 
                        </TouchableOpacity>
                        
                        :
                        <TouchableOpacity onPress={()=>{alert("You have been pressed Search")}}>
                            <Icon name="search" size={30} style={{
                                color: "#000000"
                            }}></Icon>
                        </TouchableOpacity>
                        }
                        </Right>
                    </Fragment> : 
                    <Fragment>

                            <TextInput placeholderTextColor="#000000" placeholder="Search Popular Foods" style={{
                                paddingHorizontal: 19,
                                fontSize: 25,
                                fontWeight: 'bold'
                            }}
                            onChangeText={(val)=>{value.getSearchPredictions(val)}}
                            onFocus={()=>{}}

                            autoFocus={this.props.autoFocus}
                            ></TextInput>
                            <Right style={{
                                marginRight: 15
                            }}>
                            {

                            this.props.showCancel ? 

                            <TouchableOpacity onPress={()=>{value.closeModal()}}>
                                <Text>Cancel</Text> 
                            </TouchableOpacity>

                            :
                            <TouchableOpacity onPress={()=>{alert("You have been pressed Search")}}>
                                <Icon name="search" size={30} style={{
                                    color: "#000000"
                                }}></Icon>
                            </TouchableOpacity>
                            }
                            </Right>
                        </Fragment>
                }
                </View>
            </View>
                    )
                }
            </ProductConsumer>
        )
    }
}
