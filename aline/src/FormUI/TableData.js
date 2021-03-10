import React,{useMemo} from 'react';

import * as ReactBootStrap from 'react-bootstrap';

const TableData=(data)=>{
    
    const handleChange=(obj)=>{
        data.editFunctionality(obj);
    }
    return (
        <div>
            <div>
                <h2>Table Data</h2>
            </div>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                {data.data.map(singleObject=>
                    <tr>
                        <td>{singleObject.value.name}</td>
                        <td>{singleObject.value.age}</td>
                        <td>{singleObject.value.dob}</td>
                        <td><button onClick={()=>handleChange(singleObject)}>Edit</button></td>
                    </tr>)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}
export default TableData;
