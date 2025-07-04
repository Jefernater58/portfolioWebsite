import "../styles/Contact.css"
import Navbar from "../components/Navbar"

export default function Home() {
    return <div className="Container">
        <Navbar/>
        <div className="Contact">
            <h2>This page is under construction</h2>
            <p>In the mean time, here are my contact details:</p>
            <p>email: <a href="mailto:freddie@fwrayner.uk">freddie@fwrayner.uk</a></p>
        </div>
    </div>;
}