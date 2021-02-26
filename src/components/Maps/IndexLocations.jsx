import axios from 'axios';
import react, { useEffect, useState, useRef } from "react";
import Map from "./Map"


function IndexLocations() {
    const [compostLocation, setCompostLocation] = useState(null)
    const [mapData, setMapData] = useState([])
    const [viewport, setViewport] = useState({
        latitude: 40.7128,
        longitude: -74.0060,
        zoom: 9,
        width: "95vw",
        height: "45vh"
    })


    useEffect(() => {
        fetchData()
        console.log(mapData[0])
    }, [])

    const fetchData = async () => {
        const data = await axios('https://data.cityofnewyork.us/resource/if26-z6xq.json');
        setMapData(data.data);
    }


    return (
        <div>
            <Map
                compostLocation={compostLocation}
                setCompostLocation={setCompostLocation}
                mapData={mapData}
                viewport={viewport}
                setViewport={setViewport}
            />
        </div>
    )
}

export default IndexLocations
