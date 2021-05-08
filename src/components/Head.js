import React from 'react';
import '../style.css';

function Head(){

    const dt=new Date();
    const hrs=dt.getHours();

    return (
        <div className="heading_css">
        <header>
            Welcome Teja
        </header>
        <p>
            {hrs}
        </p>
        </div>
    );

}

export default Head