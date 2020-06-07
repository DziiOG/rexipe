import React, { Component } from 'react'
import MyDrawer from '../navigators/DrawerNavigator';
import { ProductProvider } from '../context';
import { Root, View } from 'native-base';







export default class AppContainer extends Component {
    render() {
        return (
            
                    <ProductProvider>
                        <Root>
                                <MyDrawer></MyDrawer>
                        </Root>
                    </ProductProvider>
        )
    }
}

/*
<MyDrawer></MyDrawer>
                    <MyTabs></MyTabs>
*/

