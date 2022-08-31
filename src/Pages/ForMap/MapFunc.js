import React from 'react'
import {YMaps, Map, Placemark, SearchControl, GeolocationControl} from '@pbe/react-yandex-maps'
import img from './zoo.png';



const mapData = {
    center: [59.12058163487952,37.93101910549927],
    zoom: 13
};




const MapFunc = (props) => {
    var dataArr = props.data;
    let tmp = dataArr[0];
    console.log(dataArr)

    var coord = [];
    var counter = 0;
    for(var i=0;i<(dataArr.length)/2;i++){
        coord.push([dataArr[counter], dataArr[counter+1]]);
        counter +=2;
    }


    return (
        <YMaps
        query={{
            ns: "use-load-option",
            apikey: "a66d81e4-fd08-4377-b69e-0759eb4ce555"
        }}>
            <div>
                <Map defaultState={mapData} width="1000px" height="700px">
                    {coord.map(coordinate => <Placemark geometry={
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
