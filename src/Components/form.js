import React from 'react';

const Form = props => (
			<div>
				<form onSubmit={props.getWeather} className="weatherHeading">
					<input type="text" name="city" placeholder="Enter City.."/>
					<input type="text" name="country" placeholder="Enter Country.."/>
					<button>Submit</button>
				</form>
			</div>
);

export default Form;