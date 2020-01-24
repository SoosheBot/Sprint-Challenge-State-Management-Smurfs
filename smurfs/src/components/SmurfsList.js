import React from 'react';
import { connect } from 'react-redux';
import SmurfsInfo from './SmurfsInfo';

const SmurfsList = props => {
    console.log('SmurfsList props', props);
    return (
        <div>
            {props.smurfs.map(info => (
                <SmurfsInfo key={info.id} info={info} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    };
};

export default connect(mapStateToProps, {})(SmurfsList);