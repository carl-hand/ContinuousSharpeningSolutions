import React from 'react';
import ReactDOM from 'react-dom';
import Button from './exercises/exercise1/Button';
import {Input} from './exercises/exercise2/Input';
import * as EXERCISE_CONSTANTS from './constants/ExerciseConstants';
import {Title} from './components/Title';
import {Dropdown} from './exercises/exercise4/Dropdown';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            inputValue: '',
            optionEntries: ['']
        };
    }

    handleChange = (value) => {
        this.setState({
            inputValue: value
        });
    };

    handleClick = () => {
        let optionEntry = this.state.inputValue;
        this.setState({
            optionEntries: [...this.state.optionEntries, optionEntry]
        });
    };

    render() {
        return (
            <div>
                <Input onChange={this.handleChange}/>
                <Button value={EXERCISE_CONSTANTS.BUTTON_LABEL} onClick={this.handleClick}
                        message={this.state.inputValue}/>
                <Title optionEntries={this.state.optionEntries}/>
                <Dropdown optionEntries={this.state.optionEntries}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
