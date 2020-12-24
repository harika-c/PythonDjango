import "./Form.css";


const FormData=(props)=>{
    return(
        <div className="container">
            <form onSubmit={props.loadweather}>
                {console.log("here")}
                <div>{props.errors ? errorAlert():null}</div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"/>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
function errorAlert(){
    return (
        <div className="alert alert-danger mx-5" role="alert">Please enter City and Country</div>
    )
}
}

export default FormData;