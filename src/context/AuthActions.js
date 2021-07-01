import axios from "axios";

export const LoginStart = (userCredentials) => ({
	type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
	type: "LOGIN_SUCCESS",
	payload: user
});

export const LoginFailure = (error) => ({
	type: "LOGIN_FAILURE",
	payload: error
});

export const LogoutUser = () => ({
	type: "LOGOUT_USER"
});

export function logoutUser() {
	axios
		.delete("/auth/logout")
		.then((response) => response.data)
		.catch((err) => console.log(err));

	return {
		type: "LOGOUT_USER"
	};
}
