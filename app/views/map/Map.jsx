import React from 'react';
import customMapStyles from './customMapStyles.json';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 30.307182, lng: -97.755996 }}
    defaultOptions={{ styles: customMapStyles }}
  >
    { props.markerData.map((marker, i) => {
      return (
        <Marker 
          position={{ lat: marker.latitude, lng: marker.longitude }} 
          key={i}
          icon={{
            url: marker.typeUrl
          }}
        />
    )})}
  </GoogleMap>
));

export default Map;