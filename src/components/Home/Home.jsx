import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import './Home.css'

function Home() {
    const history = useHistory();
    // getting started with leaving feedback
    const getStarted = () => {
        history.push('/Feeling')
    }
    // going to the admin page
    const admin = () => {
        history.push('/Admin')

    }
    return (
        <>
            <h1>Your Daily Feedback</h1>
            <div className="getStarted">
                <Button
                    onClick={getStarted}
                    variant="contained"
                    color="primary"
                    type="submit">
                    Get Started
         </Button>
            </div>
            <div>
                <Button
                    onClick={admin}
                    variant="contained"
                    color="primary"
                    type="submit">
                    ADMIN
             </Button>
            </div>
        </>
    )
}

export default Home;