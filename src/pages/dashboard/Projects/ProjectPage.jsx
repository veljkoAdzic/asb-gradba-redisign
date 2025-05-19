import { useEffect, useState } from "react"
import './ProjectPage.css'

function Project(props) {
    if(!props.data) return <></>;

    return (
        <div>{props.data.name}</div>
    )
}

export default function Projects() {
    const [loaded, setLoaded] = useState(false)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("Active-User"))
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
                let pjcs = [...projects]
                pjcs.push({name: "foo", description: "lorem ipsum"})
                setProjects(pjcs);
            }}>+ Додади</button>
        </div>
        <div>
            {
                projects.length == 0 ?
                <h3>Немате проекти!</h3> :
                projects.map((project) => {
                    return <Project data={project} />
                })
            }
        </div>
        </>
    );

}