import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';
const NotFound = () => {
    return (
        <div className='notfound'>
            <h3 className='notfound-text'>Not Found</h3>
            <p className='notfound-found'>go to home page <Link to="/">Here</Link></p>
            
        </div>
    )
}
export default NotFound;