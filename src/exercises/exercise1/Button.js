import React from 'react';
import PropTypes from 'prop-types';

/**
 * Exercise 1:
 * Create a button component
 */

const Button = (props) => {

    const handleClick = () => {
        if (props.message !== '') {
            props.onClick();
        }
    };

    return(
        <button type="button" onClick={handleClick}>{props.value}</button>
    );
};

Button.propTypes = {
    value: PropTypes.string,
    message: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
