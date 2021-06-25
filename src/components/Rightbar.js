import React from 'react';
import {Users} from '../dummyData';
import Online from '../components/Online';
import '../styles/rightbar.css';

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                <img src="/assets/gift.png" alt="" className="birthdayImg" />
                <span className="birthdayText">
                        <b>3 others</b> have a birthday today</span>
                </div>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendlist">
                    {Users.map(u => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return ( 
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Tacoma</span>
                </div>
            </div>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Salt Lake City</span>
                </div>
            </div>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">In a relationship</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Iron Man</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Seven Lions</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Illenium</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Rezz</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">BTSM</span>
                </div>
            </div>
            </>
         )
    };
    return (
        <div className='rightbar' >
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar />}
            </div>
        </div>
    )
}
