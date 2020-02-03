import React from 'react';
import mapboxgl from 'mapbox-gl';
//import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as turf from '@turf/turf';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbm11NTg5OCIsImEiOiJjazYzeGFlNWUwZXJyM2tvOHBhZmh3bDg5In0.7ZmzdKH0kMJN9i5o3j7rzw';
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
let map;
let currentMarkers=[];

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.335167,
      lat: 47.608013,
      zoom: 10
    };
  }
  handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {   
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

addMarker = (point, style) => {
  var markerHeight = 50, markerRadius = 10, linearOffset = 25;
  var popupOffsets = {
  'top': [0, 0],
  'top-left': [0,0],
  'top-right': [0,0],
  'bottom': [0, -markerHeight],
  'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'left': [markerRadius, (markerHeight - markerRadius) * -1],
  'right': [-markerRadius, (markerHeight - markerRadius) * -1],
  
  };
  const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class', closeButton: false,
  closeOnClick: false})
  .setLngLat([point.lng, point.lat])
  .setHTML('<div style="display:flex;width:180px;align-items:center;justify-content:space-between;"><img src="' + point.imgURL + '" height="80" width="80" style="margin: 5px"/><h1>'+ point.name + '</h1></div>')
  .setMaxWidth("300px")
  .addTo(map);
    const marker = new mapboxgl.Marker(style);
    marker.setLngLat([point.lng, point.lat]).setPopup(popup).addTo(map);
    const markerDiv = marker.getElement();
    markerDiv.addEventListener('mouseenter', () => { if (!marker.getPopup().isOpen()) {marker.togglePopup()}});
    markerDiv.addEventListener('mouseleave', () => { if (marker.getPopup().isOpen()) {marker.togglePopup()}});
    currentMarkers.push(marker);
}

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { pointsInPlan, showRoute, selectedPoint, updatePlan, setUpdatePlan, setRouteObj } = this.props;
    // Could improve efficiency here? No need to update every marker and no need to update whenever render is called
    
    if (map.loaded()) {
      if (currentMarkers!==null) {
        for (let i = currentMarkers.length - 1; i >= 0; i--) {
          currentMarkers[i].remove();
        }
        currentMarkers = [];
      }
        // add markers
        if (selectedPoint) {
            this.addMarker(selectedPoint, {'color': 'rgba(0, 128, 0, 0.5)'});
        }   

        for (let i = 0; i < pointsInPlan.length; i++) {
            this.addMarker(pointsInPlan[i], {'color': 'rgb(0, 128, 0)'});
        }
        
        // add route
        if (showRoute) {
          // if plan is updated, fetch the new route
          if (updatePlan) {
            // set updatePlan to false until plan is actually updated
            setUpdatePlan(false);
            const url = "https://api.mapbox.com/directions/v5/mapbox/driving/" + pointsInPlan.map(o => {return [o.lng, o.lat]}).join(";") + "?overview=full&geometries=geojson&access_token=" + mapboxgl.accessToken;
            fetch(url)
            .then(this.handleResponse)
            .then(data => {
                //console.log(data);
                // If there is no route provided                
                if (!data.routes[0]) {
                    map.getSource('route')
                    .setData(turf.featureCollection([]));
                } else {
                    // Update the `route` source by getting the route source
                    // and setting the data equal to routeGeoJSON
                    setRouteObj(data);
                    const routeGeoJSON = turf.featureCollection([turf.feature(data.routes[0].geometry)]);
                    map.getSource('route')
                    .setData(routeGeoJSON);
                }
            })
            .catch (error => {
              console.log(error);
              map.getSource('route')
              .setData(turf.featureCollection([]));
            });
          }        
        } else {
            map.getSource('route')
            .setData(turf.featureCollection([]));
        }
    }
    

  }

  componentDidMount() {
    const { zoom } = this.state;
    const center = this.props.location;
    map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [center[0] - 0.1, center[1]],
      zoom
    });

    map.on('load', () => {
        map.addSource('route', {
            type: 'geojson',
            data: turf.featureCollection([]),
          });
          
          map.addLayer({
            id: 'routeline-active',
            type: 'line',
            source: 'route',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': [
                "interpolate",
                ["linear"],
                ["zoom"],
                12, 3,
                22, 12
              ]
            }
          }, 'waterway-label');

          map.addLayer({
            id: 'routearrows',
            type: 'symbol',
            source: 'route',
            layout: {
              'symbol-placement': 'line',
              'text-field': '▶',
              'text-size': [
                "interpolate",
                ["linear"],
                ["zoom"],
                12, 24,
                22, 60
              ],
              'symbol-spacing': [
                "interpolate",
                ["linear"],
                ["zoom"],
                12, 30,
                22, 160
              ],
              'text-keep-upright': false
            },
            paint: {
              'text-color': '#3887be',
              'text-halo-color': 'hsl(55, 11%, 96%)',
              'text-halo-width': 3
            }
          }, 'waterway-label');
          for (let i = 0; i < this.props.pointsInPlan.length; i++) {
            this.addMarker(this.props.pointsInPlan[i], {'color': 'rgb(0, 128, 0)'});
        }
    })

    // const geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl
    // });

    //map.addControl(geocoder, 'top-right');
    // const marker = new mapboxgl.Marker({'color': '#008000'})// Create a new green marker
    // geocoder.on('result', function(data) { // When the geocoder returns a result
    //   const point = data.result.center; // Capture the result coordinates
    //   console.log(data);
    //   marker.setLngLat(point).addTo(map); // Add the marker to the map at the result coordinates

    // });

  }

  render() {
    return (
        <div>
          <div className={"map-container"}>
            <div ref={el => this.mapContainer = el} className="absolute top right left bottom"/>
          </div>

        </div>
    );
  }
}

export default Map;
