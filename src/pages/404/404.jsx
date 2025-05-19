import NavBar from "../../components/navbar/navbar";
import {Link} from "react-router-dom"
import './404.css'

export default function Error404Page() {

    return (
        <>
        <div id="background" />
        <NavBar />
        <div id="content-404">
            <h1>404 Страница не постои</h1>
            <Link to={"/asb-gradba-redisign/"} id="link">Врати се на почетна</Link>
        </div>
        </>
    );
}