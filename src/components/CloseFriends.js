import '../styles/leftbar.css';


export default function CloseFriends({user}) {
    return (
        <li className="leftbarFriend">
            <img src={user.profilePicture} alt="friend profile pic" className="leftbarFriendImg" />
            <span className="leftbarFriendName">{user.username}</span>
        </li>

    )
}
