import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<h1>Logo</h1>
			<ul>
				<Link to="/about">About</Link>
				<Link to="/contact">contact</Link>
				<Link to="/user/1">user 1</Link>
				<Link to="/user/2">user 2</Link>
			</ul>
		</div>
	);
};

export default Header;
