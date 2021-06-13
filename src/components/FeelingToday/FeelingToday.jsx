import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

function FeelingToday() {
    const history = useHistory();
    const dispatch = useDispatch();

    let [feeling, setFeeling] = useState('');

    const handleFeeling = (event) => {
        setFeeling(event.target.value);

    }

    const handleClick = () => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })

        history.push('/Understanding')
    }
    console.log(feeling)
    return (
        <>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleClick}>
                <TextField
                    onChange={handleFeeling}
                    // data is required
                    required={true}
                    min={0}
                    max={10}
                    id="standard-number"
                    type="number"
                    label="feeling?"
                    value={feeling}
                />

                <Button
                    variant="contained"
                    color="primary"
                    type="submit">
                    Next
             </Button>
            </form>
        </>
    )
}
export default FeelingToday