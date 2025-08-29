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
            <p style={{textAlign: "center"}}>A-level student with a passion for cyber security, exploring the intersection of technology, security, and innovation.</p>
        </div>

        <div style={{textAlign: "center", paddingBottom: "4rem"}}>
            <h2>Skills</h2>
            <ul className="Home-skills-list">
                <li><span style={{color: "var(--accent-color)"}}>></span> Programming</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Penetration testing</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Problem solving</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Mathematics</li>
            </ul>
        </div>

        <div className="Home-about">
            <div>
                <h2>About me</h2>
                <p>I have always been interested in finding out how things work. At the age of 10, I discovered programming when learning Python in primary school. Ever since I have continued to build on my knowledge, not just about programming, but about many technical aspects of computing. I believe that computing is the key to developing as a civilisation, so it is important that we do what we can to protect it. That is why I have such a passion for cyber security, and why I want to pursue it as a career.</p>
            </div>

            <div>
                <h2>Experience</h2>
                <ul className="Home-list">
                    <li>JUL 2025<br/><span style={{color: "var(--accent-color)"}}>
                        Work experience</span> > <span style={{fontWeight: "bold"}}>Ford Motor Company</span></li>
                    <br/>
                    <li>JUN 2024 - MAY 2025<br/><span style={{color: "var(--accent-color)"}}>
                        Software developer</span> > <span style={{fontWeight: "bold"}}>The Women's Liberation Collective</span></li>
                </ul>
            </div>
        </div>
        <Footer/>
    </div>;
}