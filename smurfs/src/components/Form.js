import React, { useState } from 'react';

import { connect } from 'react-redux';

import { addSmurf } from '../actions';

const Form = props => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: ""
    });

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        props.addSmurf(formState);
        setFormState({
            name: "",
            age: "",
            height: ""
        });
    }

    return (
        <>
            <h3>A new smurf is moving into the village!</h3>
            <h4>Tell us about them!</h4>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter a name..."
                        value={formState.name}
                        onChange={changeHandler}
                    />
                </label>
                <label htmlFor="age">Age
                    <input 
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Enter an age..."
                        max="500"
                        value={formState.age}
                        onChange={changeHandler}
                    />
                </label>
                <label htmlFor="height">Height (cm)
                    <input 
                        type="text"
                        name="height"
                        id="height"
                        placeholder="(Height)cm"
                        value={formState.height}
                        onChange={changeHandler}
                    />
                </label>
                <button>Add Smurf</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

const mapDispatchToProps = {addSmurf};

export default connect(mapStateToProps, mapDispatchToProps)(Form);