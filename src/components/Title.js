import React from 'react';
import PropTypes from 'prop-types';

export const Title = (props) => {
    let latestEntry = props.optionEntries.length - 1;

    return (
        <h1>{props.optionEntries[latestEntry]}</h1>
    );
};

Title.propTypes = {
    optionEntries: PropTypes.arrayOf(PropTypes.string),
};
