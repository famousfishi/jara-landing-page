import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };
  const defaultCenter = {
    lat: 6.4318307,
    lng: 3.4605286,
  };
  return (
    <LoadScript googleMapsApiKey='AIzaSyB48y9CEUoKaKFEjVSJdLujCvSDFm1XVWE'>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
    </LoadScript>
  );
};

export default MapContainer;
