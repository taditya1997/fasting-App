import React from 'react';
import './index.css';
import StopWatch from '../StopWatch';

const Ring = ({datetime,isActive,hours}) => {
    return (
        <div class="rings">
            <div class="percent1">
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div class="number">
                    <StopWatch datetime={datetime} isActive={isActive} hours={hours} />
                </div>
            </div>

        </div>

    );
};

export default Ring;