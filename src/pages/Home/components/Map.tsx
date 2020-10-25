import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const Map = () => {
  const [map, setMap] = React.useState(null);

  const onLoad = (map: any) => {
    const bounds = new window['google'].maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD2S0b41rr_FFxW9rZuFz64dmWlUIuQP5Q">
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '25rem',
        }}
        center={{
          lat: -33.891095,
          lng: 151.249011,
        }}
        zoom={15}
      >
        <Marker
          position={{
            lat: -33.891095,
            lng: 151.249011,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};
