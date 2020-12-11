const { Component } = require("react");
const { default: KeypadComponent } = require("./KeypadComponent");
const { default: ResultComponent } = require("./ResultComponent");

class App extends Component{
    constructor(){
        super();
        this.state={result:""}
        this.backspace=this.backspace.bind(this)
    }
    calculate=()=>{
        try{
            this.setState({result:eval(this.state.result)})
        }
        catch(e){
            this.setState({result:"error"})
        }
    }
    reset=()=>{
        this.setState({result:""})
    }
    backspace(){
        console.log('......',this.state.result)
        this.setState({result:""})
    }
    render(){
        return(
            <div className="calculator-body">
                <div>
                    <ResultComponent result={this.state.result} />
                    <KeypadComponent />
                </div>
            </div>
        )
    }
}   
export default App