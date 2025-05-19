import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getActiveUser, storeActiveUser } from "../../../utils/storage";
import './UserPage.css'

export default function User(){
    const [user, setUser] =useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        setUser(getActiveUser())
    },[])

    function Logout() {
        storeActiveUser(user);
        sessionStorage.clear(); 
        navigate("/asb-gradba-redisign")
    }

    function saveData() {
        // TODO
        console.log("Saving!")
    }

    function resetPassword() {
        //TODO
        console.log("Changing password!")
    }

    if(!user) return (<div>Loading...</div>);

    return (
        <>
        <div class="user-section">
            <div id="user-pfp-wraper">
                <div id="user-pfp"></div>
            </div>
            <h1 id="username">{user.username}</h1>
        </div>
        <div className="user-section">
            <div id="user-data" className="user-inputs-area">
                <label htmlFor="adress">Адреса:</label>
                <input type="text" name="adress" id="adress" placeholder="место, број, општина" />
                <label htmlFor="number">Телефонски број:</label>
                <input type="tel" name="number" id="number" placeholder="(+389) -- --- ---" />
                <label htmlFor="email">Е-Пошта:</label>
                <input type="email" name="email" id="email" placeholder="example@email.com"/>

                <div>
                <button type="button" id="save-data-btn" onClick={saveData}>Зашувај</button>
                </div>
            </div>
        </div>
        <div className="user-section">
            <div id="password-area" className="user-inputs-area">
                <label htmlFor="old-password">Стара лозинка:</label>
                <input type="password" name="old-password" id="old-password" />

                <label htmlFor="repeat-password">Повтори лозинка:</label>
                <input type="password" name="repeat-password" id="repeat-password" />

                <label htmlFor="new-password">Нова лозинка:</label>
                <input type="password" name="new-password" id="new-password" />

                <div>
                <button type="button" id="password-reset-btn" onClick={resetPassword}>Смени лозинка</button>
                </div>
            </div>
        </div>
        <div className="user-section">
            <button id="logout-btn" type="button" onClick={Logout}>Одјава</button>
        </div>
        </>
    );
}