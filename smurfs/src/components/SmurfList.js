import React from 'react';

import Smurf from './Smurf';

//import connect
import { connect } from 'react-redux';

const SmurfList = props => {
    console.log('props from SmurfList', props)

    return (
        <>
            <p>The Smurf List</p>
            <button>Get The Smurfs</button>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf />
                )
            })}
        </>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfList);