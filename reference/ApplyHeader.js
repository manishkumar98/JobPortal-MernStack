import React from "react";

// eslint-disable-next-line no-unused-vars
import Typography from '@material-ui/core/Typography';

import {Container, Row, Col, Button} from 'reactstrap';

class ApplyHeader extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col>
							<h1>{this.props.roleName}</h1>
						</Col>
					</Row>
					<Row className="row-fluid">
					<div className="d-flex justify-content-between">
						<Col xs="4" sm="4" md="4">
							<h5>{this.props.roleDescription}</h5>
						</Col>
						<Col xs="4" sm="4" md="4">
							<h5>{this.props.roleLocation}</h5>
						</Col>
						<Col xs="4" sm="4" md="4">
							{this.props.currentPage==="text" && <Button color="primary" onClick={this.props.applyClickHandler}>Apply</Button>}
							{this.props.currentPage==="form" && <Button color="primary" onClick={this.props.applyClickHandler}>Cancel</Button>}
						</Col>
					</div>
					</Row>
				</Container>
			</div>
		);
	}
};

export default ApplyHeader;
