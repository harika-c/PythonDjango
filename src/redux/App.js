import React from "react"; 
import Post from "./Post";
import PostForm from "./PostForm";
import store from "./store";
import {Provider} from 'react-redux';

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <div>
                    <PostForm />
                    <Post/>
                </div>
            </Provider>
        )
    }

}
export default App;