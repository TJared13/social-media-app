import '../../../styles/message.css';
import { format } from 'timeago.js';

export default function Message({ message, own }) {
	return (
		<div className={own ? 'message own' : 'message'}>
			<div className="messageTop">
				<img
					src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
					alt=""
					className="messageImg"
				/>
				<p className="messageText">{message.text}</p>
			</div>
			<div className="messageBottom">{format(message.createdAt)}</div>
		</div>
	);
}
