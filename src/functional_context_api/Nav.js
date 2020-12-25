import React from 'react';
import {DataContext} from './DataContext';
import {useContext} from 'react';


const Nav=()=>{
    const [example,setexample] = useContext(DataContext);
    return (
        <div>
            <p>List of Movies: {example.length} </p>
        </div>
    )
}

export default Nav;