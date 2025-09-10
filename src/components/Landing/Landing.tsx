import './Landing.css'
import Socials from "../Socials/Socials.tsx";

const Landing = () => {
    return (
        <div className="landing">
            <h1 className="landing__heading">Tommy</h1>
            <p className="landing__text">Get in touch with me here</p>
            <Socials/>
        </div>
    )
}

export default Landing;