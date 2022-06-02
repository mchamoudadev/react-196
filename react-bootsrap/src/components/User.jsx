function User({ user }) {
	// console.log(props);
	return (
		<>
			<h1>Hello i'm {user.username}</h1>
			<p>my email is : {user.email}</p>
		</>
	);
}

export default User;
