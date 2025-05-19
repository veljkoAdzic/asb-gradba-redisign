import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import SideBar from "../../components/sidebar/SideBar";
import "./Dashboard.css"

import Projects from "./Projects/ProjectPage";

const DashPages = [
    (<Projects />),
    (<div>Inbox!</div>),
    (<div>Finance!</div>),
    (<div>User!</div>),
    // (<Inbox />),
    // (<Finaces />),
    // (<User />)
    ]

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [checked, setChecked] = useState(false)

    const [tab, setTab] = useState(0);

    useEffect( () => {
        setUser( JSON.parse( sessionStorage.getItem("Active-User") ) )
        setChecked(true)
        console.log("Dash: " + JSON.stringify(user))
    }, []);

    if(!checked) return <div>Loading...</div>;

    if (!user) return <Navigate to="/asb-gradba-redisign" replace/>;

    return (
        <div id="dash-content">
            <NavBar />

            <div id="body">
            <SideBar selectedTab={tab} onTabChange={(newTab) => {setTab(newTab)} }/>
            <div id="dashboard-page">
                {DashPages[tab]}
            </div>
            </div>
            {/* <div>Dashbord of {user ? user.username : "-"}</div>
            <button onClick={() => {sessionStorage.clear(); setUser(null); }}>Log out</button> */}
        </div>
    );
}