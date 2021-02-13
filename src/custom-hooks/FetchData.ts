import React, { useState, useEffect } from 'react';

interface Drone{
    id: number;
    name: string;
    model: string;
    price: number;
}

export function useGetData(urlpath:string) {
    const [droneData, setData] = useState<any>()

    
    async function handleDataFetch(path:string){
        const result = await fetch(`https://drone-collections-api-jc.herokuapp.com${path}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer API-KEY-HERE'
            }
        })

        const response = await result.json();
        setData(response)
    }

    useEffect( () => {
        handleDataFetch(urlpath)
    })

    return droneData
}
