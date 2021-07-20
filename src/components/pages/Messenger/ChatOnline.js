import axios from 'axios';
import { useState, useEffect } from 'react';
import '../../../styles/chatOnline.css';

export default function ChatOnline({
	onlineUsers,
	currentId,
	setCurrentChats
}) {
	const [friends, setFriends] = useState([]);
	const [onlineFriends, setOnlineFriends] = useState([]);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const getFriends = async () => {
			const res = await axios.get('/users/friends/' + currentId);
			setFriends(res.data);
		};
		getFriends();
	}, [currentId]);

	useEffect(() => {
		setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
	}, [friends, onlineUsers]);
	console.log(onlineUsers);

	return (
		<div className="chatOnline">
			{onlineFriends.map((o) => (
				<div className="chatOnlineFriend">
					<div className="chatOnlineImgContainer">
						<img
							src={
								o?.profilePicture
									? PF + o.profilePicture
									: PF + 'person/noAvatar.png'
							}
							alt=""
							className="chatOnlineImg"
						/>
						<div className="chatOnlineBadge"></div>
					</div>
					<span className="chatOnlineName">{o?.username}</span>
				</div>
			))}
		</div>
	);
}
