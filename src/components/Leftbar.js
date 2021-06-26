import React from 'react';
import CloseFriends from './CloseFriends';
import {Users} from '../dummyData';
import {RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from '@material-ui/icons';
import '../styles/leftbar.css';

export default function Leftbar() {

    return (
        <div className='leftbar' >
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListitem">
                        <RssFeed className='leftbarIcon' />
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListitem">
                        <Chat className='leftbarIcon' />
                        <span className="leftbarListItemText">Chats</span>
                    </li>
                    <li className="leftbarListitem">
                        <PlayCircleFilledOutlined className='leftbarIcon' />
                        <span className="leftbarListItemText">Videos</span>
                    </li>
                    <li className="leftbarListitem">
                        <Group className='leftbarIcon' />
                        <span className="leftbarListItemText">Groups</span>
                    </li>
                    <li className="leftbarListitem">
                        <Bookmark className='leftbarIcon' />
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListitem">
                        <HelpOutline className='leftbarIcon' />
                        <span className="leftbarListItemText">Questions</span>
                    </li>
                    <li className="leftbarListitem">
                        <WorkOutline className='leftbarIcon' />
                        <span className="leftbarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListitem">
                        <Event className='leftbarIcon' />
                        <span className="leftbarListItemText">Events</span>
                    </li>
                    <li className="leftbarListitem">
                        <School className='leftbarIcon' />
                        <span className="leftbarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr" />
                <ul className="leftbarFriendList">
                    {Users.map(u => (
                        <CloseFriends key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
