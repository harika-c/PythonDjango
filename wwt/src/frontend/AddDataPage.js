import './AddDataPage.css';
import {useState} from 'react';
import axios from 'axios';
import { BACKENDSERVER } from '../config';


const AddDataPage=()=>{
    const [val, setval] = useState({"role":null,"name":null,"email":null,"phones":null,"address":null})

    const goValue=(e)=>{
        
        axios.post(BACKENDSERVER+'/contact_data',
            {
               role:  val.role,
               name: val.name,
               email: val.email,
               phones: val.phones,
               address:val.address
            })
        .then(res=>console.log("...",res))
        .catch(err=>console.log(err))
    }
    const onChangeFunct=(e)=>{
        const {name,value}=e.target
        console.log(name,value);
        setval(prevState=>({...prevState,[name]:value}))
    }
    return (
        <div className="add_data">
            <form onSubmit={(e)=>goValue(e)}>
                <label>Role:</label>
                <input type="text" name="role" onChange={e=>onChangeFunct(e)} placeholder="role"/><br/>
                <label>Name:</label>
                <input type="text" name="name" onChange={e=>onChangeFunct(e)} placeholder="name"/><br/>
                <label>Email:</label>
                <input type="text" name="email" onChange={e=>onChangeFunct(e)} placeholder="email"/><br/>
                <label>Phones:</label>
                <input type="text" name="phones" onChange={e=>onChangeFunct(e)} placeholder="phones"/><br/>
                <label>Address:</label>
                <input type="text" name="address" onChange={e=>onChangeFunct(e)} placeholder="address"/><br/>
                <input type="submit" className="submit_button" value="Add"/>
            </form>
        </div>
    )
}

export default AddDataPage;