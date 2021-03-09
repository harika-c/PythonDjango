const TableData=(data)=>{
    
    const handleChange=(obj)=>{
        data.editFunctionality(obj);
    }
    return (
        <table>
            <tbody>
            <h2>Table Data</h2>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>DOB</th>
            </tr>
            
            {data.data.map(singleObject=><tr>
                       <td>{singleObject.value.name}</td>
                       <td>{singleObject.value.age}</td>
                       <td>{singleObject.value.dob}</td>
                       <td><button onClick={()=>handleChange(singleObject)}>Edit</button></td>
                    </tr>)}
                </tbody>
        </table>
    )
}
export default TableData;
