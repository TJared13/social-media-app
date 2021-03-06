import { useContext, useRef, useState } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { AuthContext } from "../context/AuthContext";
import "../styles/share.css";
import axios from "axios";

export default function Share() {
	const { user } = useContext(AuthContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const desc = useRef();
	const [file, setFile] = useState(null);

	const submitHandler = async (e) => {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			desc: desc.current.value
		};

		if (file) {
			const data = new FormData();
			const fileName = Date.now() + file.name;
			data.append("file", file);
			data.append("name", fileName);
			newPost.img = fileName;
			try {
				await axios.post("/upload", data);
			} catch (err) {
				console.log(err);
			}
		}

		try {
			await axios.post("/posts", newPost);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						src={
							user.profilePicture
								? PF + user.profilePicture
								: PF + "/person/noAvatar.png"
						}
						alt="profile pic"
						className="shareProfileImg"
					/>
					<input
						placeholder={`What is on your mind ${user.username}?`}
						className="shareInput"
						ref={desc}
					/>
				</div>
				<hr className="shareHr" />
				<form className="shareBottom" onSubmit={submitHandler}>
					<div className="shareOptions">
						<label htmlFor="file" className="shareOption">
							<PermMedia htmlColor="tomato" className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
							<input
								style={{ display: "none" }}
								type="file"
								id="file"
								accept=".png, .jpeg, .jpg"
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</label>
						<div className="shareOption">
							<Label htmlColor="blue" className="shareIcon" />
							<span className="shareOptionText">Tag</span>
						</div>
						<div className="shareOption">
							<Room htmlColor="green" className="shareIcon" />
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
							<span className="shareOptionText">Feeling</span>
						</div>
					</div>
					<button className="shareButton" type="submit">
						Share
					</button>
				</form>
			</div>
		</div>
	);
}
