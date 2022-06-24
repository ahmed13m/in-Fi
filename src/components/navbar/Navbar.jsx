import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Typography, styled } from "@mui/material";

// changing the css of material-ui in desired format

const Header = styled(AppBar)`
	background-image: linear-gradient(25deg, #d64c7f, #ee4758 50%);
`;
const Tabs = styled(Typography)`
	font-family: "Sora", sans-serif;
`;
const Nav = styled(NavLink)`
	text-decoration: none;
	color: inherit;
`;

const Navbar = () => {
	return (
		<div className="head-section">
			<Header position="static">
				<Toolbar className="felx">
					<Nav to="/">
						<Tabs className="ft">
							<h2>inFi</h2>
						</Tabs>
					</Nav>
					<Nav to="/">
						<Tabs className="ft">Show Users</Tabs>
					</Nav>
					<Nav to="/add">
						<Tabs className="ft">Add User</Tabs>
					</Nav>
				</Toolbar>
			</Header>
		</div>
	);
};

export default Navbar;
