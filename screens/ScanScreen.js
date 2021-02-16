import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }
render(){
    return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
    </View>
    );
}
}
getCameraPermissions=async()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions:status==="granted",
      buttonState:'clicked',
      scanned:false
    })
  }
  handleBarcodeScanned=async({type,data})=>{
    const {buttonState} = this.state;
    if(buttonState === "BookId"){
      this.setState({
        scanned:true,
        scannedData:data,
        buttonState:'normal'
      })
    }
    else if(buttonState === "StudentId"){
    this.setState({
      scanned:true,
      scannedData:data,
      buttonState:'normal'
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
