import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
	dispatch({ type: "LOGIN_START " });
	try {
		const res = await axios.post("auth/login", userCredential);
		dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
	} catch (err) {
		dispatch({ type: "LOGIN_FAILURE", payload: err });
	}
};

export const logoutCall = (res, dispatch) => {
	dispatch({ type: "LOGOUT_USER" });
	try {
		axios.delete("/auth/logout").then(res.sendStatus(200));
	} catch (err) {
		console.log(err);
	}
};
