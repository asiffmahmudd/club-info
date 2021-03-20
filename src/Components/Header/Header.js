import React from 'react';
import './Header.css';

const Header = (props) => {
    let bannerContent;
    if(!props.isSinglePage){
        bannerContent = <h1 className="text-center text-white">Team Tracker</h1>;
    }
    else{
        bannerContent = <div><img src={props.img} alt="Team badge"/></div>;
    }
    return (
        <header>
            <div className="banner">
                <div className="banner-overlay"></div>
                <div className="banner-title">
                    {bannerContent}
                </div>
            </div>
        </header>
    );
};

export default Header;