import './style.css';
import MapFunc from "./MapFunc";
import {useEffect, useState} from "react";

export const MapPet = () => {
    const [ans, setAns] = useState([]);





    const queryToYandex = async () => {
        let res;
        res = await fetch("https://geocode-maps.yandex.ru/1.x/?apikey=a66d81e4-fd08-4377-b69e-0759eb4ce555&format=json&geocode=Окинина+12");
        const data = await res.json();
        console.log(data);
        console.log(JSON.stringify(data));
        let test1 = data["response"];
        let test2 = test1["GeoObjectCollection"];
        let test3 = test2["featureMember"];
        let test4 = test3[0];
        let test5 = test4["GeoObject"];
        let test6 = test5["Point"];
        let result = test6["pos"];
        setAns(result.split(' '));
        console.log(result.split(' '));


    }

    useEffect(()=>{
        queryToYandex();
    },[]);

    return (
        <>
            <div className="map">
                <MapFunc data={ans}/>
            </div>
            </>
        );
    }
