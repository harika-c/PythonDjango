import { addToCartAction, fetchData ,fetchNone} from "../redux/Actions"
import GenericModule from "./GenericModule";

const KidsWear=()=>{
    return (
<       div>
            <GenericModule apiname="kidswear" />
        </div>
    )    
}

export default KidsWear;