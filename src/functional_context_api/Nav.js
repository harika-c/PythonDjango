import React from 'react';
import {DataContext} from './DataContext';
import {useContext, useEffect} from 'react';


const Nav=()=>{

    const [example,setexample] = useContext(DataContext);
    useEffect(() => {
        console.log("nav bar..................")
        
    }, [])
    return (
        <div>
            <p>List of Movies: {example.length} </p>
        </div>
    )
}

export default Nav;