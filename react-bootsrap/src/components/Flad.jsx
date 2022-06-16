function Flad() {
	return (
		<div className="container-lg">
			{/* <div className="row">
				{<h1 className="col-1">Heading 1</h1>
			<h2 className="col-1">Heading 2</h2>
			<h3 className="col-1">Heading 3</h3>
			<h4 className="col-1">Heading 4</h4>
			<h5 className="col-1">Heading 5</h5>
			<h6 className="col-1">Heading 6</h6>
			<div className="col bg-warning p-4"></div> 
				 <div className="col bg-danger p-4"></div>
				<div className="col-2 bg-success p-4"></div>
				<div className="col bg-danger p-4"></div>
				<div className="col-2 bg-success p-4"></div>
			</div>

			<div className="row">
				<div className="bg-danger col-6 p-4 my-4"></div>

				<div className="col-6 p-4 my-4 bg-warning"></div>
			</div>

			<div className="row">
				<div className="bg-success col-4">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
						laboriosam dolores nobis quis esse quod minus facilis illum,
						nesciunt excepturi?
					</p>
				</div>
				<div className="bg-warning col-4 p-2">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
						velit eius debitis ipsam facere facilis atque quisquam
						necessitatibus, dicta porro!
					</p>
				</div>
				<div className="bg-danger col-4 p-2">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
						reiciendis? Blanditiis optio quos fuga exercitationem! Molestiae in
						sint recusandae veniam.
					</p>
				</div>
			</div>

			<div className="row">
				<div className="bg-primary col-4 p-2">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas a
						quo aut quam dolorum fugit deleniti ratione voluptate dolorem
						aliquam.
					</p>
				</div>
				<div className="bg-success col-8 p-2">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
						aliquid alias odio ut quaerat quasi dolor libero sit quod
						cupiditate.
					</p>
				</div>
			</div> */}

			<div className="card p-2">
				<div className="card-heading">
					<h2>Regisration Form</h2>
				</div>
				<form className="row">
					<div className="mb-3">
						<input
							type="text"
							placeholder="Enter your fullname"
							className="form-control"
						/>
					</div>
					<div className="mb-3">
						<input
							type="email"
							placeholder="Enter your email"
							className="form-control"
						/>
					</div>
					<div className="row">
						<div className="col-6">
							<input
								type="password"
								className="form-control"
								placeholder="Enter your password"
								name=""
								id=""
							/>
						</div>
						<div className="col-6">
							<input
								type="password"
								className="form-control"
								placeholder="Enter confirm password"
								name=""
								id=""
							/>
						</div>
						<div>
							<button className="btn btn-success mt-2">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Flad;
