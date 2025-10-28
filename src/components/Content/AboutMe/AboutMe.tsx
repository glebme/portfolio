import PolaroidImages from "./PolaroidImages.tsx";

import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2 className="about-me__heading content__heading">About me</h2>
            <div className="about-me__information">
                <p className="content__text">Hi, I'm Tommy</p>
                <p className="content__text">
                    I'm a software engineer based in Sydney, Australia, who always finds himself trying to solve complex
                    problems. Since graduating university, I have had a deeply enriching career working for companies with the
                    same mindset.
                </p>
                <p className="content__text">
                    Over that relatively short career (I like to remind myself that I'm young), I have found myself
                    gravitating to work with complex branching logic, system orchestration, and the satisfying
                    challenges that come with event-driven architecture.
                </p>
                <p className="content__text">
                    Outside of coding, I love to keep the mind and body active. This usually involves my ADHD brain
                    cycling through new hobbies (currently failing at woodworking) and teetering on the edge of injuries
                    with sports.
                </p>
            </div>
            <PolaroidImages/>
        </div>);
}

export default AboutMe;
