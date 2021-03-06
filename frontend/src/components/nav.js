import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-left">
                <span className="nav-logo"><Link to="/">Moonhangar</Link></span>
                <span className="nav-link"><Link to="/home">tab1</Link></span>
                <span className="nav-link"><Link to="/home">tab2</Link></span>
            </div>
            <div className="nav-right">
                <span className="nav-item"></span>
            </div>
        </div>
    )
}

export default Nav;