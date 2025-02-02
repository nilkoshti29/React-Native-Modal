import React, { Component } from 'react';
//import react in our code. 
 
import { Modal, Button, View,Text, StyleSheet } from 'react-native';
//import all the components we are going to use. 
 
export default class App extends Component {
  state = {
    isVisible: false, //state of modal default false
  }
  render() {
    return (
      <View style = {styles.container}>
        <Modal animationType = {"slide"} transparent = {false}
            visible = {this.state.isVisible}
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
            <View style = {styles.modal}>
              <Text style = {styles.text}>Modal is open!</Text>
              <Button title="Click To Close Modal" onPress = {() => {
                  this.setState({ isVisible:!this.state.isVisible})}}/>
            </View>
        </Modal>
        {/*Button will change state to true and view will re-render*/}
        <Button 
           title="Click To Open Modal" 
           onPress = {() => {this.setState({ isVisible: true})}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop:30
  },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#00ff00',
      padding: 100
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
});