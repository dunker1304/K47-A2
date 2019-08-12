import React from 'react';
// import classnames from 'classnames';
require("./index.css");

export default function CustomCard(props){
    const {src, alt, height, width} = props;
    return <div className="card">
        <div className="image">
            <img src={src} alt={alt} height={height} width={width}/>
        </div>
        <div className="label">
            <p>{props.label}</p>
        </div>
    </div>
}
CustomCard.defaultProps={
    height: "200",
    width: "240"
}