import React from 'react';
import MovieList from './MovieList';
import Nav from './Nav';
import {DataStorage} from './DataContext';
import MovieUpdate from './MovieUpdate';


function App(){
    return (
        <DataStorage>
            <div>
                <MovieUpdate/>
                <Nav/>
                <MovieList/>

            </div>
        </DataStorage>
    )
}

export default App;