import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from '../styles/Footer.style';


const Footer = () => {
    return (
        <StyledFooter>
            <h2>Drag and drop to reorder list</h2>


                <div className="attribution">
                    Challenge by <Link to={{ pathname: "https://www.frontendmentor.io?ref=challenge"}} target="_blank">Frontend Mentor</Link>. 
                    Coded by <Link to={{ pathname: "https://github.com/Johnpaul-Attamah" }}>Johnpaul Attamah</Link>.
                </div>
        </StyledFooter>
    )
}

export default Footer
