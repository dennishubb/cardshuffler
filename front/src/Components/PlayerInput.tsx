import { useState, useEffect } from 'react';
import { TextInput } from 'react-responsive-ui';
import axios from 'axios';
import PlayerResult from './PlayerResult';
import { useAppDispatch } from '../app/hooks';
import { setPlayerResult } from '../redux/slice/playerResult';
import { store } from '../app/store';
import '../Styles/playerInput.css';

function PlayerInput() {
    const [text, setText] = useState('');
    const [errorText, setErrorText] = useState('');

    const onChangeFunction = (input: string) => {
        // a. Number of people (numerical value)
        // b. It does not matter how cards are given if recompile of program arguments, parameter,
        // keyboard input and so on are not necessary.
        // c. In case input value is nil or value is invalid then the error message of “Input value does
        // not exist or value is invalid” must be displayed and the process must be terminated.
        // d. Any number less than 0 is an invalid value.
        // e. Greater than 53 are normal values and cards must be distributed to a number of people
        // instead of having it as an error.

        store.dispatch(setPlayerResult({}));
        
        if(isNaN(Number(input)) || (Number(input) < 0)) setErrorText("Input value does not exist or value is invalid");
        else{
             setErrorText('');
             setText(input);
        }
    };

    const onKeyDownFunction = (e: any) => {
        if(e.key == 'Enter'){
            shuffle();
        }
    };

    const shuffle = () => {
        axios.get(process.env.REACT_APP_API_URL+'card/shuffle/'+(text || 0))
        .then((response) => {
            store.dispatch(setPlayerResult(response.data.data));
        })
        .catch((error) => {
            if(error.response.status === 401)
                setErrorText(error.response.data.message);
        });
    };

    return (
      <div id="playerInput">
        <h1 id="inputLabel">Enter Player Count</h1>
        <TextInput
            placeholder="Enter a number"
            value={text}
            onChange={onChangeFunction}
            onKeyDown={onKeyDownFunction}
        />
        <button id="shuffleBtn" onClick={shuffle}>Shuffle!</button>
        <div id="inputError">{errorText}</div>
      </div>
    );
}
  
export default PlayerInput;