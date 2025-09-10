import './Socials.css';
import {Facebook, Instagram, Linkedin} from "react-feather";

const Socials = () => {
    return (
        <div className="socials">
            <a className="socials__link" href="https://www.facebook.com/profile.php?id=61575123347445" target="_blank" rel="noopener noreferrer">
                <Facebook/>
            </a>
            <a className="socials__link" href="https://www.instagram.com/gleberss/" target="_blank" rel="noopener noreferrer">
                <Instagram/>
            </a>
            <a className="socials__link" href="https://www.linkedin.com/in/tommy-huy-gia-truong/" target="_blank" rel="noopener noreferrer">
                <Linkedin/>
            </a>
        </div>);
};

export default Socials;