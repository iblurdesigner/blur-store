import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  }

  const defaultCenter = {
    lat: -0.21590269194855435,
    lng: -78.50853209402081,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyBzLM2CNqT0DZGEl8ANyT9W9t18sSKxA54">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
