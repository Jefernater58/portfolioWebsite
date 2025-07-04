import "../styles/Home.css"
import Navbar from "../components/Navbar"

export default function Home() {
    return <div className="Container">
        <Navbar/>
        <div className="Home">
            <h1>Frederick Rayner</h1>
            <br/>
            <p>A-level student with a passion for both cyber security and engineering, exploring the intersection of technology, security, and innovation.</p>
        </div>
    </div>;
}