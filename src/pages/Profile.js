import React from 'react';
import Topbar from '../components/Topbar';
import Leftbar from '../components/Leftbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';

import '../styles/profile.css';

export default function Profile() {
    return (
        <>
        <Topbar />
        <div className="profile">
            <Leftbar />
            <div className="profileRight"> 
                <div className="profileRightTop">
                    <div className="profileCover"> 
                        <img src="assets/post/3.jpeg" alt="profile cover" className="profileCoverImg" />
                        <img src="assets/post/7.jpeg" alt="profile user" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Trevin Jared</h4>
                        <span className="profileInfoDesc">Herro!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                <Feed />
                <Rightbar profile />
                </div>
            </div>
        </div>
        </>
    )
}
