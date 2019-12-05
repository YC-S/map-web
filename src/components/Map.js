import React from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as turf from '@turf/turf';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
let map;
let currentMarkers=[];
class Map extends React.Component {
  state = {
    lng: -122.335167,
    lat: 47.608013,
    zoom: 10
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
    const marker = new mapboxgl.Marker(style);
    marker.setLngLat([point.lng, point.lat]).addTo(map);
    currentMarkers.push(marker);
}

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { pointsInPlan, showRoute, selectedPoint } = this.props;
    // Could improve efficiency here? No need to update every marker and no need to update whenever render is called
    if (currentMarkers!==null) {
      for (let i = currentMarkers.length - 1; i >= 0; i--) {
        currentMarkers[i].remove();
      }
      currentMarkers = [];
    }
    if (map.loaded()) {
        // add markers
        if (selectedPoint) {
            this.addMarker(selectedPoint, {'color': 'rgba(0, 128, 0, 0.5)'});
        }
        
        for (let i = 0; i < pointsInPlan.length; i++) {
            this.addMarker(pointsInPlan[i], {'color': 'rgb(0, 128, 0)'});
        }
        
        // add route
        if (showRoute) {
            fetch("https://api.mapbox.com/optimized-trips/v1/mapbox/driving/" + pointsInPlan.map(o => {return [o.lng, o.lat]}).join(";") + "?overview=full&geometries=geojson&source=first&destination=any&roundtrip=true&access_token=" + mapboxgl.accessToken)
            .then(this.handleResponse)
            .then(data => {
                console.log(data);
                var routeGeoJSON = turf.featureCollection([turf.feature(data.trips[0].geometry)]);
                // If there is no route provided, reset
                
                if (!data.trips[0]) {
                    routeGeoJSON = turf.featureCollection([]);
                } else {
                    // Update the `route` source by getting the route source
                    // and setting the data equal to routeGeoJSON
                    map.getSource('route')
                    .setData(routeGeoJSON);
                }
            })
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
    })

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });

    //map.addControl(geocoder, 'top-right');

    const marker = new mapboxgl.Marker({'color': '#008000'})// Create a new green marker
    geocoder.on('result', function(data) { // When the geocoder returns a result
      const point = data.result.center; // Capture the result coordinates
      console.log(data);
      marker.setLngLat(point).addTo(map); // Add the marker to the map at the result coordinates

    });

  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
        <div>

          {/*<div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">*/}
          {/*  /!*<div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>*!/*/}
          {/*</div>*/}
          <div className={"map-container"}>
            <div ref={el => this.mapContainer = el} className="absolute top right left bottom"/>
          </div>

        </div>
    );
  }
}

export default Map;