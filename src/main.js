import React, { Component } from 'react'
import AppContainer from "./AppContainer";
import { SafeAreaView } from 'react-native';


export default class Root extends Component {
    renderApp(){
    

        return (
            
           <AppContainer></AppContainer>
        )
    }

    render(){
        return this.renderApp();
    }
}
