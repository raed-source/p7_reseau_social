import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/NotFound.css';
import Navigation from '../components/Navigation';
// const NotFound = () => {
    // return (
        // <div className='notfound'>
            <Navigation/>
            // <h3 className='notfound-text'>Not Found</h3>
            // <p className='notfound-found'>go to home page <Link to="/">Here</Link></p>
            
        // </div>
    // )
// }
// export default NotFound;

function Error() {
    return (
        <div>
            <h1>Oups 🙈 Cette page n'existe pas</h1>
            <p className='notfound-found'>go to home page <Link to="/">Here</Link></p>

        </div>
    )
}

export default Error