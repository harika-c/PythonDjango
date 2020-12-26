import App from './App';
import {useState , useContext ,useEffect} from "react";
import Movie from "./Movie";
import {DataContext} from './DataContext'; 


const MovieList=()=>{

    const [example,setexample] = useContext(DataContext);
    useEffect(() => {
        console.log("movielist..................")
        
    }, [])
    return (
        <div>
            {example.map(movies=>(
                <Movie name={movies.name} price={movies.price} />
            ))}
        </div>
    )
}

export default MovieList;