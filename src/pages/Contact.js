import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from 'emailjs-com';
import {useState} from "react";

export default function Home() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        setIsSubmitting(true);

        const templateParams = {
            name: firstName + " " + lastName,
            email: email,
            phone: phone,
            message: message,
            time: Date().toLocaleString(),
        };

        emailjs.send(
            "service_8q5ul2f",
            "template_ldflnz8",
            templateParams,
            "d_rM1sosS0Y2nzMeH"
        )
            .then((res) => {
                console.log("Email sent successfully!", res.status, res.text);
                alert("Success! Your message has been sent to my inbox. Thank you for contacting me, " +
                    "I will reply by email as soon as I get the chance.");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setMessage("");
            })
            .catch((err) => {
                console.error("Failed to send email:", err);
                alert("There was an error sending the message. Please email me so I can resolve" +
                    "this issue.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return <div className="Container">
        <Navbar/>
        <div className="Contact">
            <div className="Contact-form">
                <h1>Contact me</h1>
                <p>I would love to hear from you. Please fill in this form or email me at <a
                    href="mailto:freddie@fwrayner.uk">freddie@fwrayner.uk</a></p>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div className="Contact-formRow">
                        <div className="Contact-formInput">
                            <p className="Contact-inputLabel">First Name *</p>
                            <input required className="Contact-textInput" type="text" value={firstName}
                                   placeholder="John"
                                   onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="Contact-formInput">
                            <p className="Contact-inputLabel">Last Name *</p>
                            <input required className="Contact-textInput" type="text" value={lastName}
                                   placeholder="Smith"
                                   onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="Contact-formRow">
                        <div className="Contact-formInput">
                            <p className="Contact-inputLabel">Email Address *</p>
                            <input required className="Contact-textInput" type="email" value={email}
                                   placeholder="you@company.com"
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="Contact-formInput">
                            <p className="Contact-inputLabel">Phone Number</p>
                            <input className="Contact-textInput" type="tel" value={phone} placeholder="0123456789"
                                   onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="Contact-formRow">
                        <div className="Contact-formInput">
                            <p className="Contact-inputLabel">Message *</p>
                            <textarea required className="Contact-textArea" value={message}
                                      placeholder="Your message here..."
                                      onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="Contact-formRow">
                        <div className="Contact-formInput">
                            <input disabled={isSubmitting} type="submit" className="Contact-submit"
                                   value="Submit" style={{
                                opacity: isSubmitting ? 0.5 : 1,
                                cursor: isSubmitting ? "not-allowed" : "pointer",
                            }}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </div>;
}