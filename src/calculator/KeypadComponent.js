import {Component} from 'react';
import Input from './Input'
import Button from './Button';
import ClearButton from './ClearButton';
import "./KeypadComponent.css";
class KeypadComponent extends Component{
    constructor(props){
        super(props)
        
        this.state={
            input:"",
            previousNumber:"" ,
            example:"" ,
            operator:"" ,
            currentNumber:""       
        };
        
    }
    addInput=(val)=>{
       
        var a=document.getElementsByTagName("button");
        console.log('.....>>>',val.target.innerHTML,a[0].textContent,typeof(this.state.input))

        this.setState({input:this.state.input+val.target.innerHTML})
        console.log(this.state.input)
    }
    addInput2=val=>{
        this.setState({input:this.state.input+val});
    }
    example1=(val)=>{
        var a=val.target.innerHTML
        this.setState({example:this.state.example+a})
    }
    addToZero=val=>{
        if(this.state.input !== ""){
            this.setState({input:this.state.input+val})
        }
    }
    addDecimal=val=>{
        // if(!this.state.input.includes(val)){
        //     this.setState({ input:this.state.input+val})
        // }
        console.log(".index is ...",this.state.input.indexOf("."))
        if(this.state.input.indexOf(".")===-1){
            this.setState({input: this.state.input+val})
        }
    }
    addIt=val=>{
        this.state.previousNumber=this.state.input
        this.setState({input:""})
        this.state.operator=val
    }
    evaluate=()=>{
        this.state.currentNumber=this.state.input;
      
            this.setState({ input:
                eval(this.state.previousNumber+this.state.operator+
                this.state.currentNumber)
            })
        
    }
    clearFunction=val=>{
        this.setState({input:""});
    }
    render(){
        return(
            <div className="container">
                <div className="calc__wrapper">
                    <div className="row">
                    
                    {this.state.result}
                        <Input>{this.state.input}</Input>
                    </div>
                    <div className="row">
                        <Button >(</Button>
                        <Button >)</Button>
                        <Button >CE</Button><br/>
                    </div>
                    <div className="row">
                        <Button ha={this.addInput2}>1</Button>
                        <button onClick={this.addInput}>22</button>
                        <button onClick={this.example1}>33</button>
                        <Button ha={this.addInput2} >2</Button>
                        <Button ha={this.addInput2} >3</Button>
                    </div>
                    <div className="row">
                        <Button ha={this.addInput2}>4</Button>
                        <Button ha={this.addInput2}>5</Button>
                        <Button ha={this.addInput2}>6</Button>
                    </div>
                    <div className="row">
                        <Button ha={this.addInput2}>7</Button>
                        <Button ha={this.addInput2}>8</Button>
                        <Button ha={this.addInput2}>9</Button>
                    </div>
                    <div className="row">
                        <Button ha={this.addDecimal}>.</Button>
                        <Button ha={this.addToZero}>0</Button>
                        <Button ha={this.evaluate}>=</Button>
                    </div>
                        
                    {/* <button name="3" onClick={e=>this.props.onClick(e.target.name)}>3</button><br/>
                    <button name="4" onClick={e=>this.props.onClick(e.target.name)}>4</button>
                    <button name="5" onClick={e=>this.props.onClick(e.target.name)}>5</button>
                    <button name="6" onClick={e=>this.props.onClick(e.target.name)}>6</button><br/>
                    <button name="7" onClick={e=>this.props.onClick(e.target.name)}>7</button>
                    <button name="8" onClick={e=>this.props.onClick(e.target.name)}>8</button>
                    <button name="9" onClick={e=>this.props.onClick(e.target.name)}>9</button><br/>
                    <button name="*" onClick={e=>this.props.onClick(e.target.name)}>*</button>
                    <button name="0" onClick={e=>this.props.onClick(e.target.name)}>0</button>
                    <button name="+" onClick={e=>this.props.onClick(e.target.name)}>+</button><br/> */}
                    <div className="row">
                        <Button ha={this.addIt}>/</Button>
                        <Button ha={this.addIt}>-</Button>
                        <Button ha={this.addIt}>+</Button>
                        <Button ha={this.addIt}>*</Button>
                        <ClearButton clear={this.clearFunction}>CC</ClearButton>
                    </div>
                </div>
            </div>
        )
    }
}
export default KeypadComponent