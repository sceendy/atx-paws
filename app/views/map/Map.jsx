import React from 'react';
import * as customMapStyles from './customMapStyles.json';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={9}
  defaultCenter={{ lat: 30.307182, lng: -97.755996 }}
  defaultOptions={{ styles: customMapStyles }}
>
  {<Marker position={{ lat: 30.307182, lng: -97.755996 }} />}
</GoogleMap>
))

export default MyMapComponent;