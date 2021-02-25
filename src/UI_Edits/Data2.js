import {useState,useEffect} from 'react';

const Data2=()=>{
    // Searching based on input we type in search box
    const [input,setInput]=useState();
    const [pushData,setPushData]=useState([]);
    const [updatedData,setUpdatedData]=useState([]);
    const searchData=(e)=>{
        setUpdatedData([])
       for(let i=0;i<pushData.length;i++){
        console.log((e.target.value).includes(pushData[i].value.fname),e.target.value=="")
        if(e.target.value===''){
            console.log('target ') 
            setUpdatedData([])
        }else
        if((pushData[i].value.fname).includes(e.target.value) || (pushData[i].value.lname).includes(e.target.value)){
            console.log('inside ') 
            setUpdatedData( prev=>([...prev,pushData[i] ]))
        }
    }
    
        // setPushData()
    }
    const submitData=(e)=>{
        e.preventDefault();
        setPushData([...pushData,{value:input}])
    }
    const changeData=(e)=>{
        setInput(prevData=>({...prevData,[e.target.name]:e.target.value}))        
    }
    return(
        <div className="container">
            
            <form onSubmit={submitData}>
                FirstName:
                <input type="text" name="fname" onChange={changeData}/><br/>
                LastName:
                <input type="text" name="lname" onChange={changeData}/><br/>
                <input type="submit" /><br/>
            </form>

            <div className="row">
                Search For Data<input type="text" onChange={searchData}/>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    {console.log('.....',pushData,'ppp',Object.keys(updatedData).length==0,updatedData)}
                        {Object.keys(updatedData).length==0? pushData.map(a=>
                        <tr>
                            <td>{a.value.fname}</td>
                            <td>{a.value.lname}</td>
                            
                        </tr>
                    ): updatedData.map(a=>
                        <tr>
                            <td>{a.value.fname}</td>
                            <td>{a.value.lname}</td>
                            
                        </tr>
                    )}
                        
                   
                </tbody>
            </table>
        </div>
       
    )
}

export default Data2;