import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    let quotes = ["\"The best way to predict the future is to invent it.\" — Alan Kay",
    "\"If you think you know everything about cyber security, it was probably poorly explained to you.\" - Stéphane Nappo",
    "\"Hacking is about exploring limits—pushing what can be built or broken.\" - Mark Zuckerberg",
    "\"Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.\" - Albert Einstein",
    "\"A good programmer is someone who always looks both ways before crossing a one-way street.\" - Doug Linder"]

    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    return <div className="Container">
        <Navbar/>
        <div className="Home">
            <h1 className="Home-title">Frederick Rayner</h1>
            <p style={{color: "var(--secondary-color)", animation: "fadeIn 1s ease-out", fontStyle: "italic"}}>{quote}</p>
            <br/>
            <p style={{textAlign: "center"}}>A-level student with a passion for cyber security and programming.</p>
        </div>

        <div style={{textAlign: "center", paddingBottom: "4rem"}}>
            <h2>Skills</h2>
            <ul className="Home-skills-list">
                <li><span style={{color: "var(--accent-color)"}}>></span> Programming</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Linux</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Problem solving</li>
                <li><span style={{color: "var(--accent-color)"}}>></span> Pentesting</li>
            </ul>
        </div>

        <div className="Home-about">
            <div>
                <h2>About me</h2>
                <p>I have always been interested in finding out how things work, and solving difficult problems that require looking beyond standard methods. When learning programming as a hobby I discovered an online course in cyber security, which is where I first learned about this area of the computing industry. Learning about vulnerabilities in real-world systems and how they can be exploited sparked my curiosity. The course gave me a keen interest in the field, specifically in OSINT and penetration testing. I find that these topics particularly challenge me to think laterally. Taking part in the CyberFirst Advanced course in August 2025 deepened my passion for cyber security by exposing me to new areas I hadn't considered, such as cryptography and digital forensics.</p>
                <br/>
                <p>The rise of artificial intelligence and quantum computing has introduced very new, complex and volatile types of attacks on computer systems. I believe that the importance of and demand for cyber security is now higher than ever. Studying cyber security will equip me with the skills I need to tackle emerging threats, as well as improve my critical thinking and resilience. These constant new threats motivate me to learn about how they work, and to stay ahead of attackers.</p>
                <br/>
                <p>After studying, my ambition is to contribute to national security by working to make our systems more secure and to prevent current / future threats to critical infrastructure.</p>
            </div>


            <div>
                <h2>Experience</h2>
                <ul className="Home-list">
                    <li>OCT 2025 - FEB 2026<br/><span style={{color: "var(--accent-color)"}}>
                        Retail associate</span> > <span style={{fontWeight: "bold"}}>TJX Europe</span></li>
                    <br/>
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