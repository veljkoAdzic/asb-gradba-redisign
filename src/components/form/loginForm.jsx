import './LoginForm.css';
import '../../global.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(props){

    const navigate = useNavigate()

    const [visiblePassword, setVisiblePassword] = useState(false)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function Login() {
        let user = {username: username.trim(), password:password.trim(), projects: []};
        if(user.username.length != 0 && user.password.length >= 8){
            props.onLogin(user)
            sessionStorage.setItem("Active-User", JSON.stringify(user));
        } else {
            alert("Невалидно корисничко име или лозинк!")
        }
    }

    return (
        <form>
            <h2>е-Одобрение за градба</h2>
            <div class="section-v">
            <label htmlFor="username">Корисничко име:</label>
            <input type="text" id="username" name="username" onChange={(e) => {setUsername(e.target.value)}} value={username}/>
            </div>

            <div class="section-v">
            <label htmlFor="password">Лозинка:</label>
            <div class="password-wrapper">
            <input type={!visiblePassword ? "password" : "text"} name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} value={password}/>
            { !visiblePassword ?
            <button type="button" id="vis-btn" onClick={() => {setVisiblePassword(true)}} /> :
            <button type="button" id="vis-off-btn" onClick={() => {setVisiblePassword(false)}} />
            }
            </div>
            </div>

            <div class="section-h">
                <button type="button" id="login-btn" onClick={() => {Login()}}>Најави се</button>
                <button type="button" id="register-btn" onClick={() => {Login()}}>Регистрација</button>
            </div>
        </form>
    );
}