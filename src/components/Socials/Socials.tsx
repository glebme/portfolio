import {Facebook, Instagram, Linkedin} from "react-feather";

import './Socials.css';

const Socials = () => {
    return (
        <div className="socials">
            <a className="socials__link" href="https://www.facebook.com/profile.php?id=61575123347445" target="_blank"
               rel="noopener noreferrer"
               aria-label="Facebook Profile">
                <Facebook size="32"/>
            </a>
            <a className="socials__link" href="https://www.instagram.com/gleberss/" target="_blank"
               rel="noopener noreferrer"
               aria-label="Instagram Profile">
                <Instagram size="32"/>
            </a>
            <a className="socials__link" href="https://www.linkedin.com/in/tommy-huy-gia-truong/" target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn Profile">
                <Linkedin size="32"/>
            </a>
        </div>);
};

export default Socials;