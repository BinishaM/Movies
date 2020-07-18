import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

const SideNav = (props) => {
    useEffect(()=>{
        console.log(props)
    });
    return (
        <div className='side-nav'>
            {props.sideNavItems.map((item, key) => (
                <NavLink onClick={() => props.translationChangeHandler(key)}
                         to={item.path}
                         key={key}
                         exact
                         activeClassName={'active'}
                         className={'side-nav-item'}>
                    {item.label}
                </NavLink>))}
            <div className="nav-background"
                 style={{transform: 'translateY(' + props.transVal + '00%'}}></div>
        </div>
    )
}

export default SideNav;