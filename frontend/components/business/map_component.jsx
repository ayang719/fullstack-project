import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';

class MapComponent extends React.Component {

    
    render() {
        return(
            <div className='map-comp-div'>
                <Map
                    className='bus-show-map'
                    google={this.props.google}
                    zoom={15}
                    // style={mapStyles}
                    center={{ lat: this.props.lat, lng: this.props.lng }}
                >
                    <Marker position={{lat: this.props.lat, lng: this.props.lng}}/>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDHJhUVPAnUvjM6AH4GZ_eaAVmSqfT3b6s'
})(MapComponent)