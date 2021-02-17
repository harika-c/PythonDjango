import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchData,addToCartAction,fetchNone} from '../redux/Actions';
import GenericModule from './GenericModule';
import './WomensWear.css';

const MensWear=()=>{
    
   
    return (
        <div>
            <GenericModule apiname="menswear" />
        </div>
    )
}
export default MensWear;