import  { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

function FeelingToday() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    let[feeling, setFeeling] = useState(0);

    const handleFeeling = (event) => {
        setFeeling(event.target.value);

    }

    const handleClick = () => {

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
            <TextField 
            onChange={handleFeeling}
            required 
            id="standard-number" 
            type="number" 
            label="feeling?" />
            <Button 
            onClick={handleClick}
            variant="contained" color="primary">
                Primary
             </Button>
        </>
    )
}
export default FeelingToday