import Flad from "./Flad";
import "./List.css";
import User from "./User";

function List() {
	const listItems = ["Mcdev", "Kalid", "Maryam", "Sucdi", "Mane"];

	const users = [
		{
			username: "John",
			email: "me@email.com",
		},
		{
			username: "kalid",
			email: "kalid@eamil.com",
		},
		{
			username: "Jamal",
			email: "jamal@eamil.com",
		},
		{
			username: "Hamuuda",
			email: "hamuuda@eamil.com",
		},
		{
			username: "Ahmed",
			email: "ahemd@eamil.com",
		},
	];

	return (
		<>
			{
				// listItems.map((item, index) => (
				// 	<h1 key={index} className="list">
				// 		{item}
				// 	</h1>
				// ))
			}
			<User user={users[2]} />
			{/* <User user={users[1]} />
			<User user={users[0]} />
			<User user={users[3]} /> */}

			{/* {users.map((user, index) => (
				<>
					<User user={user} />
				</>
			))} */}

			<Flad />
		</>
	);
}
export default List;
