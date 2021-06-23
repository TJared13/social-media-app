import React from 'react';
import {MoreVert} from '@material-ui/icons';
import '../styles/post.css';

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/pictures/profile.jpg" alt="" className="postProfileImg" />
                        <span className="postUsername">Trevin Jared</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Herro SocialCenter!</span>
                    <img src="/assets/pictures/bbaw_500.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
