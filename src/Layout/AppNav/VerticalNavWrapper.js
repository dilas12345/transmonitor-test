import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import {MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav} from './NavItems';

class Nav extends Component {

    state = {};

    render() {
        return (
            <Fragment>
                <button style={{color: '#fff', borderRadius: 14, marginTop: 20}} className="btn btn-success app-sidebar__heading">Generate Invoice</button>
                {/* <div className="metismenu vertical-nav-menu">
                    <ul className="metismenu-container">
                        <li className="metismenu-item">
                            <a className="metismenu-link" href="https://dashboardpack.com/theme-details/architectui-dashboard-react-pro" target="_blank">
                                <i className="metismenu-icon pe-7s-diamond"></i>
                                Upgrade to PRO
                            </a>
                        </li>
                    </ul>
                </div> */}
                <h5 className="app-sidebar__heading text-dark">Main</h5>
                <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu text-dark" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading text-dark">Payments</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading text-dark">Orders</h5>
                <MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                {/* <h5 className="app-sidebar__heading">Forms</h5> */}
                {/* <MetisMenu content={FormsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
                <h5 className="app-sidebar__heading text-dark">Charts</h5>
                <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);