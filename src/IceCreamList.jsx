import React from 'react';
import './style.css'

function IceCreamList(props) {
    const FlavorListItems = props.flavors.map((flavor, index) => {
        return(
            <li key={index + 1} className={flavor.name === 'Cookie Dough' ? 'pink' : 'aqua'}>{flavor.name}</li>
        )
    });


    return (
        <ul>
            {FlavorListItems}
        </ul>
    )
}

export default IceCreamList;