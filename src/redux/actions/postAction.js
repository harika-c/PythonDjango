import {FETCH_POST, NEW_POST} from './actions';


export const fetchPosts=()=>dispatch=>{
    
     fetch("https://jsonplaceholder.typicode.com/todos")
    .then(resp=> resp.json())
    .then(posts=> dispatch({
        type: FETCH_POST,
        payload : posts
    }))  
}