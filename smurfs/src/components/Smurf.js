import React from 'react';

const Smurf = props => {
    return (
        <>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </>
    )
};

export default Smurf;