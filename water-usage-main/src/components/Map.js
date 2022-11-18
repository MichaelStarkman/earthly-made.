import React, { useRef, useEffect, useState } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-113.9);
    const [lat, setLat] = useState(33);
    const [zoom, setZoom] = useState(9);

    // marker setting for search result location
    const marker = new mapboxgl.Marker({ color:'#008000' })

    // setup for possible tilequery search
    const radius = 4828032
    const limit = 10


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        const geocoder = new MapboxGeocoder({
            // Initialize the geocoder
            accessToken: mapboxgl.accessToken, // Set the access token
            mapboxgl: mapboxgl, // Set the mapbox-gl instance
            zoom: 13, // Set the zoom level for geocoding results
            placeholder: 'Enter an address or place name', // This placeholder text will display in the search bar
            // bbox: [(lng - .3), (lng + .3), (lat - .3), (lat + .3)] // Set a bounding box
        });
        // Add the geocoder to the map
        map.current.addControl(geocoder, 'top-left'); // Add the search box to the top left



        geocoder.on('result', async (event) => {
            // sets search result location as a variable
            const point = event.result.center;

            // sets a marker on the search result location
            marker.setLngLat(point).addTo(map.current);

            // console.log(point)

            // searches goodwills near area with a bordered box of .2 difference
            const goodwills = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/goodwill.json?bbox=${point[0]-.2}%2C${point[1]-.2}%2C${point[0]+.2}%2C${point[1]+.2}&proximity=${point[0]}%2C${point[1]}&types=poi&access_token=${mapboxgl.accessToken}`, {method: 'GET'})
            const goodwillsjson = await goodwills.json()
            console.log(goodwillsjson.features[0].center)

            // sets markers for each goodwill
            goodwillsjson.features.map(coordinate => {
                const marker = new mapboxgl.Marker({ color:'#008005' })
                return (
                    marker.setLngLat(coordinate.center).addTo(map.current)
                )
            })

            // marker.setLngLat(goodwillsjson.features[0].center).addTo(map.current)

            // const query = await fetch(`https://api.mapbox.com/v5/${goodwillsjson}/tilequery/${point[0]},${point[1]}.json?radius=${radius}&limit=${limit}&access_token=${mapboxgl.accessToken}`, { method: 'GET' });

            // const json = await query.json()
            // console.log(json)
        })

        


    });



    return (
        <div>
            <div ref={mapContainer} className='map-container' />
        </div>
    )

}

export default Map