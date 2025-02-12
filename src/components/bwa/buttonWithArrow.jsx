import React from 'react';
import arrowImage from '../../assets/arrows.png';
import './buttonwitharrow.css';

export default function ButtonWithArrow() {
    return (
        <button className="ContactButton">
            Contact me
            <img src={arrowImage} alt="Goto" className="arrow" />
        </button>
    );
}
