import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Keyboard, Modal, ActivityIndicator} from 'react-native';
import { Header, Container, Content } from 'native-base';
import Scroll from './scroll/scroll';
import Searchbox from './SearchBox/Searchbox';
import TopPicksCardComponent from './TopPicksCardComponent/TopPicksCardComponent';
import SearchResultsComponent from './SearchResultsComponent/SearchResultsComponent';
import { ProductConsumer } from '../../../context';
import Data from '../../../recipe';
import axios from 'axios'
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      loading: false,
      randomRecipes: []
    };
  }

  componentDidMount(){
  this.getRandomRecipes();

  console.log(this.setRandom())
  }

  setRandom = () => {
    var arrayA = ['vegetarian', 'dessert',];

    return arrayA[Math.random().toFixed(0) * 1]
}

getRandomRecipes = () => {
    this.setState({
        loading: true
    })


    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=33bbd6b40b7c4aaa9839a1a8e850de97&number=20&tags=`).then((response)=>{
        this.setState({
            randomRecipes: response.data,
            loading: false
        })

        console.log(this.state.randomRecipes)
    }).catch((error)=>{
        console.log(error)
        this.setState({
            loading: false
        })
    })
}

  getRandomColor = () =>
  {
      return 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + '0.9' +')';
  }


  getAllKey = () => {
    array1 = []
const iterator = Data.recipes.values();

for (const value of iterator) {
  array1.push(value);
} 
console.log(array1);
  }

  render() {
    return (
      <ProductConsumer>
        {
          (value) => (

        
        <Container style={{
          backgroundColor: '#fff'
        }}>
        <View style={ {
          height : height * 0.36,
          position : 'absolute',
          width:'100%',
          marginLeft : 5,
          backgroundColor: 'transparent',
          marginTop: 30, 
          
      }}>
  
            <ScrollView 
                                horizontal={true} 
                                contentContainerStyle={{width:'200%'}}
                                showsHorizontalScrollIndicator={false}>
                                    <Scroll bgcolor="#5cccee" 
                                    background={require('../../../assets/cuisine.png')}
                                    animation = "bounceInLeft"
                                    name="Cuisines"
                                    />
                                    <Scroll bgcolor="#5cccee" 
                                    background={require('../../../assets/dessert.png')}
                                    animation = "bounceInLeft"
                                    name="Desserts"
                                    />
                                    <Scroll bgcolor="#5cccee" 
                                    background={require('../../../assets/diet.png')}
                                    name="Diet"
                                    />
                                    <Scroll bgcolor="#5cccee" 
                                    background={require('../../../assets/vegan.png')}
                                    name="Vegan"
                                    />
                           
                                  
              </ScrollView>
            
        </View>
              <View style={{
                position: 'absolute',
                bottom: height * 0.5,
                
              }} >
                <Searchbox></Searchbox> 
              </View>
              <View  style={{
                position: 'absolute',
                bottom: height * 0.0,
                backgroundColor: 'transparent',
                width: width,
                height: height * 0.42
              }}>
                <Content >
                <View style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}>
                {
                  (this.state.loading == false) ?
                  (this.state.randomRecipes == false) ? <View style={{alignItems: 'center', justifyContent: 'center', flex:3}}>
                    <ActivityIndicator size="large" color={this.getRandomColor()}></ActivityIndicator>
                  </View> :
                  this.state.randomRecipes.recipes.map((element, index)=> (
                    <View key={index} style={{
                      marginTop: (index % 2 === 0) ? 0 : 40
                    }}>
                    <TopPicksCardComponent navigation={this.props.navigation} title={element.title} id={element.id} image={element.image} ratings={element.aggregateLikes} price={element.pricePerServing}></TopPicksCardComponent>
                </View>
                  )) : <View style={{alignItems: 'center', justifyContent: 'center', flex:3}}>
                    <ActivityIndicator size="large" color={this.getRandomColor()}></ActivityIndicator>
                  </View>
                  
                }
                   
                </View>
                  </Content>
              </View>
              <Modal visible={value.modal} animationType="slide">
                    <Searchbox showCancel={true} autoFocus={true}></Searchbox>
                    <View style={{            
                      marginTop: 50,
                      height: height * 0.8
                    }}>
                    <SearchResultsComponent navigation={this.props.navigation}></SearchResultsComponent>                     
                    </View>
              </Modal>
  
        </Container>
      
          )
        }
      </ProductConsumer>
            
    

    );
  }
}

export default Home;
