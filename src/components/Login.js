import React, { useRef, useContext } from "react";
import "../styles/login.css";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
	const username = useRef();
	const password = useRef();
	const { isFetching, dispatch } = useContext(AuthContext);

	const handleClick = (e) => {
		e.preventDefault();
		loginCall(
			{ username: username.current.value, password: password.current.value },
			dispatch
		);
	};

	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">SocialCenter</h3>
					<span className="loginDesc">
						Connect with people from all around the world!
					</span>
				</div>
				<div className="loginRight">
					<form className="loginBox" onSubmit={handleClick}>
						<input
							placeholder="Username"
							type="string"
							className="loginInput"
							required
							ref={username}
						/>
						<input
							placeholder="Password"
							type="password"
							required
							minLength="6"
							className="loginInput"
							ref={password}
						/>
						<button className="loginButton" type="submit" disabled={isFetching}>
							{isFetching ? (
								<CircularProgress color="white" size="20px" />
							) : (
								"Log In"
							)}
						</button>
						<span className="loginForgot">Forgot Password?</span>
						<button className="loginRegisterButton">
							{isFetching ? (
								<CircularProgress color="white" size="20px" />
							) : (
								"Create an account"
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
