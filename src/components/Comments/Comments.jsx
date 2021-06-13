import  { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'


function Comments(){
    const history = useHistory();
    const dispatch = useDispatch();

    let[comments, setComments] = useState('');


    const handleComments = (event) => {
        setComments(event.target.value);

    }


    const handleClick = () => {

        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })

        history.push('/Review')
    }
    console.log(comments)
    return(
        <>
        <h1>Any comments you want to leave??</h1>
        <TextField 
        style ={{width: '80%'}}
        onChange={handleComments}
        multiline
        rows={3}
        rowsMax={4}
        id="standard-number"  
        label="Comments?" />
        <Button 
                   onClick={handleClick}
        variant="contained" color="primary">
        Next
         </Button>
         </>
        
    )
}
export default Comments