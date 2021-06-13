import React from 'react';
import axios from 'axios';
import './App.css';
import BeingSupported from '../BeingSupported/BeingSupported';
import FeelingToday from '../FeelingToday/FeelingToday';
import UnderstandingContent from '../UnderstandingContent/UnderstandingContent';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import {Route, HashRouter as Router} from 'react-router-dom';
import ThankYou from '../ThankYou/ThankYou';
import Navbar from '../Navbar/Navbar'
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
function App() {




  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>

    <Navbar />
      </header>
    <Route path='/' exact >
     <Home />
        </Route>


      <Route path='/Feeling' >
      <FeelingToday />
        </Route>

        <Route path='/Understanding'>
        <UnderstandingContent />
        </Route> 
        
        <Route path='/Supported' >
        <BeingSupported />
        </Route>
  
        <Route path='/Comments' >
        <Comments />
        </Route>

        <Route path='/Review' >
        {console.log(Route)}
       <ReviewFeedback />
        </Route>

        <Route path='/ThankYou' >
       <ThankYou />
        </Route>
        <Route path='/Admin' >
          <Admin/>
        </Route>
    </div>
    </Router>
  );
 
}

export default App;
