import {Component} from 'react';
import "./Button.css";
class Button extends Component{
    isOperator=v=>{
        console.log("val"+v,isNaN(v))
        return !isNaN(v) || v==="."
    }
    render(){
        return(
            <div className={`button ${this.isOperator(this.props.children)? "" : "operator"}`} 
                onClick={()=>this.props.ha(this.props.children)}
            > 
                {/* {console.log(this.props)} */}
                {this.props.children}
            </div>
        )
    }


}
export default Button 