import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import Constants from 'expo-constants';
import { ProductConsumer } from '../../../../context';
import { ActivityIndicator } from 'react-native-paper';


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

 function getRandomColor()
  {
      return 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + '0.2' +')';
  }

  function Item({ title, id, navigation }) {
      
    return (
        <ProductConsumer keyboardShouldPersistTaps={'always'}>
            {
                (value)=> (

                    <TouchableOpacity  keyboardShouldPersistTaps={'always'} onPress={()=> {navigation.navigate('RecipeStack')
                    value.getItemId(id);
                    
                    value.closeModal();
                    }} style={[styles.item, {backgroundColor: `${getRandomColor()}`

                    }
                    
                    ]}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text>
                            {id}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </ProductConsumer>
    );
  }

const SearchResultsComponent = ({navigation}) => {
    return (
        <ProductConsumer>
            {
                (value)=> (
                (value.predictions.length !== 0 ) ?

                (value.loading == true) ? 
                <View>
                    <ActivityIndicator size="large" color={getRandomColor()}></ActivityIndicator>
                </View> : 
                <View keyboardShouldPersistTaps={'always'} style={styles.container} >
                    <FlatList
                    keyboardShouldPersistTaps={'always'}
                    data={value.predictions}
                    renderItem={({ item }) => <Item  title={item.title} keyboardShouldPersistTaps={'always'} id={item.id} navigation={navigation}/>}
                    keyExtractor={item => item.id}
                    />
            </View > : 
            <SafeAreaView style={[styles.container, ]}>
                  <Text style={{
                padding: 20
            }}>No Search Result Found</Text>
            </SafeAreaView>
                )
            }
        </ProductConsumer>
    )
}

export default SearchResultsComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    item: {
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      height: height * 0.08
    },
    title: {
      fontSize: 18,
    },
    subtitle: {
        fontSize: 12
    }
  });