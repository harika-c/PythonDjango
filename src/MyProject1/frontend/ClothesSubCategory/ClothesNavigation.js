import {Link} from 'react-router-dom';

const ClothesNavigation=()=>{
    return(
        <ul class="nav flex-column" style={{listStyleType: "none" }}>
            <li class="nav-item">
                <Link to="/womenswear"   style={{textDecoration: "None"}} class="nav-link">Women's Wear</Link>
            </li>
            <li class="nav-item">
                <Link to="/menswear" style={{textDecoration: "None"}} class="nav-link">Men's Wear</Link>
            </li>
            <li class="nav-item">
                <Link to="/kidswear" style={{textDecoration: "None"}} class="nav-link">Kids Wear</Link>
            </li>
            <li class="nav-item">
                <Link to="/accessories" style={{textDecoration: "None"}} class="nav-link">Accessories</Link>
            </li>
        </ul>
    )
}

export default ClothesNavigation;