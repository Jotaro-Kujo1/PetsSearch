import {Component} from "react";
import './style.css';
import MapFunc from "./MapFunc";
import {MapLeaflet} from './MapLeaflet';
import flag from './ruspng.png';

export default class Map extends Component {
    render() {
        return (
            <>
            <div className="map">
                <MapLeaflet/>
            </div>
            </>
        );
    }
}