import React, { Component } from 'react'
import axios from 'axios';



const ProductContext = React.createContext();

 class ProductProvider extends Component {

    state = {
      modal: false,
      predictions: [],
      userInput: "",
      loading: false,
      randomRecipes: {},
      id: "",
      recipeDetails: {},
      activeIndex: 0
    }


    setActiveIndex = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    closeModal = () => {
        this.setState({
            modal: false,
           
        })
    }

    openModal= () => {
        this.setState({
            modal: true
        })
    }

    getItemId = (id) => {
        
            this.setState({
                loading: true
            })
        
            axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=33bbd6b40b7c4aaa9839a1a8e850de97&includeNutrition=false`).then((response)=> {
                this.setState({
                    recipeDetails: response.data,
                    loading: false
                })
                
            }).then((error)=> {
                console.log(error);
                this.setState({
                    loading: false
                })
              
            })
        
    }

    setRandom = () => {
        var arrayA = ['intolerance', 'vegetarian', 'dessert', 'diets', 'cuisines' ];

        return arrayA[Math.random().toFixed(0) * 5]
    }

    getRandomRecipes = () => {
        this.setState({
            loading: true
        })


        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=33bbd6b40b7c4aaa9839a1a8e850de97&number=20&tags=${this.setRandom()}`).then((response)=>{
            this.setState({
                randomRecipes: response.data,
                loading: false
            })
        }).catch((error)=>{
            console.log(error)
            this.setState({
                loading: false
            })
        })
    }

    getSearchPredictions = (val) => {
            this.handleChangeText(val);
            this.setState({
                loading: true
            })
        axios.get(`https://api.spoonacular.com/recipes/autocomplete?apiKey=33bbd6b40b7c4aaa9839a1a8e850de97&number=5&query=${this.state.userInput}`).then((response)=>{
            this.setState({
                predictions: response.data,
                loading: false
            })
        }).catch((error)=> {
            console.log(error);
            this.setState({
                loading: false
            })
        })
    }

    handleChangeText = (val) => {
        this.setState({
            userInput: val
        })
    }

    render() {
        return (
           <ProductContext.Provider
           value={{...this.state,
            closeModal: this.closeModal,
            openModal: this.openModal,
            getSearchPredictions: this.getSearchPredictions,
            getRandomRecipes: this.getRandomRecipes,
            getItemId: this.getItemId,
            setActiveIndex: this.setActiveIndex
           }}
           >
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}
