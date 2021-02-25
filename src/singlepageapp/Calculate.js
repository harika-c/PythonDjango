import { useState } from "react"

const Calculate=()=>{
    return (
        <div className="container">
            Calculate Page
            <div>
                <Data name={1} />
                <Data name={2} />
                <Data name={3} />
                <Data name={4} />
                <Data name={5} />
                <Data name={6} />
                <Data name="+" />
            </div>
            
        </div>
    )

}

const Data=(props)=>{
    useState
    const action=(d)=>{
        console.log('lll',d)

    }
    return(
        <span>
            <button onClick={()=>action(props.name)} >{props.name}</button>   
        </span>
    )

}
export default Calculate;