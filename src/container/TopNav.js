import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import Logo from '../component/Logo';
import NavItems from './NavItems';	
class TopNav extends Component {
	state={
		searchTerm:''
	}
	changeSearchTerm =(e)=>{
		if(e.key=='Enter'){
			this.props.history.replace('/search/'+this.state.searchTerm)
		}else{
		this.setState({
			searchTerm:e.target.value
		})
		}
	}
	render(){
 		return (
 		<nav>
			<div className="logo">Logo</div>
	 		<div className="search-bar">
				<input type="text" onKeyUp={(e)=>this.changeSearchTerm(e)}/>
				<i className="material-icons">search</i>
			</div>
    	</nav>
  );
	}
}

export default withRouter(TopNav);
