import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return <div className="Container">
        <Navbar/>
        <div className="Home">
            <h1>Frederick Rayner</h1>
            <p style={{color: "var(--secondary-color)", animation: "fadeIn 1s ease-out", fontStyle: "italic"}}>"The best way to predict the future is to invent it." — Alan Kay</p>
            <br/>
            <p style={{textAlign: "center"}}>A-level student with a passion for both cyber security and engineering, exploring the intersection of technology, security, and innovation.</p>
        </div>

        <div style={{textAlign: "center"}}>
            <h2>Skills</h2>
            <ul className="Home-skills-list">
                <li><span style={{color: "var(--accent-color)"}}>></span> Programming</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Ethical hacking</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Physical computing</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Mathematics</li>
            </ul>
        </div>

        <br/><br/><br/><br/>

        <div className="Home-about">
            <div>
                <h2>About me</h2>
                <p>I am currently studying computer science, physics and mathematics. In the future, I aspire to study a degree or degree-apprenticeship so that I can broaden my knowledge
                    in computing and engineering, and lead on to a successful career.</p>
            </div>

            <div>
                <h2>Experience</h2>
                <ul className="Home-list">
                    <li style={{fontWeight: "bold"}}><span style={{color: "var(--accent-color)", fontWeight: "normal"}}>Software developer</span> - Women's Liberation Collective</li>
                    <li style={{fontWeight: "bold"}}><span style={{color: "var(--accent-color)", fontWeight: "normal"}}>Engineering work experience</span> - Ford</li>
                </ul>
            </div>
        </div>

        <br/><br/><br/><br/><br/><br/>

        <Footer/>
    </div>;
}