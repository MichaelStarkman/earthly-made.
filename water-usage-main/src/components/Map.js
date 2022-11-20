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
    const [zoom, setZoom] = useState(13);



    // const [storeMarker, setStoreMarker] = useState([])
    const storeMarker = useRef([])
    const storeInfo = useRef([])
    const [storeData, setStoreData] = useState([])


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-113, 33],
            zoom: zoom
        });


        const geocoder = new MapboxGeocoder({
            // Initialize the geocoder
            accessToken: mapboxgl.accessToken, // Set the access token
            mapboxgl: mapboxgl, // Set the mapbox-gl instance
            zoom: zoom, // Set the zoom level for geocoding results
            placeholder: 'Enter an address or place name', // This placeholder text will display in the search bar
            bbox: [-124.848974, 24.396308, -66.885444, 49.384358], // Set a bounding box

        });
        // Add the geocoder to the map
        map.current.addControl(geocoder, 'top-left'); // Add the search box to the top left
        const marker = new mapboxgl.Marker({ color: '#008000' })

        geocoder.on('result', async (event) => {
            // sets search result location as a variable
            const point = event.result.center;

            // console.log(event)

            // marker setting for search result

            // sets a marker on the search result location
            marker.setLngLat(point).addTo(map.current);

            storeMarker.current.forEach(marker => marker.remove())
            storeMarker.current = []
            storeInfo.current = []

            // console.log(point)

            // searches goodwills near area with a bordered box of .2 difference
            const goodwills = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/thrift+store.json?limit=20&bbox=${point[0] - .2}%2C${point[1] - .2}%2C${point[0] + .2}%2C${point[1] + .2}&proximity=${point[0]}%2C${point[1]}&types=poi&access_token=${mapboxgl.accessToken}`, { method: 'GET' })
            const goodwillsjson = await goodwills.json()
            // console.log(goodwillsjson)

            // sets markers for each goodwill
            // goodwillsjson.features.map(coordinate => {
            //     const marker = new mapboxgl.Marker({ color:'#008005' })
            //     return (
            //         marker.setLngLat(coordinate.center).addTo(map.current)
            //     )
            // })

            goodwillsjson.features.forEach(location => {
                const markee = new mapboxgl.Marker({ color: '#FFC0CB' })
                storeMarker.current = [...storeMarker.current, markee]
                markee.setLngLat(location.center).addTo(map.current)
                markee.getElement().addEventListener('click', () => {
                    console.log('click')
                    const popup = new mapboxgl.Popup({
                        // closeButton: false,
                        closeOnClick: false,
                        closeOnMove: true
                    })
                        .setLngLat(location.center)
                        .setHTML(`<p>${location.place_name}</p>`)
                        .addTo(map.current)
                })
                
                storeInfo.current = [...storeInfo.current, location.place_name]

                
            })






            // console.log(storeInfo.current)


            // marker.setLngLat(goodwillsjson.features[0].center).addTo(map.current)

            // const query = await fetch(`https://api.mapbox.com/v5/${goodwillsjson}/tilequery/${point[0]},${point[1]}.json?radius=${radius}&limit=${limit}&access_token=${mapboxgl.accessToken}`, { method: 'GET' });

            // const json = await query.json()
            // console.log(json)

            setStoreData(storeInfo.current.map(address => {
                return (
                    <div className='resultCard'>
                        <p>{address}</p>
                    </div>
                )
            }))
        })


        console.log(storeInfo.current)



        console.log(storeData)


    }, [storeData]);



    return (
        <div className='outerMapContainer'>
            <div ref={mapContainer} className='map-container' />
            <div className='sidebar'>
                <div>
                    <p>Test Result Card</p>
                </div>
                <div className='resultsBox'>
                    {storeData}
                </div>
            </div>
        </div>
    )

}

export default Map