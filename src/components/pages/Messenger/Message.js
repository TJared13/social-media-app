import '../../../styles/message.css';

export default function Message({ own }) {
	return (
		<div className={own ? 'message own' : 'message'}>
			<div className="messageTop">
				<img
					src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
					alt=""
					className="messageImg"
				/>
				<p className="messageText">Hello!</p>
			</div>
			<div className="messageBottom">1 hour ago</div>
		</div>
	);
}
