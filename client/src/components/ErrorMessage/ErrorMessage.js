import React from 'react';

import './errorMessage.css';
import icon from './error.png';

const ErrorMessage = () => {
    return (
        <div className='error'>
            <img src={icon} alt='error icon'/>
            <span className='oops'>Упс!</span>
            <span>
                Щось пішло не так
            </span>
        </div>
    );
};

export default ErrorMessage;