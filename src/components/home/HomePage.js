import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	rendeR() {
		return (
			<div className="jumbotron">
				<h1>Home Page</h1>
				<p>This is my fucking home page</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;
