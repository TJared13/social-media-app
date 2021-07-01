import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import "../styles/register.css";

export default function Register() {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordAgain = useRef();
	const history = useHistory();

	const handleClick = async (e) => {
		e.preventDefault();
		if (passwordAgain.current.value !== password.current.value) {
			passwordAgain.current.setCustomValidity("Passwords do not match!");
		} else {
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value
			};
			try {
				await axios.post("/auth/register", user);
				history.push("/login");
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div className="register">
			<div className="registerWrapper">
				<div className="registerLeft">
					<h3 className="registerLogo">SocialCenter</h3>
					<span className="registerDesc">
						Connect with people from all around the world!
					</span>
				</div>
				<div className="registerRight">
					<form className="registerBox" onSubmit={handleClick}>
						<input
							placeholder="Username"
							required
							ref={username}
							className="registerInput"
						/>
						<input
							placeholder="email"
							required
							ref={email}
							className="registerInput"
						/>
						<input
							placeholder="Password"
							type="password"
							required
							ref={password}
							minLength="6"
							className="registerInput"
						/>
						<input
							placeholder="Re-type Password"
							type="password"
							required
							ref={passwordAgain}
							minLength="6"
							className="registerInput"
						/>
						<button className="registerButton" type="submit">
							Sign Up
						</button>
						<button className="registerRegisterButton">
							Log into your account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
