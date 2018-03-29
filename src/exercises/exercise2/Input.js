import React from 'react';
import PropTypes from 'prop-types';

/**
 * Exercise 2:
 * Create an input component that allows the user to enter values.
 * Implement the input component in a way that react will be aware
 * of what the user is entering.
 * Store the values the user has entered into the input box
 */

export class Input extends React.Component {

    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({
            inputValue: value
        });

        this.props.onChange(value);
    };

    render() {
        return(
            <input value={this.state.inputValue} onChange={this.handleChange}/>
        )
    }
}

Input.propTypes = {
    onChange: PropTypes.func
};
