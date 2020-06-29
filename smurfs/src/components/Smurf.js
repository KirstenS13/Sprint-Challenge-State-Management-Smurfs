import React from 'react';

const Smurf = props => {
    return (
        <>
            <p>The Smurf</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </>
    )
};

export default Smurf;