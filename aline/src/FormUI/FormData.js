import {createRef, useRef,useState} from 'react';

import SearchIcon from '@material-ui/icons/Search';
import TableData from './TableData';
import './FormData.css';
import 'react-widgets/dist/css/react-widgets.css';
import 'react-datepicker/dist/react-datepicker.css';

const FormData=()=>{
    const [data,setData] =useState({});
    const [display,setDisplay]=useState({disply:false,buttonDisplay:true});
    var [copy,setCopy]=useState([]);
    var [val,setval]=useState([]);
    var [editVal,setEditVal]=useState({});

    const inputChange=(target)=>{
        console.log('..target..',target);
        setData(prevValue=>({...prevValue,[target.name]:target.value}));
        // setEditVal(prevValue=>({...prevValue,[target.name]:target.value}))
     
    }
    const submitFunct=(e)=>{
        e.preventDefault();
        setDisplay({buttonDisplay:false})
        if(Object.keys(copy).length==0){
            setDisplay({disply:true});
            setCopy([...copy,{value:data}]);
        }
        const found=copy.find(function(key,index){
            return key.value.name==data.name;
        })
        if(!found){
            setDisplay({disply:true});
            setCopy([...copy,{value:data}]);
        }
       
    }
    const funct1=(e)=>{
        const v=e.target.value;
        if(v!=""){
             setval(copy.filter(singleObject=>{
                 console.log('...',singleObject.value.name.toLowerCase().indexOf(v.toLowerCase()));
                return  singleObject.value.name.toLowerCase().indexOf(v.toLowerCase()) >=0 || 
                        singleObject.value.age.toLowerCase().indexOf(v.toLowerCase()) >=0 ||
                        singleObject.value.dob.toLowerCase().indexOf(v.toLowerCase()) >=0       
                        
            }))
        }else{
            setval(copy);
        }
    }
    const editFunctionality=(d)=>{
        setEditVal(d);
    }
    const ButtonShouldBeEnabled=()=>{
        setDisplay({buttonDisplay:false});
    }
    return(
        <div>
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" onChange={e=>funct1(e)} />
            <SearchIcon type="button" class="btn btn-outline-primary" >Search</SearchIcon>
            <form onSubmit={e=>submitFunct(e)}>
                <div className="container">
                <input type="text" placeholder="Enter Name" onChange={(e)=>inputChange(e.target)} name="name" required /><br/>
                <input type="number" placeholder="Enter Age" onChange={(e)=>inputChange(e.target)} name="age" required /><br/>
                <input type="text" placeholder="mm/dd/yyyy" onChange={(e)=>inputChange(e.target)} name="dob" required /><br/>
                </div>
                    
                <button className="submit_buttons" type="submit" disabled={typeof(data.name)!=="undefined" && typeof(data.age)!=="undefined"  && typeof(data.dob)!=="undefined" && data.name!=="" && data.dob!=="" && data.age!==""?()=> ButtonShouldBeEnabled():display.buttonDisplay}>Submit / Edit</button> <br/>  
                
            </form>
            
           {Object.keys(val).length!=0 ? <TableData data={val} editFunctionality={(e)=>editFunctionality(e)}/> :<TableData data={copy} editFunctionality={(e)=>editFunctionality(e)}/>} 
        </div>
    )
}

export default FormData;