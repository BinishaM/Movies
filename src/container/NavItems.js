import React, {Component} from 'react';
import NavItem from '../component/NavItem';

class NavItems extends Component {
    render() {
        return (
            <div className="nav-items">
                {this.props.navItems.map((item,key) => (
                    <NavItem key={key}>{item}</NavItem>
                ))}
			</div>

	);
    }
}

export default NavItems;









