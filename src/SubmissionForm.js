import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SubmissionForm() {
	return (
		<div className="form-container">
			<Form>
				<Form.Group className="mb-3" controlId="lights">
					<Form.Label># Lights</Form.Label>
					<Form.Control type="text" placeholder="Enter # lights" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="darks">
					<Form.Label># Darks</Form.Label>
					<Form.Control type="text" placeholder="Enter # darks" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="biases">
					<Form.Label># Biases</Form.Label>
					<Form.Control type="text" placeholder="Enter # biases" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="flats">
					<Form.Label># Flats</Form.Label>
					<Form.Control type="text" placeholder="Enter # flats" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="shutter-speed">
					<Form.Label>Shutter Speed</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter shutter speed in seconds"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="ISO">
					<Form.Label>ISO</Form.Label>
					<Form.Control type="text" placeholder="Enter ISO" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="apeture">
					<Form.Label>Apeture</Form.Label>
					<Form.Control type="text" placeholder="Enter apeture" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="focal-length">
					<Form.Label>Focal Length</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter focal length in mm"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Camera brand</Form.Label>
					<Form.Select>
						<option value="nikon">Nikon</option>
						<option value="canon">Canon</option>
						<option value="sony">Sony</option>
					</Form.Select>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
