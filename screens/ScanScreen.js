import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity style={styles.scanButton} title="Bar Code Scanner">
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
    </View>
    );
}
}
/*getCameraPermissions=async()=>{
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions:status==="granted",
      buttonState:'clicked',
      scanned:false
    })
  }
  handleBarcodeScanned=async({type,data})=>{
    const {buttonState} = this.state;
    if(buttonState === 'clicked'){
      this.setState({
        scanned:true,
        scannedData:data,
        buttonState:'clicked'
      })
    }
    else{
    this.setState({
      scanned:true,
      scannedData:data,
      buttonState:'normal'
    })
  }
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontSize:20,
    textDecorationLine:'underline'
  },
  scanButton:{
    backgroundColor:'#2196F3',
    padding:10,
    margin:10
  },
});
