import {Link} from 'react-router';
import './navbar.css';
import '../../global.css'

export default function NavBar(){
    return (
        <nav>
            <Link to="/asb-gradba-redisign/" id="home-link" replace />
        </nav>
    );
}