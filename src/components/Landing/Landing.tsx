import './Landing.css'
import Socials from "../Socials/Socials.tsx";
import {useEffect, useState} from 'react';

const Landing = () => {
    const [hasJustLanded, setHasJustLanded] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setHasJustLanded(false), 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="landing">
            <h1 className={`landing__heading ${hasJustLanded ? 'landing__heading--initial' : ''}`}>Tommy</h1>
            <div className={`landing__content ${hasJustLanded ? 'landing__content--initial' : ''}`}>
                <p className="landing__text">Get in touch with me here</p>
                <Socials/>
            </div>
        </div>
    );
}

export default Landing;