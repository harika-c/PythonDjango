import {BACKENDSERVER} from '../config';
import axios from 'axios';

export const filter=(data)=>{
    return{
        type: "filter",
        payload: data
    }
}

export const apiFilter=()=>{
    console.log('api filter actions.....')
    return (dispatch)=>{
        axios.get(BACKENDSERVER+"/contact_data")
        .then(res=>{
            dispatch(filter(res.data))
            console.log('axios get',res.data)})
        .catch(err=>console.log(err))
        }
}