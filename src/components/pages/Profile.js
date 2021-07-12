import React, { useEffect, useState } from 'react';
import Topbar from '../Header';
import Leftbar from '../Leftbar';
import Feed from '../Feed';
import Rightbar from '../Rightbar';
import axios from 'axios';
import { useParams } from 'react-router';
import '../../styles/profile.css';

export default function Profile() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState({});
	const username = useParams().username;

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/users?username=${username}`);
			setUser(res.data);
		};
		fetchUser();
	}, [username]);

	return (
		<>
			<Topbar />
			<div className="profile">
				<Leftbar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src={user.coverPicture || PF + 'person/noCover.jpeg'}
								alt="profile cover"
								className="profileCoverImg"
							/>
							<img
								src={user.profilePicture || PF + 'person/noAvatar.png'}
								alt="profile user"
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<span className="profileInfoDesc">{user.desc}</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed username={username} />
						<Rightbar user={user} />
					</div>
				</div>
			</div>
		</>
	);
}
