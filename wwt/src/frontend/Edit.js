import axios from 'axios';
import {useState} from 'react';
import { BACKENDSERVER } from '../config';

const Edit=({greeting})=>{
    const [val, setval] = useState({"role":greeting.data.role,"name":null,"email":null,"phones":null,"address":null})

    const goValue=(e,greeting)=>{
        e.preventDefault()
        
        console.log(val,']]]]]]]]]]]]]]]',greeting.data._id)
        axios.put(BACKENDSERVER+"/contact_data/"+greeting.data._id,val)
        .then(res=>console.log('axios get',res.data))
        .catch(err=>console.log(err))

    }
    const onChangeFunct=(e)=>{
        const {name,value}=e.target
        console.log(name,value);
        setval(prevState=>({...prevState,[name]:value}))
    }
    return (
        <div>
            {console.log('........>>>>>',greeting)}
            <form onSubmit={(e)=>goValue(e,greeting)}>
                <label>Role:</label>
                <input type="text" name="role" value={val.role} onChange={e=>onChangeFunct(e)} placeholder="role"/><br/>
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

export default Edit;