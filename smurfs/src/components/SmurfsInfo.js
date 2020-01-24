import React from 'react';

const SmurfsInfo = ({info}) => {
    const {
        name,
        age,
        height,
        id
    } = info;

    return (
        <div className='add-smurf-info'>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <h4>Height: {height}</h4>
            <h4>ID: {id}</h4>
        </div>
    );
};

export default SmurfsInfo;