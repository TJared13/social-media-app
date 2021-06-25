import React from 'react';
import Topbar from '../components/Topbar';
import Leftbar from '../components/Leftbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
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
