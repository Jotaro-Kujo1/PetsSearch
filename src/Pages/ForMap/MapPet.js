import './style.css';
import MapFunc from "./MapFunc";
import {useEffect, useState} from "react";


export const MapPet = () => {
    const [ans, setAns] = useState([]);
    const [adr,setAdr] = useState([]);
    const [newDataArr,setNewDataArr] = useState([]);
    const[description,setNewDescription] = useState([]);


    const arrTreatment = (arr) => {
        let tmpArr = [];
        var counter = 0;
        for(var i=0;i<arr.length;i++){
            let tmp = arr[i];
            tmpArr[counter] = parseFloat(tmp[0]);
            tmpArr[counter+1] = parseFloat(tmp[1]);
            let left = tmpArr[counter];
            let right = tmpArr[counter+1];
            tmpArr[counter] = right;
            tmpArr[counter+1] = left;
            counter += 2;
        }
        setNewDataArr(tmpArr);
    }


    const queryToYandex = async () => {
        let res;
        res = await fetch("http://localhost:8080/posts/getAllPosts");
        const data = await res.json();
        for(var i=0;i<data.length;i++){
            let tmp = data[i];
            adr.push(tmp["address"]);
            description.push(tmp["description"]);
        }



        for(var j =0;j<adr.length;j++){
            let tmpArr = adr[j].split(' ');
            let res;
            res = await fetch("https://geocode-maps.yandex.ru/1.x/?apikey=a66d81e4-fd08-4377-b69e-0759eb4ce555&format=json&geocode=Череповец,+" + tmpArr[0] + "+" + tmpArr[1]);
            const data = await res.json();
            //console.log(data);
            //console.log(JSON.stringify(data));
            let test1 = data["response"];
            let test2 = test1["GeoObjectCollection"];
            let test3 = test2["featureMember"];
            let test4 = test3[0];
            let test5 = test4["GeoObject"];
            let test6 = test5["Point"];
            let result = test6["pos"];
            ans.push(result.split(' '));
            //console.log(result.split(' '));
        }
        //console.log(ans);
        arrTreatment(ans);
        //console.log(ans);
    }

    useEffect(()=>{
        queryToYandex();
    },[]);

    return (
        <>
            <div id="containerMap">
                <div className="map">
                    <MapFunc data={newDataArr}/>
                </div>
            </div>
        </>
        );
    }
