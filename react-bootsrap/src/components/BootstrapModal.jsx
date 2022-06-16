import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const BootstrapModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
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
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default BootstrapModal;
