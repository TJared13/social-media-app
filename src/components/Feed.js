import React, {useState, useEffect} from 'react';
import Post from './Post';
import Share from './Share';
import '../styles/feed.css';
import axios from 'axios';


export default function Feed({username}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username 
            ? await axios.get('posts/profile/' + username) 
            : await axios.get('posts/timeline/60d4f90b2be4450760772429');
            setPosts(res.data)
        }
        fetchPosts();
    }, [username])

    return (
        <div className='feed' >
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}
