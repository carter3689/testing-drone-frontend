import React from 'react';
import { useGetData } from '../../custom-hooks'


export const Drones = () => {

    let data = useGetData('/drones')
    console.log(data)

    

    // const DisplayDrone = ( ) => {
    //     return (
    //         Array.prototype.map( data => {
    //         <div>{ data.name }</div>
    //         })
    //     )
    // }
    


    return ( 
        <div>
            <h1>Hello Drones</h1>
        </div>
    )
}