import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
  return (
    // Note: on GoogleMap the longitude mismatch (i.e. use of lon vs. lng)
    // is due to the JSON format in the Open Weather Map API
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
      />
  );
}
