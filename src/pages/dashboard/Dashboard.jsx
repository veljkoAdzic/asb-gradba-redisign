import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import SideBar from "../../components/sidebar/SideBar";
import "./Dashboard.css"

import Projects from "./Projects/ProjectPage";
import { getActiveUser } from "../../utils/storage";
import User from "./User/UserPage";

const DashPages = [
    (<Projects />),
    (<div>Inbox!</div>),
    (<div>Finance!</div>),
    // (<div>User!</div>),
    // (<Inbox />),
    // (<Finaces />),
    (<User />)
    ]

export default function Dashboard({children}) {
    const [user, setUser] = useState(null);
    const [checked, setChecked] = useState(false)

    const [tab, setTab] = useState(0);

    useEffect( () => {
        setUser( getActiveUser()  )
        setChecked(true)
        // console.log("Dash: " + JSON.stringify(user))
    }, []);

    if(!checked) return <div>Loading...</div>;

    if (!user) return <Navigate to="/asb-gradba-redisign" replace/>;

    return (
        <div id="dash-content">
            <NavBar />

            <div id="body">
            <SideBar selectedTab={tab} onTabChange={(newTab) => {setTab(newTab)} }/>
            <div id="dashboard-page">
                {(children) ? children : DashPages[tab] }
            </div>
            </div>
        </div>
    );
}