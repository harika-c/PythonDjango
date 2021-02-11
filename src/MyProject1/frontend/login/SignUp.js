const SignUp =()=>{
    const submitFunct=()=>{

    }
    const change=()=>{

    }
    return (
        <div>
            <h4>
                Sign Up
            </h4>
            <form onSubmit={e=>submitFunct(e)}>
                <div class="container">
                    <label for="fname"><b>First Name</b></label><br/>
                    <input type="text" placeholder="Firstname"  onInput={(e)=>change(e)} name="fname" required /><br/>

                    <label for="lname"><b>Last Name</b></label><br/>
                    <input type="text" placeholder="Lastname" onChange={e=>change(e)} name="lname" required /><br/>

                    <label for="psw"><b>Mobile Number</b></label><br/>
                    <input type="password" placeholder="Mobile number" onInput={(e)=>change(e)} name="mnumber" required /><br/>

                    <label for="psw"><b>Email Id</b></label><br/>
                    <input type="password" placeholder="Email Id" onInput={(e)=>change(e)} name="email" required /><br/>
                        
                    <button type="submit">Sign Up</button> <br/>
                </div>

                
                </form>
            </div>
    )
}
export default SignUp;