import {
	Table,
	TableCell,
	TableHead,
	TableRow,
	TableBody,
	styled,
	Button,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { getUser, deleteUser } from "../service/api";
import { Link } from "react-router-dom";
import "./showUsers.css";

// Changing the styles of material-ui in desired format

const StyledTable = styled(Table)`
	width: 58%;
	margin: 8% auto 0px auto;
	background-color: transparent;

	border: 2px solid black;
	box-shadow: -6.5px 8px 0 black;
`;
const Thread = styled(TableRow)`
	& > th {
		cursor: pointer;
		font-family: "JetBrains Mono", monospace;
	}
	& > th :hover {
		transition: zoom-out;
	}
`;
const TBro = styled(TableBody)`
	& > tr:hover {
		background-color: #f8f8ff;
	}
`;
const TBody = styled(TableRow)`
	& > td {
		cursor: pointer;
		font-family: "JetBrains Mono", monospace;
	}
	& > td > button {
		cursor: pointer;
		font-family: "JetBrains Mono", monospace;
	}
	& > td > button:hover {
		background-color: red;
		color: white;
	}
	& > td > a:hover {
		background-color: #92a8d1;
		color: white;
	}
`;

const ShowUsers = () => {
	const [users, setUsers] = useState([]);

	// fetches the data and display
	useEffect(() => {
		getUserDetails();
	}, []);

	const getUserDetails = async () => {
		let response = await getUser();
		console.log(response);
		setUsers(response.data);
	};

	// deletes the selected on click with the help of an api
	const deleteUserData = async (id) => {
		await deleteUser(id);
		getUserDetails();
	};
	return (
		<div>
			<StyledTable>
				<TableHead>
					<Thread>
						<TableCell>Id</TableCell>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Phone Number</TableCell>
						<TableCell></TableCell>
					</Thread>
				</TableHead>
				<TBro>
					{users.map((user) => (
						<TBody>
							<TableCell>{user.id}</TableCell>
							<TableCell>{user.fName}</TableCell>
							<TableCell>{user.lName}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.phone}</TableCell>
							<TableCell>
								<Button component={Link} to={`/edit/${user.id}`}>
									Edit
								</Button>
							</TableCell>
							<TableCell>
								<Button onClick={() => deleteUserData(user.id)}>Delete</Button>
							</TableCell>
						</TBody>
					))}
				</TBro>
			</StyledTable>

			<div>
				<p>
					Made with <b>❤</b> by
					<a href="https://ahmed13m.netlify.app">Ahmed</a>
				</p>
			</div>
		</div>
	);
};

export default ShowUsers;
