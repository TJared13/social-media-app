import '../../../styles/chatOnline.css';

export default function ChatOnline() {
	return (
		<div className="chatOnline">
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img
						src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
						alt=""
						className="chatOnlineImg"
					/>
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">John Doe</span>
			</div>
		</div>
	);
}
