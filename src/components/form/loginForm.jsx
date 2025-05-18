import './LoginForm.css';
import '../../global.css';
import { useState } from 'react';

export default function LoginForm(){

    const [visiblePassword, setVisiblePassword] = useState(false)

    return (
        <form>
            <h2>е-Одобрение за градба</h2>
            <div class="section-v">
            <label htmlFor="username">Корисничко име:</label>
            <input type="text" id="username" name="username" />
            </div>

            <div class="section-v">
            <label htmlFor="password">Лозинка:</label>
            <div class="password-wrapper">
            <input type={!visiblePassword ? "password" : "text"} name="password" id="password" />
            { !visiblePassword ?
            <button type="button" id="vis-btn" onClick={() => {setVisiblePassword(true)}} /> :
            <button type="button" id="vis-off-btn" onClick={() => {setVisiblePassword(false)}} />
            }
            </div>
            </div>

            <div class="section-h">
                <button type="button" id="login-btn">Најави се</button>
                <button type="button" id="register-btn">Регистрација</button>
            </div>
        </form>
    );
}