import React, { useState } from 'react';

const Form = () => {
    const [formState, setFormState] = useState({
        name: null,
        age: null,
        height: null
    });

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        setFormState({
            name: null,
            age: null,
            height: null
        })
    }

    return (
        <>
            <p>The Form</p>
            <p>Add a Smurf to the Village</p>
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

export default Form;