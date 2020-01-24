import React from 'react';

const SmurfsInfo = () => {
    const {
        name,
        age,
        height
    };

    return (
        <div className='add-smurf-info'>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <h4>Height: {height}</h4>
        </div>
    );
};

export default SmurfsInfo;