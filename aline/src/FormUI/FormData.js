import {createRef, useRef,useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useForm , Controller} from 'react-hook-form';
import SearchIcon from '@material-ui/icons/Search';
import TableData from './TableData';
import './FormData.css';
import 'react-widgets/dist/css/react-widgets.css'

const FormData=()=>{
    const [data,setData] =useState();
    const {control} = useForm();
    const [display,setDisplay]=useState({disply:false});
    var [copy,setCopy]=useState([]);
    var [val,setval]=useState([])
    var [editVal,setEditVal]=useState({});
    // const firstName=useRef();

    const inputChange=(target)=>{
        console.log('....',target)
        setData(prevValue=>({...prevValue,[target.name]:target.value}))
        setEditVal(prevValue=>({...prevValue,[target.name]:target.value}))

    }
    const submitFunct=(e)=>{
        e.preventDefault();
        if(Object.keys(copy).length==0){
            setDisplay({disply:true})
            setCopy([...copy,{value:data}])
        }
        const found=copy.find(function(key,index){
            return key.value.name==data.name
        })
        console.log('..found',found);
        if(!found){
            setDisplay({disply:true})
            setCopy([...copy,{value:data}])
        }
       
    }
    const funct1=(e)=>{
        console.log('...search..',e.target.value)
        const v=e.target.value;
        if(v!=""){
        
            console.log(';;;;;;;;;;;;;',copy)
            
             setval(copy.filter(singleObject=>{
                 console.log('...',singleObject.value.name.toLowerCase().indexOf(v.toLowerCase()))
                return  singleObject.value.name.toLowerCase().indexOf(v.toLowerCase()) >=0 || 
                        singleObject.value.age.toLowerCase().indexOf(v.toLowerCase()) >=0 ||
                        singleObject.value.dob.toLowerCase().indexOf(v.toLowerCase()) >=0 
                        
                        
            }))
        }else{
            setval(copy)
        }
    }
    const editFunctionality=(d)=>{
        console.log('...dar',d);
        setEditVal(d);
    }
    return(
        <div>
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" onChange={e=>funct1(e)} />
            <SearchIcon type="button" class="btn btn-outline-primary" >Search</SearchIcon>
            <form onSubmit={e=>submitFunct(e)}>
                
                    {console.log(Object.keys(val).length,'editVal...',Object.keys(editVal).length )}
                   {Object.keys(val).length==0  ?  
                   <div className="container">
                   <input type="text" placeholder="Enter Name" onChange={(e)=>inputChange(e.target)} name="name" required /><br/>
                    <input type="number" placeholder="Enter Age" onChange={(e)=>inputChange(e.target)} name="age" required /><br/>
                    <input type="text" placeholder="mm/dd/yyyy" onChange={(e)=>inputChange(e.target)} name="dob" required /><br/>
                    </div>
                    :

                    <div className="container">
                        {console.log('else',editVal.name)}
                    <input type="text" placeholder="Enter Name" value={editVal.value.name} onChange={(e)=>inputChange(e.target)} name="name" required /><br/>
                    <input type="number" placeholder="Enter Age" value={editVal.value.age}  onChange={(e)=>inputChange(e.target)} name="age" required /><br/>
                    <input type="text" placeholder="mm/dd/yyyy" value={editVal.value.dob}  onChange={(e)=>inputChange(e.target)} name="dob" required /><br/>
                    </div>
                }
                    {/* <Controller name="birthDate" control={control} defaultValue={null} 
                        render={({inputChange,value})=><DatePicker onChange={inputChange} selected={value} 
                        placeholderText="Select Birthday" name="dob" />} /><br/> */}
                    <button className="submit_buttons" type="submit">Submit / Edit</button> <br/>  
                
            </form>
            {console.log('valvalval',val)}
           {Object.keys(val).length!=0 ? <TableData data={val} editFunctionality={(e)=>editFunctionality(e)}/> :<TableData data={copy} editFunctionality={(e)=>editFunctionality(e)}/>} 
        </div>
    )
}

export default FormData;