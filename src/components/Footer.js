import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return <div id="Footer">
        <ul id="Footer-list">
            <li><a href="https://github.com/Jefernater58"><FontAwesomeIcon className="Footer-icon" icon={faGithub} size="2x"/></a></li>
            <li><a href="https://www.linkedin.com/in/freddie-rayner/"><FontAwesomeIcon className="Footer-icon" icon={faLinkedin} size="2x"/></a></li>
            <li><a href="mailto:freddie@fwrayner.uk"><FontAwesomeIcon className="Footer-icon" icon={faEnvelope} size="2x"/></a></li>
        </ul>
    </div>;
}