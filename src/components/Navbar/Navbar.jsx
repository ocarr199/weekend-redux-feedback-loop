import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'

function Navbar() {
    const history = useHistory();

    // each goes to different pages
    const goToFeeling = () => {
        history.push('/')
    }
    const goToUnderstanding = () => {
        history.push('/Understanding')
    }
    const goToSupported = () => {
        history.push('/Supported')
    }
    const goToComments = () => {
        history.push('/Comments')
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar>

                    <Button onClick={goToFeeling} color="inherit">Feeling?</Button>
                    <Button onClick={goToUnderstanding} color="inherit">Understanding?</Button>
                    <Button onClick={goToSupported} color="inherit">Supported?</Button>
                    <Button onClick={goToComments} color="inherit">Comments?</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar