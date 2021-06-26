import React from 'react';
import Topbar from './Header';
import Leftbar from './Leftbar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import '../styles/home.css';

export default function Home() {
    return (
        <>
        <Topbar />
        <div className="homeContainer">
            <Leftbar />
            <Feed />
            <Rightbar />
        </div>
        </>
    )
}
