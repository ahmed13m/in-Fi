import {
	Button,
	FormControl,
	FormGroup,
	Input,
	InputLabel,
	Typography,
	styled,
} from "@mui/material";
import { editUser, editUsers } from "../service/api";
import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import "./editUsers.css";
import { useNavigate, useParams } from "react-router-dom";

// changing the css of material-ui in desired format

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
const EditUsers = () => {
	//Intalising the hooks
	const [user, setUser] = useState(intialValues);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		editUserData();
	}, []);

	//
	const editUserData = async () => {
		let response = await editUser(id);
		setUser(response.data);
	};

	// storing the updated value

	const onValueChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		console.log(user);
	};

	// updating and details by calling the api and fetching back to home page

	const editUserDetails = async () => {
		await editUsers(user, id);
		navigate("/");
	};
	return (
		<div>
			<Container>
				<Type variant="h5">
					<EditIcon fontSize="Large" />
					Edit User
				</Type>
				<FormControl>
					<InputLabel>First Name</InputLabel>
					<Input
						onChange={(e) => onValueChange(e)}
						name="fName"
						value={user.fName}
					/>
				</FormControl>
				<FormControl>
					<InputLabel>Last Name</InputLabel>
					<Input
						onChange={(e) => onValueChange(e)}
						name="lName"
						value={user.lName}
					/>
				</FormControl>
				<FormControl>
					<InputLabel>Email address</InputLabel>
					<Input
						onChange={(e) => onValueChange(e)}
						name="email"
						value={user.email}
					/>
				</FormControl>
				<FormControl>
					<InputLabel>Phone Number</InputLabel>
					<Input
						onChange={(e) => onValueChange(e)}
						name="phone"
						value={user.phone}
					/>
				</FormControl>
				<Button onClick={() => editUserDetails()} variant="contained">
					Submit
				</Button>
			</Container>
		</div>
	);
};

export default EditUsers;
