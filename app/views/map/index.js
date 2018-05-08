import React from 'react';
import customMapStyles from './customMapStyles.json';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const dogMarker = require('../../assets/dog-marker.svg');
const catMarker = require('../../assets/cat-marker.svg');
const dogMarkerSelected = require('../../assets/dog-marker-selected.svg');
const catMarkerSelected = require('../../assets/cat-marker-selected.svg');

export const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
  defaultZoom={11}
  defaultCenter={{ lat: 30.307182, lng: -97.755996 }}
  defaultOptions={{ styles: customMapStyles }}
  >
    { props.markerData.map((marker, i) => {
      return (
        <Marker
          onClick={() => props.onMarkerSelected(marker.id)}
          position={{ lat: marker.latitude, lng: marker.longitude }} 
          key={i}
          icon={{
            url: `../../assets/${marker.type}-marker${marker.id === props.selectedPet ? '-selected' : ''}.svg`
          }}
        />
    )})}
  </GoogleMap>
));

export default Map;