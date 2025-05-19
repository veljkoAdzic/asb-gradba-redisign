import './ProjectItem.css';
import {Link, replace} from 'react-router-dom'
export default function Project({data}){

    return (
        <Link to={`/asb-gradba-redisign/project/${data.id}`} replace style={{textDecoration: 'none', color: 'initial'}} >
        <div className="project-item">
            <h2 className="project-name">{data.name}</h2>
            <div className="project-details">
                <p>Број на проект: {data.id}</p>
                <p>Статус: <span className={`${data.status}-status`}>{data.status}</span></p>
            </div>
        </div>
        </Link>
    );
}