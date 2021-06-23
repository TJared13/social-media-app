import React from 'react';
import '../styles/rightbar.css';

export default function Rightbar() {
    return (
        <div className='rightbar' >
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>3 others</b> have a birthday today</span>
                </div>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendlist">
                    <li className="rightbarFriend">
                        <div className="profileImgContainer">
                            <img src="/assets/pictures/profile.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Iron Man</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
