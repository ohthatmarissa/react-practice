import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
    return (
        <div>
            <h2>The Page You Are Looking For Does Not Exist!</h2>
            <h3>Would You Like To Return <Link to="/">Home</Link> Instead?</h3>
        </div>
    );
}

Error404.propTypes = {
    location: PropTypes.object
};

export default Error404