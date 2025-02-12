import React from 'react';
import Headline from "../headline/headline";
import MyInfo from "../myinfo/myInfo";
import MyPhoto from "../myphoto/myPhoto";
import "./hero.css";
import backgroundImage from '../../assets/pexels-padrinan-255379.jpg'; 

export default function Hero() {
    const style = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
    };

    return (
        <div className="hero" style={style}>
            <Headline />
            <div className='basicllyMe'>
                <MyInfo />
                <MyPhoto />
            </div>
        </div>
    );
}