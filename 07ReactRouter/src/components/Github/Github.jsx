import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Deba-07')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
    return(
        <div className="text-center bg-orange-800 m-4 p-4 text-3xl text-zinc-300">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response =  await fetch('https://api.github.com/users/Deba-07')
    return response.json()
}