import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return <div className="Container">
        <Navbar/>
        <div className="Home">
            <h1 className="Home-title">Frederick Rayner</h1>
            <p style={{color: "var(--secondary-color)", animation: "fadeIn 1s ease-out", fontStyle: "italic"}}>"The best way to predict the future is to invent it." — Alan Kay</p>
            <br/>
            <p style={{textAlign: "center"}}>A-level student with a passion for both cyber security and engineering, exploring the intersection of technology, security, and innovation.</p>
        </div>

        <div style={{textAlign: "center", paddingBottom: "4rem"}}>
            <h2>Skills</h2>
            <ul className="Home-skills-list">
                <li><span style={{color: "var(--accent-color)"}}>></span> Programming</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Ethical hacking</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Physical computing</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Mathematics</li>
            </ul>
        </div>

        <div className="Home-about">
            <div>
                <h2>About me</h2>
                <p>I am currently studying computer science, physics and mathematics. In the future, I aspire to study a degree or degree-apprenticeship so that I can broaden my knowledge
                    in computing and engineering, and lead on to a successful career.</p>
                <br/>
                <p>There is no doubt that technology is the future, and with more technology comes more ways for criminals to attack us.
                    This is why I believe that cybersecurity is the most important part of computing: to control and protect our information.</p>
            </div>

            <div>
                <h2>Experience</h2>
                <ul className="Home-list">
                    <li>JUN 2024 - MAY 2025<br/><span style={{color: "var(--accent-color)"}}>
                        Software developer</span> > <span style={{fontWeight: "bold"}}>The Women's Liberation Collective</span></li>
                    <br/>
                    <li>JUL 2025<br/><span style={{color: "var(--accent-color)"}}>
                        Engineering work experience</span> > <span style={{fontWeight: "bold"}}>Ford Motor Company</span></li>
                </ul>
            </div>
        </div>
        <Footer/>
    </div>;
}