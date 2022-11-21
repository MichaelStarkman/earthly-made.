import '../Map.css'
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
    const [show, setShow] = useState(false)


    const handleExpand = () => {show ? setShow(false) : setShow(true)}

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

            // sets a marker on the search result location
            marker.setLngLat(point).addTo(map.current);

            storeMarker.current.forEach(marker => marker.remove())
            storeMarker.current = []
            storeInfo.current = []


            // searches goodwills near area with a bordered box of .2 difference
            const goodwills = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/thrift+store.json?limit=20&bbox=${point[0] - .2}%2C${point[1] - .2}%2C${point[0] + .2}%2C${point[1] + .2}&proximity=${point[0]}%2C${point[1]}&types=poi&access_token=${mapboxgl.accessToken}`, { method: 'GET' })
            const goodwillsjson = await goodwills.json()
            console.log(goodwillsjson)

            goodwillsjson.features.forEach(location => {
                const markee = new mapboxgl.Marker({ color: '#FFC0CB' })
                storeMarker.current = [...storeMarker.current, markee]
                markee.setLngLat(location.center).addTo(map.current)
                const regexTitle = location.place_name.match(/^([^,])+/g).toString()
                const stringAddress = location.place_name.substring(location.place_name.indexOf(',') + 2)

                markee.getElement().addEventListener('click', () => {
                    console.log('click')
                    const popup = new mapboxgl.Popup({
                        closeOnClick: false,
                        closeOnMove: true
                    })
                        .setLngLat(location.center)
                        .setHTML(`
                            <p>${regexTitle}</p>
                            <p>${stringAddress}</p>
                        `)
                        .addTo(map.current)
                })
                
                // storeInfo.current = [...storeInfo.current, location.place_name]
                storeInfo.current = [...storeInfo.current, [regexTitle, stringAddress]]
            })


            setStoreData(storeInfo.current.map(address => {
                return (
                    <div className='resultCard'>
                        <p className='text-dark fw-semibold'>{address[0]}</p>
                        <p className='text-dark'>{address[1]}</p>
                    </div>
                )
            }))
        })



    }, [storeData]);


    return (
        <div id='map' className='outerMapContainer'>
            <div ref={mapContainer} className='map-container' />
            <h1 className='fs-3 fw-normal pt-4'>{storeData.length !== 0 ? 'Results' : ''}</h1>
            <div className={`${storeData.length !== 0 ? 'sidebar' : ''}  ${show ? 'sidebarExpanded' : ''}`}>
                <div className='resultsBox'>
                        {storeData}
                </div>
                <button className={`${storeData.length !== 0 ? '' : 'hidden'}`} onClick={handleExpand}><u>{show ? 'Show Less' : 'Show More'}</u></button>
                
            </div>
        </div>
    )

}

export default Map