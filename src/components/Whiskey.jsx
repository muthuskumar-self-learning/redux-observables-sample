import React from 'react';

const Whiskey = ({ whiskey }) => (
    <div>
        <img style={{ width: '300px', height: '300px' }} src={whiskey.imageUrl} alt={whiskey.name} />
        <h3>{whiskey.name}</h3>
    </div>
)

export default Whiskey;