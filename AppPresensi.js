import { View, Text, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import React,{Component,useState} from 'react';
import MapView, {Callout, Marker, Polygon}from 'react-native-maps';
import * as geolib from 'geolib';
import Geolocation from '@react-native-community/geolocation';

const areaPresensi =[
  {latitude:0.921038143981371,  longitude: 104.45393161140838},
  {latitude:0.9210490799791762, longitude: 104.45385641670917},
  {latitude:0.9209438502612526, longitude: 104.4538069723838},
  {latitude:0.9209451911924953, longitude: 104.45374662268311},
  {latitude:0.9208546783324933, longitude: 104.45374796378756},
  {latitude:0.9208392576227824, longitude: 104.45401283191836},
  {latitude:0.9209250772238039, longitude: 104.45401618467949},
  {latitude:0.9209351342081751, longitude:104.45387603926346},
];

class AppPresensi extends Component{

  state = {
    myLatidute: 0,
    myLongitude: 0,
  };

  _getCurentLocation(){
    Geolocation.getCurrentPosition(
      (pos) =>{
        const data = pos.coords;
        this.setState({myLatidute: data.latidute, myLongitude: data.longitude});
        console.log(this.state.myLatidute);
        console.log(this.state.myLongitude);
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {
      enableHighAccuracy: false,
      timeout: 30000,
       maximumAge:  1000 
      }
    );
  }

  _validateCurentLocation(){
    var checkLocation = geolib.isPointInPolygon(
      {
        latitude:this.state.myLatidute,
        longitude:this.state.myLongitude
    },
    areaPresensi
    );
    console.log(checkLocation);
    if (checkLocation == true){
      Alert.alert('posisi presensi anda valid. ');
    }else{
      Alert.alert('posisi presensi anda belum valid. Anda masih di luar area prsesensi')
    }
  }

  render() { 
    return ( 
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 0.9214624204281456,
            longitude: 104.45423805759988,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          mapType={'standard'}
          >
            <Marker
                title='Posisi Saya'
                coordinate={{latitude: this.state.myLatidute, longitude: this.state.myLongitude}}
            />
            <Polygon
                coordinates={areaPresensi}
                strokeColor="#f4f41d"
                fillColor="rgba(255,0,0,0.1)"
                strokeWidth={1}
            />
        </MapView>
        <Callout style={styles.buttonCallout}>
            <TouchableOpacity style={[styles.touchable]} onPress={() => this._validateCurentLocation()}>
                <Text style={styles.touchableText}>Validate MyPosition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchable]} onPress={() => this._getCurentLocation()}>
                <Text style={styles.touchableText}>Get MyPosition</Text>
            </TouchableOpacity>
        </Callout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    buttonCallout: {
        flex: 1,
        flexDirection:'column',
        position:'absolute',
        bottom:10,
        alignSelf: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        borderWidth: 0.5,
        borderRadius: 20,
    },
    touchable: {
        backgroundColor: "lightblue",
        padding: 10,
        margin: 10
    },
    touchableText: {
        fontSize: 24,
        textAlign: 'center',
        color: "black",
    },
  });

export default AppPresensi