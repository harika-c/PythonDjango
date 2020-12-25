import {DataContext} from './DataContext';
import {useContext, useState} from "react";
const MovieUpdate=()=>{
    const [movie,setmovies] = useContext(DataContext);
    const [moviename, setmoviename] = useState();
    const [movieprice, setmovieprice] = useState();

    const f1=(e)=>{
        console.log("price",e.target.value)
        setmovieprice(e.target.value);
    }
    const f2=(e)=>{
        console.log("name",e.target.value)
        setmoviename(e.target.value);
    }
    const formsubmit=(e)=>{
        e.preventDefault();
        setmovies(preMovies=>[...preMovies,{name:moviename,price:  movieprice}])
    }
    return (
        <div>
            <form onSubmit={formsubmit}>
                <input type="text" name="name"  onChange={f1}></input>
                <input type ="text" name="price"  onChange={f2}></input>
                <button type="submit">Submit</button>
            </form>
            </div>
    )

}

export default MovieUpdate;