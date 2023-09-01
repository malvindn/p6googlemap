import React, { Component } from 'react';
import { StyleSheet, View,Image } from 'react-native';
import MapView, {Marker, Polygon, Polyline, Circle} from 'react-native-maps';

class App extends Component {
  render() { 
    return ( 
      // untuk pertemuan 2
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 0.92804769639356,
            longitude: 104.44775090441074,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          mapType={'standard'}>
        {/*  marker  */}
        <Marker
        coordinate={{latitude: 0.92151510057338 ,longitude: 104.45412966965323}}
        title={'kampus STTI Tanjungpinang'}
        description={'Jl.Pompa Air No.28, Kota Tanjung Pinang, Kepulauan Riau'}
        image={require('./src/assets/1853606-200.png')}
        />

        {/* polygon */}
        <Polygon
        coordinates={[
          {latitude:0.921038143981371, longitude: 104.45393161140838},
          {latitude:0.9210490799791762 , longitude: 104.45385641670917},
          {latitude:0.9209438502612526,  longitude: 104.4538069723838},
          {latitude:0.9209451911924953,  longitude: 104.45374662268311},
          {latitude:0.9208546783324933, longitude: 104.45374796378756 },
          {latitude:0.9208392576227824, longitude: 104.45401283191836 },
          {latitude:0.9209250772238039,  longitude: 104.45401618467949},
          {latitude:0.9209351342081751,  longitude:104.45387603926346},
        ]}
        strokeColor="#000"
        fillColor="rgba(255,0,0,0,1)"
        strokeWidth={1}
        />
        {/* untuk membuat garis */}
        <Polyline
        coordinates={[
          {latitude:0.9214359408818444, longitude:104.45424469480297},
          {latitude:0.9208864070096142,  longitude:104.45418317186724},
          {latitude:0.9208882016142479,   longitude:104.4540208785451},
        ]}
        strokeColor="#000"
        fillColor="rgba(255,0,0,0,0.5)"
        strokeWidth={5}
        />
        {/* untuk membuat lingkaran */}
        <Circle
         center={{
          latitude: 0.9209002699955976, 
          longitude: 104.45385592269658,
         }}
         radius={20}
         strokeColor="#000"
         fillColor="rgba(255,0,0,0.2)"
         strokeWidth={3}
        />
        </MapView>
      </View>
    );
  }
}

export default App;