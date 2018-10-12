import React from 'react';
import './Arrow.css';

export default ({ title, amount }) => {
    const amt = amount.toString();
    return (
        <div className='arrow'>
            <div className='arrow-wrapper'>
                <div className='title'>{title}</div>
                <div className='amount'>
                    <span>{amt.slice(0,4)}</span>
                    <span>{amt.slice(4,6)}</span>
                    <span>{amt.slice(6,7)}</span>
                </div>
                <div className='arrow-body'></div>
                <div className='arrow-corner-top'></div>
                <div className='arrow-corner-middle'></div>
                <div className='arrow-corner-bottom'></div>
            </div>
            <div className='arrow-wrapper'>
                <div className='arrow-body'></div>
                <div className='arrow-corner-top'></div>
                <div className='arrow-corner-middle'></div>
                <div className='arrow-corner-bottom'></div>
            </div>
        </div>
    );
}