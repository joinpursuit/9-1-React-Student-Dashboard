import React from 'react';

function NavBar(props) {
    return (
        <nav>
            <a
            href='https://github.com/DestinyJoyner'
            target="_blank">Git Hub
            <br></br>
            <img src = {`${process.env.PUBLIC_URL}/assets/gitHub-icon.png`}
            alt= "gitHub-icon" />
            </a>
            <a
            href='https://www.linkedin.com/in/destiny-joyner-934846243/'
            target="_blank">LinkedIn
            <br></br>
            <img src = {`${process.env.PUBLIC_URL}/assets/LinkedIn-icon.png`}
            alt = "LinkedIn-icon"  />
            </a>
            <a
            href="mailto:destinyjoyner@pursuit.org">Contact Me
            <br></br>
            <img src ={`${process.env.PUBLIC_URL}/assets/Mail-icon.png`}
            alt = "Mail-icon" />
            </a>
        </nav>
    );
}

export default NavBar;