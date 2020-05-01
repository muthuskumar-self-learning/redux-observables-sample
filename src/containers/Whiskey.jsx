import React from 'react';
import { connect } from 'react-redux';

import WhiskeyGrid from '../components/WhiskeyGrid';
import { fetchWhiskies } from '../actions';

const Whiskey = ({ fetchWhiskies, isLoading, whiskies, errorMessage }) => (
    <div>
        <button onClick={fetchWhiskies}>Fetch Whiskies</button>
        {isLoading && <h1>Fetching data</h1>}
        {!isLoading && !errorMessage && <WhiskeyGrid whiskies={whiskies} />}
        {errorMessage && <h1>{errorMessage}</h1>}
    </div>
);

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
    return {
        fetchWhiskies: () => {
            dispatch(fetchWhiskies());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Whiskey);