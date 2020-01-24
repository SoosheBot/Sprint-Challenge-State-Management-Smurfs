import React from 'react';
import { connect } from 'react-redux';
import SmurfsInfo from './SmurfsInfo';

const SmurfsList = (props) => {
    console.log('SmurfsList props is firing', props);
    return (
        <div>
            {props.smurfs.map(info => (
                <SmurfsInfo key={info.id} info={info}>{info}</SmurfsInfo>
                
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