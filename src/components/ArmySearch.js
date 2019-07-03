import React from 'react'


class ArmySearch extends React.Component {

	render(){
		return(
			<form onChange={this.props.handleSearchChange}> 
				Looking for a certain bot in your army? <br/>
				<input type="text" />
			</form>
		)
	}
}

export default ArmySearch