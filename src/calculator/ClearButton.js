import {Component} from "react";

class ClearButton extends Component{
    render(){
        return(
            <div className="clear" onClick={()=>this.props.clear(this.props.children)}>{this.props.children}
                
            </div>
        )
    }

}
export default ClearButton;