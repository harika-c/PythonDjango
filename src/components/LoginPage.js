import React, {useState} from 'react'

export default  function LoginPage (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event){
        event.preventDefault();
        console.log(event.target)
        
    }
    function validateButton(){
        console.log('.....email...',email.length,email,password,password.length)
        // console.log(validateButton())
        return email.length>0 && password.length>0
    }
     
    return (
        <div className="login__page">
            <form onSubmit={handleSubmit}>
                Username <input type="text"  onChange={e=> setEmail(e.target.value) }/><br/>
                Password <input type="text"  onChange={e => setPassword(e.target.value)}/>
                <button type="submit" disabled={!validateButton()}>Login</button>
                {console.log(validateButton())}
            </form>
        </div>
        )
    
}


