import axios from "axios";

// Intailising the backend url

const API_URL = "http://localhost:5000/users";

// api for adding user data

export const addUser = async (data) => {
	try {
		await axios.post(API_URL, data);
	} catch (error) {
		console.log("Error while addUser api", error.message);
	}
};

// api for getting user data

export const getUser = async () => {
	try {
		return await axios.get(API_URL);
	} catch (error) {
		console.log("Error while getUser api", error.message);
	}
};

// api for getting the data selected

export const editUser = async (data) => {
	try {
		return await axios.get(`${API_URL}/${data}`);
	} catch (error) {
		console.log("Error while editUser api", error.message);
	}
};

// api for updating the data

export const editUsers = async (data, id) => {
	try {
		return await axios.put(`${API_URL}/${id}`, data);
	} catch (error) {
		console.log("Error while editUsers api", error.message);
	}
};

// api to delete the data

export const deleteUser = async (id) => {
	try {
		return await axios.delete(`${API_URL}/${id}`);
	} catch (error) {
		console.log("Error while deleteUsers api", error.message);
	}
};
