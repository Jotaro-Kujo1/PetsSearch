import React, {Component} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import './style.css';
import L from 'leaflet';




L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";


export const MapLeaflet = () => {
    const state = {
        lat: 59.12058163487952,
        lng: 37.93101910549927,
        zoom: 10
    }

    const data = [
        [59.08571869271766,37.920858673493846],
        [59.09390737257021,37.92345923002168],
        [59.123070571879545,37.99804260829917],
        [59.12056530210493,37.93108361957637]
    ]



    var center = [state.lat, state.lng];

    let elements = Array.isArray(data) ? data.map(record =>
        <>
        <Marker position={record} >
            <Popup>Сдесь живёт кускусище</Popup>
        </Marker>
        </>
    ) : console.log(data.type);

    return (
        <>

        <MapContainer zoom={state.zoom} center={center}>
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {elements}
        </MapContainer>
        </>
    )

}