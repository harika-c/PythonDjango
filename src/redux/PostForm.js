import React from "react";

class PostForm extends React.Component{
    constructor(){
        super();
        this.state={
            title:"",
            body:""
        }
        this.onChangeMeth=this.onChangeMeth.bind(this);
        this.onSubmitMethod=this.onSubmitMethod.bind(this);
    }
    onChangeMeth(e){
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmitMethod(e){
        e.preventDefault();
        const post={
            title: this.state.title,
            body: this.state.body
        }
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(res=> res.json())
        .then(data => console.log(data))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitMethod}>
                    <div>
                        <label> Name:
                            <input type="text" name="title" onChange={this.onChangeMeth} value={this.state.title}></input>
                        </label><br/>
                        <label> Body:
                            <textarea type="text" name="body" onChange={this.onChangeMeth} value={this.state.body}></textarea>
                        </label>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;