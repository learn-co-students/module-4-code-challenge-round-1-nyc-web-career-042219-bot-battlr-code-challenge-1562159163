import React from 'react'


class SortByArmor extends React.Component {

	render(){
		return(
			<form onChange={this.props.toggleSortArmor}> 
				Or sort by armor level ???    
				<input type="radio" />
			</form>
		)
	}
}

export default SortByArmor