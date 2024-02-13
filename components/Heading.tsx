import React from "react";

const Heading: React.FC<{tag:any, text:string}> = (props) => {
    const Tag = props.tag || "h1";
     return <h1>{props.text}</h1>
}

export default Heading;