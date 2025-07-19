import "../styles/Projects.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Project from "../components/Project";

export default function Home() {
    return <div className="Container">
        <Navbar/>
        <div className="Projects">
            <Project title="The algorithm lab" demo="https://the-algorithm-lab.vercel.app/" github="https://github.com/Jefernater58/TheAlgorithmLab"
            text="I created this project in order to deepen my understanding in algorithmic thinking, and to assist in my A-level studies. The purpose of this website is to experiment with different kinds of algorithms, and discover how they work."></Project>
            <Project title="Golf.py" demo={null} github="https://github.com/Jefernater58/Golf"
            text="Golf.py is a simulated version of the card game, Golf. I created this program to improve my knowledge in python, as well as to introduce myself to basic artificial intelligence."></Project>
        </div>
        <Footer/>
    </div>;
}