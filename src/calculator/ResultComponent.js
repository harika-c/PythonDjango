import {Component} from 'react';

class ResultComponent extends Component{
    render(){
        let {result}=this.props
        console.log('llllllll',result)
        return (
            <div>
                {result}
            </div>
        )
    }
}

export default ResultComponent;