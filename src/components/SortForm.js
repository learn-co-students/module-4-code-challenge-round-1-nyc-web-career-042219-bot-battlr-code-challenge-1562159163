import React from 'react'


class SortForm extends React.Component {

	render(){
		return(
			<form onChange={this.props.handleSortChange}> 
				Optimize your army - filter these bots by skillset!<br/>
				<select>
				  <option value="All">All Bots</option>
				  <option value="Assault">Assault</option>
				  <option value="Defender">Defender</option>
				  <option value="Support">Support</option>
				</select>
			</form>
		)
	}
}

export default SortForm