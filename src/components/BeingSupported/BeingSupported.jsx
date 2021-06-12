import  { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

function BeingSupported(){

    const history = useHistory();
    const dispatch = useDispatch();


    let[support, setSupport] = useState(0);

    const handleSupport = (event) => {
        setSupport(event.target.value);

    }

    const handleClick = () => {

    
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        })
        history.push('/Comments')
    }
    console.log(support)
    return(
        <>
        <h1>How well are you being supported?</h1>
        <TextField 
        onChange={handleSupport}
        required
         id="standard-number"
          type="number" 
          label="feeling?" />
        <Button 
        onClick={handleClick}
        variant="contained" color="primary">
        Next
         </Button>
         </>
    )
}
export default BeingSupported