import React from 'react'
import {render} from 'react-dom'
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps'
import Header from "../../Components/Header";
import {Component} from 'react'


const MapFunc = () => {
    return (
        <YMaps>
            <div>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
        </YMaps>
    )
}

export default MapFunc;