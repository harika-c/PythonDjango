import React from 'react';
import {createContext, useState} from 'react';

export const DataContext=createContext();

export const DataStorage =(props)=>{
    const [movies, setmovies] = useState([
        {
            name: "Harry Potter",
            price:23,
            id: 232
        },
        {
            name:"Jhansi Rani",
            price: 56,
            id: 222
        },
        {
            name: "Story of a brave girl",
            price : 909,
            id: 211
        }
    ])
    return (
        <DataContext.Provider value={[movies,setmovies]}>
            {props.children}           
        </DataContext.Provider>
    )
}