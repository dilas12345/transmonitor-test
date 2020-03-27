import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card,
    CardBody,
    CardTitle,
    Progress,
    Pagination, PaginationItem, PaginationLink,
    Input, Form, FormGroup,
} from 'reactstrap';

import LineExample2 from '../../../DemoPages/Charts/ChartJs/Examples/line2';

import {
     Line,
    ResponsiveContainer,
    LineChart
} from 'recharts';


import avatar4 from '../../../assets/utils/images/avatars/4.jpg';
import reconcile from '../../../assets/utils/images/reconcile.png';
import pending from '../../../assets/utils/images/pending.png';


const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
    {name: 'Page A', uv: 5400, pv: 5240, amt: 1240},
    {name: 'Page B', uv: 7300, pv: 4139, amt: 3221},
    {name: 'Page C', uv: 8200, pv: 7980, amt: 5229},
    {name: 'Page D', uv: 6278, pv: 4390, amt: 3200},
    {name: 'Page E', uv: 3189, pv: 7480, amt: 6218},
    {name: 'Page D', uv: 9478, pv: 6790, amt: 2200},
    {name: 'Page E', uv: 1289, pv: 1980, amt: 7218},
    {name: 'Page F', uv: 3139, pv: 2380, amt: 5150},
    {name: 'Page G', uv: 5349, pv: 3430, amt: 3210},
];

