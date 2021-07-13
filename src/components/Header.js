import '../styles/topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { logoutCall } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';

export default function Topbar() {
	const history = useHistory();
	const { user, dispatch } = useContext(AuthContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	const handleLogout = (e) => {
		e.preventDefault();
		logoutCall(dispatch);
		history.push('/login');
		console.log(user);
	};

	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<span className="logo">SocialCenter</span>
				</Link>
			</div>

			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input
						placeholder="Search for friends, posts, or videos"
						className="searchInput"
					/>
				</div>
			</div>

			<div className="topbarRight">
				<div className="topbarLinks">
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Timeline</span>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person onClick={handleLogout} />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Link to="/messenger">
							<Chat />
							<span className="topbarIconBadge">2</span>
						</Link>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">1</span>
					</div>
				</div>
				<Link to={`/profile/${user.username}`}>
					<img
						src={
							user.profilePicture
								? PF + user.profilePicture
								: PF + 'person/noAvatar.png'
						}
						alt="ProfilePic"
						className="topbarImg"
					/>
				</Link>
			</div>
		</div>
	);
}
