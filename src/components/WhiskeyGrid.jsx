import React from 'react';

import Whiskey from './Whiskey';

const WhiskeyGrid = ({ whiskies }) => (
    <div>
        {whiskies.map(whiskey => (<Whiskey key={whiskey.id} whiskey={whiskey} />))}
    </div>
);

export default WhiskeyGrid;