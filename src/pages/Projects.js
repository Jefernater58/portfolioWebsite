import "../styles/Projects.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

export default function Home() {
    return <div className="Container">
        <Navbar/>
        <div className="Projects">
            <div className="Projects-project"></div>
            <div className="Projects-project"></div>
            <div className="Projects-project"></div>
        </div>
        <Footer/>
    </div>;
}