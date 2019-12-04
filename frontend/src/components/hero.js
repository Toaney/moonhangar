import React from 'react';
import EmailSignup from "./emailSignup";

const Hero = ({heroBackground, heroTitle, heroCaption}) => {

    return(
        <div className="hero" style={ heroBackground ? {backgroundImage: `url(${heroBackground})`} : {}}>
            <div className="hero-content-container">
                <h1 className="hero-title" tabindex="0">{heroTitle}</h1>
                {heroCaption && <p className="hero-caption">{heroCaption}</p>}
                <EmailSignup />
            </div>
        </div>
    )
}

export default Hero;