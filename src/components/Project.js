import "../styles/Project.css";

export default function Project({title, github, demo, text}) {
    return <div className="Project">
        <div className="ProjectRow">
            <h2 className="ProjectTitle">{title}</h2>
            {demo !== null ? <a className="ProjectDemo" href={demo}>Demo</a> : ""}
        </div>

        <div className="ProjectRow">
            <a href={github}>Github repository</a>
        </div>

        <p style={{marginTop: "1rem"}}>{text}</p>
    </div>;
}