import React from "react";
import {connect } from 'react-redux';
import {fetchPosts} from './actions/postAction';

class Post extends React.Component{
    
    componentWillMount(){
        this.props.fetchPosts();        
    }
    render(){
        
        const map_data=this.props.posts.map(aa=>(
            <div> {aa.title}
                </div>
        ));
        return(
            <div>
            {map_data}
                  
            </div>
        )
    }
}
const mapStateToProps=state=>({
    posts: state.posts.items
})

export default connect (mapStateToProps, {fetchPosts})(Post);