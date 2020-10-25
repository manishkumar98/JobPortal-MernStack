import React from "react";

import Typography from '@material-ui/core/Typography';

import {Container, Row, Col, Button} from 'reactstrap';

class JobInfo extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col>
							<h3 variant="display1" gutterBottom><p>Description</p></h3>
							<Typography variant="body2" gutterBottom>
								<p><strong>Our company </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante urna, tempor id vehicula non, cursus quis libero. Vivamus ut erat commodo, suscipit diam at, consequat nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sollicitudin tempus nulla vitae interdum. Nam augue purus, consequat eu lacinia sit amet, iaculis eu quam. Cras fringilla nunc sapien, non tristique ipsum finibus at. Nulla ullamcorper sapien dolor, eget iaculis eros porttitor vel. Morbi in elementum magna. Praesent vel magna lobortis, euismod magna sed, congue turpis. Donec massa arcu, pretium nec vestibulum eu, maximus nec dolor. Donec vestibulum pretium luctus. In et massa et magna efficitur sagittis. Duis mattis consectetur fringilla. Sed viverra, quam sit amet interdum sodales, sem velit vulputate risus, a bibendum ipsum sem vitae felis.</p>
								<p><strong>What You'll Do:</strong></p>
								<p>Cras placerat ultrices semper. Nam tincidunt mattis gravida. Aenean molestie augue turpis, ut tristique leo vulputate eu. Quisque cursus dolor nec iaculis rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam posuere iaculis lacus ut auctor. Phasellus id vestibulum dui. Vivamus eget sem in mauris ullamcorper efficitur. Mauris porta est sit amet diam eleifend dapibus scelerisque at sem. Nullam pretium massa in aliquet pellentesque. Donec vel blandit lorem, vel pellentesque diam.</p>
								<p><strong>What You'll Need:</strong></p>
								<p>Sed vehicula pulvinar velit pretium efficitur. Pellentesque cursus, sapien sed imperdiet blandit, velit dolor bibendum lorem, in imperdiet lacus justo et lectus. Nam nec mauris eget neque finibus mattis eu sit amet sem. Pellentesque fermentum, odio in gravida fermentum, metus eros viverra ligula, et volutpat mauris justo at ligula. In sed nulla id ex mattis efficitur. Aliquam a leo varius, tristique lorem vel, facilisis purus. Phasellus non tempor neque, id fringilla eros. Suspendisse volutpat rhoncus euismod. In consectetur nibh sit amet eros hendrerit congue. Vestibulum imperdiet mi non malesuada viverra. Vivamus velit orci, commodo ut quam a, volutpat euismod enim. Etiam imperdiet in nisi a sollicitudin. Sed in ipsum risus.</p>
							</Typography>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
};

export default JobInfo;