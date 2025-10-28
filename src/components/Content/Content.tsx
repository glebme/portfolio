import './Content.css';
import React from "react";

type ContentProps = {
    children: React.ReactNode[];
}

const Content = (props: ContentProps) => {
    return (<div className="content">
        {props.children.map(child => <div className="content__section">{child}</div> )}
    </div>);
}

export default Content;
