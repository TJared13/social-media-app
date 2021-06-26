import React from 'react';
import Topbar from './Header';
import Leftbar from './Leftbar';
import Feed from './Feed';
import Rightbar from './Rightbar';

import '../styles/profile.css';

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
        <>
        <Topbar />
        <div className="profile">
            <Leftbar />
            <div className="profileRight"> 
                <div className="profileRightTop">
                    <div className="profileCover"> 
                        <img src={`${PF}post/3.jpeg`} alt="profile cover" className="profileCoverImg" />
                        <img src={`${PF}person/7.jpeg`} alt="profile user" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Trevin Jared</h4>
                        <span className="profileInfoDesc">Herro!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                <Feed username='john'/>
                <Rightbar profile />
                </div>
            </div>
        </div>
        </>
    )
}
