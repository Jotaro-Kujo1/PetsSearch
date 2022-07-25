import React from 'react'
import {render} from 'react-dom'
import {YMaps, Map, Placemark, SearchControl, useYMaps, GeolocationControl} from '@pbe/react-yandex-maps'
import Header from "../../components/Header";
import {Component} from 'react'
import * as PropTypes from "prop-types";


const mapData = {
    center: [59.1323, 37.9092],
    zoom: 10
};

const coordinates = [
    [59.12, 37.78],
    [61.12, 39.79]
];

const MapFunc = () => {
    return (
        <YMaps>
            <div>
                <Map defaultState={mapData}>
                    {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}

                    <SearchControl options={{
                        float:"right"
                    }}/>
                    <GeolocationControl options={{
                        float: "left"
                    }}/>
                </Map>
            </div>
        </YMaps>
    )
}

export default MapFunc;