export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                       
                        <Row>
                            <Col md="3">
                                <div className="card mb-3 bg-night-white  widget-chart text-dark card-border">
                                    <div className="widget-subheading text-left">
                                        Daily Transaction Volume
                                    </div>
                                    <div style={{fontSize: 15}} className="monitor-content text-left">
                                        2,342
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="card mb-3 bg-night-white widget-chart text-dark card-border">
                                    <div className="widget-subheading text-left">
                                        Daily Transaction Value
                                    </div>
                                    <div style={{fontSize: 15}} className="monitor-content text-left">
                                        N4,000,000
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="card mb-3 bg-night-white widget-chart text-dark card-border">
                                    <div className="widget-subheading text-left">
                                        Total Transaction Volume
                                    </div>
                                    <div style={{fontSize: 15}} className="monitor-content text-left">
                                        452,000
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="card mb-2 bg-night-white widget-chart card-border">
                                    <div className="widget-chart-content text-dark">
                                        <div className="widget-subheading text-left">
                                            Total Transaction Value
                                        </div>
                                        <div style={{fontSize: 15}} className="monitor-content text-left">
                                            N4,000,000
                                        </div>
                                    </div>
                                    <div className="monitor-chart-wrapper text-left">
                                        <ResponsiveContainer margin={{left: 20}} width='25%' aspect={3.0 / 1.0}>
                                            <LineChart data={data}
                                                        margin={{top: 0, right: 5, left: 10, bottom: 0}}>
                                                <Line type='monotone' dataKey='pv' stroke='#0c78f3' strokeWidth={3}/>
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Today: 5, Aug 2018</CardTitle>
                                        <LineExample2/>
                                    </CardBody>
                                </Card>
                            </Col>
                            
                                <Col md="6">
                                    <Card className="main-card mb-3">
                                        <div className="card mb-3 widget-chart card-hover-shadow-2x">
                                            <div style={{fontWeight: 'bold'}} className="widget-heading text-left">
                                                Orders
                                            </div>
                                            <Progress className="progress-bar-xs" multi>
                                                <Progress bar color="success" value="80" />
                                                <Progress bar color="warning" value="20" />
                                            </Progress>

                                            <div style={{fontWeight: '20', marginTop: 10}} className="widget-subheading text-left">
                                                Pending Orders <span style={{fontWeight: 'bold', color: '#ef8810'}}>20</span>
                                            </div>
                                            <div style={{marginTop: 10}}className="widget-subheading text-left">
                                                Reconciled Orders <span style={{fontWeight: 'bold', color: '#1ed501'}}>80</span>
                                            </div>
                                            <div style={{marginTop: 10}} className="widget-subheading text-left">
                                                Total Orders <span style={{fontWeight: 'bold', color: '#5638c7'}}>100</span>
                                            </div>
                                            
                                        </div>
                                    </Card>
                                    <Card className="main-card mb-3">
                                    <div className="card mb-3 widget-chart card-hover-shadow-2x">
                                            <div style={{fontWeight: 'bold'}} className="widget-heading text-left">
                                                Payments
                                            </div>
                                            <Progress className="progress-bar-xs" multi>
                                                <Progress bar color="success" value="80" />
                                                <Progress bar color="warning" value="20" />
                                            </Progress>

                                            <div style={{fontWeight: '20', marginTop: 10}} className="widget-subheading text-left">
                                                Un-Reconciled Payments <span style={{fontWeight: 'bold', color: '#ef8810'}}>20</span>
                                            </div>
                                            <div style={{marginTop: 10}}className="widget-subheading text-left">
                                                Reconciled Payments <span style={{fontWeight: 'bold', color: '#1ed501'}}>80</span>
                                            </div>
                                            <div style={{marginTop: 10}} className="widget-subheading text-left">
                                                Total Payments <span style={{fontWeight: 'bold', color: '#5638c7'}}>100</span>
                                            </div>
                                            
                                        </div>
                                    </Card>
                                </Col>
                        </Row>
                        
                        <h1>Payments</h1>
                    
                            <div className="app-footer">
                                <div className="app-footer__inner">
                                    <div className="app-footer-left">
                                        Showing
                                        <ul className="nav">
                                        <li className="nav-item"> 
                                            <a href="javascript:void(0);" className="nav-link" >
                                                20
                                            <i className="metismenu-icon pe-7s-angle-down"></i>
                                            </a>
                                        </li>
                                        </ul> out of 500 entries
                                    </div>
                                    {/* <div className="app-footer">
                                        Search endine
                                    </div> */}
                                    <div className="app-footer-right">
                                        <Form inline onSubmit={(e) => e.preventDefault()}>
                                            Show
                                            <FormGroup style={{padding: 10}}>
                                                <Input  bsSize="sm" className="mr-1" type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
                                                <option value="true">All</option>
                                                <option value="reconciled">Reconciled</option>
                                                <option value="un-reconciled">Un Reconciled</option>
                                                <option value="settled">Settled</option>
                                                <option value="un-settled">Un Settled</option>
                                                </Input>
                                            </FormGroup>
                                        </Form>
                                        
                                    </div>
                                </div>
                            </div>
                                    
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-2">
                                    
                                    <div className="table-responsive">
                                        <table style={{ backgroundColor: '#fff'}} className="align-middle mb-0 table table-borderless table-striped">
                                            <thead>
                                            <tr style={{marginLeft: 20, backgroundColor: '#f7f8f8'}}>
                                                <th>Item Type</th>
                                                <th className="text-center">Price</th>
                                                <th className="text-center">Transaction No</th>
                                                <th className="text-center">Time</th>
                                                <th className="text-center">Actions</th> 
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={{backgroundColor: '#fff', marginTop: '30'}}>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="text-left">Apple Mac Book 15" 250 SSD 12GB</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">$73430</td>
                                                <td className="text-center">
                                                    <div className="text-center">123456</div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="text-center">12:00</div>
                                                </td>
                                                <td className="text-center" style={{marginTop: 70}}>
                                                    <button type="button" className="btn btn-primary btn-sm" style={{width: 110, borderRadius: 20, borderColor: '#8e9598', background: 'transparent', color: '#0cd369'}}>
                                                        <img style={{marginRight: 10, marginBottom: 1}} width={10} className="rounded-circle" src={reconcile} alt="reconcile" />
                                                        Reconciled
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr style={{backgroundColor: '#fff', marginTop: '30'}}>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="text-left">Apple Mac Book 15" 250 SSD 12GB</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">$73430</td>
                                                <td className="text-center">
                                                    <div className="text-center">123456</div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="text-center">12:00</div>
                                                </td>
                                                <td className="text-center" style={{marginTop: 70}}>
                                                    <button type="button" className="btn btn-warning btn-sm" style={{width: 110, borderRadius: 20, borderColor: '#8e9598', background: 'transparent', color: '#ec8d13'}}>
                                                        <img style={{marginRight: 20, marginBottom: 1}} width={10} className="rounded-circle" src={pending} alt="pending" />
                                                        Pending
                                                    </button>
                                                </td>
                                            </tr>
                                            
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="app-footer">
                                        <div className="app-footer__inner">
                                            <div className="app-footer-left">
                                                Showing 1 to 10 of 500 entries
                                            </div>
                                            <div className="app-footer-right">
                                                <Pagination style={{padding: 40, marginTop: 30, paddingLeft: 500}} className="widget-content-right" aria-label="Page navigation example">
                                                    <PaginationItem>
                                                        <PaginationLink style={{color: '#222'}} previous href="javascript:void(0);">
                                                            Previous
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem active>
                                                        <PaginationLink href="javascript:void(0);">
                                                            1
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem >
                                                        <PaginationLink href="javascript:void(0);">
                                                            2
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink style={{color: '#222'}} next href="javascript:void(0);">
                                                            Next
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
