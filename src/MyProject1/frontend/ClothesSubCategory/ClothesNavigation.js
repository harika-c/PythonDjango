import {Link} from 'react-router-dom';

const ClothesNavigation=()=>{
    return(
        <ul class="nav flex-column" style={{listStyleType: "none" }}>
            <li class="nav-item">
                <Link to="/womenswear" class="nav-link">Women's Wear</Link>
            </li>
            <li class="nav-item">
                <Link to="/menswear" class="nav-link">Men's Wear</Link>
            </li>
            <li class="nav-item">
                <Link to="/kidswear" class="nav-link">Kids Wear</Link>
            </li>
            <li class="nav-item">
                <Link to="/accessories" class="nav-link">Accessories</Link>
            </li>
        </ul>
    )
}

export default ClothesNavigation;