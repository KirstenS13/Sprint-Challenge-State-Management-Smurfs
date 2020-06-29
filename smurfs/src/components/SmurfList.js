import React from 'react';

import Smurf from './Smurf';

//import connect
import { connect } from 'react-redux';

//import getSmurfs action creator
import { getSmurfs } from '../actions';

const SmurfList = props => {
    console.log('props from SmurfList', props)

    return (
        <>
            <p>The Smurf List</p>
            <button onClick={() => props.getSmurfs()}>Get The Smurfs</button>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf 
                        name={smurf.name}
                        age={smurf.age}
                        height={smurf.height}
                    />
                )
            })}
        </>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
};

const mapDispatchToProps = {getSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);