import {
	Button,
	FormControl,
	FormGroup,
	Input,
	InputLabel,
	Typography,
	styled,
} from "@mui/material";
import { addUser } from "../service/api";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./addUsers.css";
import { useNavigate } from "react-router-dom";

// Changing CSS of Material-UI

const Type = styled(Typography)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "BioRhyme", serif;
`;

const Container = styled(FormGroup)`
	width: 40%;
	margin: 8% auto 0 auto;
	& > div > div > Input {
		font-family: "BioRhyme", serif;
		margin-left: 2rem;
	}
	& > div > label {
		font-family: "BioRhyme", serif;
		margin-top: 0.3rem;
	}
`;

const intialValues = {
	fName: "",
	lName: "",
	email: "",
	phone: "",
};

const AddUsers = () => {
	const [user, setUser] = useState(intialValues);
	const navigate = useNavigate();

	// storing new values
	const onValueChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		console.log(user);
	};

	// adding the details on clicking the submit button

	const addUserDetails = async () => {
		addUser(user);
		navigate("/");
	};
	return (
		<div>
			<Container>
				<Type variant="h5">
					<AccountCircleIcon fontSize="Large" />
					Add User
				</Type>
				<FormControl>
					<InputLabel>First Name</InputLabel>
					<Input onChange={(e) => onValueChange(e)} name="fName" />
				</FormControl>
				<FormControl>
					<InputLabel>Last Name</InputLabel>
					<Input onChange={(e) => onValueChange(e)} name="lName" />
				</FormControl>
				<FormControl>
					<InputLabel>Email address</InputLabel>
					<Input onChange={(e) => onValueChange(e)} name="email" />
				</FormControl>
				<FormControl>
					<InputLabel>Phone Number</InputLabel>
					<Input onChange={(e) => onValueChange(e)} name="phone" />
				</FormControl>
				<Button onClick={() => addUserDetails()}>Submit</Button>
			</Container>
		</div>
	);
};

export default AddUsers;
