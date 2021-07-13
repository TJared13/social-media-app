import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import '../../../styles/messenger.css';
import Topbar from '../../Header';
import ChatOnline from './ChatOnline';
import Conversation from './Conversation';
import Message from './Message';

export default function Messenger() {
	const { user } = useContext(AuthContext);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			try {
				const res = await axios.get('/conversations/' + user._id);
				setConversations(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getConversations();
	}, [user._id]);

	return (
		<>
			<Topbar />
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<input
							type="text"
							placeholder="Search for friends"
							className="chatMenuInput"
						/>
						{conversations.map((c) => (
							<Conversation conversation={c} currentUser={user} />
						))}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						<div className="chatBoxTop">
							<Message />
						</div>
						<div className="chatBoxBottom">
							<textarea
								placeholder="Say something!"
								className="chatMessageInput"
							></textarea>
							<button className="chatSubmitButton">Send</button>
						</div>
					</div>
				</div>
				<div className="chatOnline">
					<div className="chatOnlineWrapper">
						<ChatOnline />
					</div>
				</div>
			</div>
		</>
	);
}
