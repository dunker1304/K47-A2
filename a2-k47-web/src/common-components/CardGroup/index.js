import React from 'react';
import Card from '../Card';
require("./index.css");

export default function CardGroup(props){
    const {group} = props;
    return <div className="card-group-wrapper">
        {group.map(card => {
            return  <Card {...card}/>
        })}
        
    </div>
}