import React from 'react';
import '../App.css';

import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  google
} from "react-google-maps";

const defaultMapOptions = {
   disableDefaultUI: true,
 };

 const handleToggle = () => {
 this.setState({
   isOpen: !false
 });
 }

const _ = require("lodash");
const MapWithASearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJbpjI8KS7fzlHYDjIBeOL8TkPfEhXUSk&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style = {{ height: `100vh` }} />,
    containerElement: <div style = {{ height: `100vh` }} />,
    mapElement: <div style = {{ height: `100vh` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 41.9, lng: -87.624
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },

        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,

          });

        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)
(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={14}
    center={{lat: 10.7202, lng: 122.5621 }}
    defaultOptions={defaultMapOptions}
    >
    {props.isMarkerShown && (
      <Marker position={{ lat: 10.7202, lng: 122.5621 }} />
    )}
   {props.isMarkerShowns && (
      <Marker position={{ lat: 10.7244, lng: 122.5573}} />
    )}
    {props.MarkerShowns && (
      <Marker position={{ lat: 10.7146, lng: 122.5516 }} />
      )}


  </GoogleMap>
);


const StoreLocator = () => (
  <div id = "store-locator-section" className = "h-100">
  <div className = "row mx-0 h-100">
    <div className="col-xl-9 col-lg-9 col-md-7 col-12 col-sm-12 px-0 map-section">
        <MapWithASearchBox isMarkerShowns isMarkerShown MarkerShowns/>
        <div className="input-group mb-3 map-search-overlay d-md-none">
          <input type="text" className="form-control" placeholder="Search function to be added soon" aria-label="Map Search Box" aria-describedby="button-search" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
          </div>
        </div>
    </div>
    <div className ="col-xl-3 col-lg-3 col-md-5 col-12 col-sm-12 store-text">
       <div className = "store-search-box d-none d-md-block">
         <p className = "h1">Store Locator</p>
           <div className="form-group">
             <form>
              <input type="text" placeholder ="Search function to be added soon" id="search" name="search" className ="form-control" disabled/>
             </form>
           </div>
         </div>
       </div>
    </div>
  </div>
)

export default StoreLocator;
