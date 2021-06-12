import  { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

function UnderstandingContent(){
    const history = useHistory();
    const dispatch = useDispatch();

    let[understanding, setUnderstanding] = useState( 0);

    const handleUnderstanding = (event) => {
        setUnderstanding(event.target.value);
    }

    const handleClick = () => {

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })

        history.push('/Supported')
    }
    console.log(understanding)
    return(
        <>
        <h1>How well are you understanding the content?</h1>
        <TextField 
        onChange={handleUnderstanding}
        required 
        id="standard-number" 
        type="number" 
        label="Understanding?" />
        <Button 
        onClick={handleClick}
        variant="contained" color="primary">
            Next
         </Button>
         </>
    )
}
export default UnderstandingContent