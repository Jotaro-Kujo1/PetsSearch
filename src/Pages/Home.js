import React, {useEffect} from "react";


export const Home = () => {
    const [ans, setAns] = React.useState([]);


    const test = async () => {
        const res = await fetch("http://localhost:8080/posts/getAllPosts");
        const data = await res.json();
        setAns(data);
    }

    useEffect(()=>{
        test();
    },[]);

    console.log(ans);
    console.log(ans.length);
    return (
        <>
            {JSON.stringify(ans)}
        </>
    )
}