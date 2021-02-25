import {useLayoutEffect, useRef, useState} from 'react';
import Data2 from './Data2';

const Data1=()=>{
    // Sorting based on last name and phone number 
    const [input,setInput]=useState();
    var [copy,setCopy]=useState([]);
    
    // var  k=copy.sort((a,b)=>{
    //     if (a.value.lastname<b.value.lastname){return -1}
    //     else if(a.value.lastname>b.value.lastname){return 1}
    //     else return 0});
    
    var k=copy.sort((a,b)=>{
        return parseInt(b.value.phone) - parseInt(a.value.phone)
    })

    const formSubmit=(e)=>{ 
        e.preventDefault(); 
        setCopy([...copy,{value:input}])
        
        
    }
    const formChange=(e)=>{
        setInput(prevValue=>({...prevValue,[e.target.name]:e.target.value}))
      
    }
    return(
        

        <div className="container">
            <form onSubmit={(e)=>formSubmit(e)}> 
           
                <label> First Name: </label>
                <input type= "text" name="firstname" onChange={formChange}/><br/>
                
                <label> Last Name: </label>
                <input type= "text" name="lastname" onChange={formChange}/><br/>
                
                <label> Phone number: </label>
                <input type= "text" name="phone" onChange={formChange}/><br/>
                
                <input type="submit" />
                
            </form>  
            <table className="component2">
                <tbody>
                
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                </tr>
                {console.log('copy..',k)}
                
                   {k.map(aa=><tr>
                       <td>{aa.value.firstname}</td>
                       <td>{aa.value.lastname}</td>
                       <td>{aa.value.phone}</td>
                    </tr>)}
                
                </tbody>
            </table>         
        </div>
    )
}

export default Data1;