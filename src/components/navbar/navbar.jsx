import {Link} from 'react-router';
import './navbar.css';
import '../../global.css'

export default function NavBar(){
    return (
        <nav>
            <Link to="/" id="home-link" />
        </nav>
    );
}