function User({ user }) {
	// console.log(props);
	return (
		<div className="bg-success text-light py-4 px-2 my-1">
			<h1 className="text-warning">Hello i'm {user.username}</h1>
			<p>my email is : {user.email}</p>
		</div>
	);
}

export default User;
