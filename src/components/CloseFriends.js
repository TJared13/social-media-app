import '../styles/leftbar.css';


export default function CloseFriends({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    return (
        <li className="leftbarFriend">
            <img src={PF+user.profilePicture} alt="friend profile pic" className="leftbarFriendImg" />
            <span className="leftbarFriendName">{user.username}</span>
        </li>

    )
}
