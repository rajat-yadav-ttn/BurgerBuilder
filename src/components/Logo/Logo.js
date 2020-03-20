import React from 'react';

import Logo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo=(props)=>(
    <div className={classes.Logo}>
        <img src={Logo} alt="MyBurger" />
    </div>
);

export default logo;