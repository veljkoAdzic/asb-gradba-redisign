import { useEffect, useState } from "react"
import Project from "../../../components/projectItem/ProjectItem";
import './ProjectPage.css'
import { getActiveUser } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";

// function Project(props) {
//     if(!props.data) return <></>;

//     return (
//         <div>{props.data.name}</div>
//     )
// }

export default function Projects() {
    const [loaded, setLoaded] = useState(false)
    const [projects, setProjects] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const user = getActiveUser(); //JSON.parse(sessionStorage.getItem("Active-User"))
        if(user.projects) {
            setProjects(user.projects)
        }
        setLoaded(true)
    }, [])
    
    if (!loaded) return (<p>Loading...</p>)
    

    return (
        <>
        <div id="header">
            <h4 id="header-text">Ваши градежни проекти</h4>
            <button id="add-btn" onClick={() => {
                navigate("/asb-gradba-redisign/project/new")
                // let pjcs = [...projects]
                // pjcs.push({
                //     name: "foo", 
                //     description: "lorem ipsum", 
                //     id: Math.floor(Math.random()*10000), 
                //     status: ["active", "pending", "denied"][ Math.floor( Math.random()*3 ) ] })
                
                // setProjects(pjcs);
                // const user = getActiveUser()
                // storeActiveUser({...user, projects})
                
            }}>+ Додади</button>
        </div>
        <div id="content-view">
            <div id="list-wraper">
            {
                projects.length == 0 ?
                <h3>Немате проекти!</h3> :
                projects.map((project) => {
                    return <Project data={project} />
                })
            }
            </div>
        </div>
        </>
    );

}