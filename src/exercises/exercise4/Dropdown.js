import React from 'react';
import PropTypes from 'prop-types';

/**
 * Exercise 4:
 * Create a dropdown component which will add an option, with the name
 * the user has entered, into the input box when your button is clicked
 */

export const Dropdown = (props) => {

    let optionEntries = props.optionEntries.map((data, index) => {
        return <option key={index}>{data}</option>;
    });

    return (
        <div>
            <select>
                {optionEntries}
            </select>
        </div>
    );
};

Dropdown.propTypes = {
    optionEntries: PropTypes.arrayOf(PropTypes.string),
};
