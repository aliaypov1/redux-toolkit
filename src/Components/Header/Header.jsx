import React from 'react';
import { BiFoodMenu } from "react-icons/bi";

const Header = () => {
    return (
        <div>
            <header style={{padding:'13px', background:'black',color:'white'}}>
                <div className="header__logo"><BiFoodMenu/></div>
            </header>
        </div>
    );
};

export default Header;