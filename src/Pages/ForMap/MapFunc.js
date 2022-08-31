import React from 'react'
import {YMaps, Map, Placemark, SearchControl, GeolocationControl} from '@pbe/react-yandex-maps'
import img from './zoo.png';



const mapData = {
    center: [59.12058163487952,37.93101910549927],
    zoom: 13
};




const MapFunc = (props) => {
    const dataArr = props.data.reverse();
    for(var i=0;i<dataArr.length;i++){
        dataArr[i] = parseFloat(dataArr[i]);
    }
    console.log(dataArr);


    const coordinates = [
        [dataArr[1],dataArr[0]],

    ];

    return (
        <YMaps
        query={{
            ns: "use-load-option",
            apikey: "a66d81e4-fd08-4377-b69e-0759eb4ce555"
        }}>
            <div>
                <Map defaultState={mapData} width="1000px" height="700px">
                    {coordinates.map(coordinate => <Placemark geometry={
                        coordinate
                    }options={{
                        iconLayout: 'default#image',
                        iconImageHref: img,
                    }}
                    />)}

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
