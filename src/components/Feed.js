import React from 'react';
import Share from './Share';
import '../styles/feed.css';
import Post from './Post';
import {Posts} from '../dummyData';

export default function Feed() {
    return (
        <div className='feed' >
            <div className="feedWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}
