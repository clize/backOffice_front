import React, {Component, Fragment} from 'react';
import {Row, Card, CardBody, FormGroup, Label, Input} from "reactstrap";
import {Colxx, Separator} from "../../components/common/CustomBootstrap";
import { Table } from 'reactstrap';
// import Breadcrumb from "../../../containers/navs/Breadcrumb";
// import {connect} from "react-redux";

class SiteInfo extends Component {

    render() {
        // const {
        //     company,
        //     brand,
        //     email,
        //     startDate,
        //     expireDate,
        //     price,
        //     street,
        //     city,
        //     state,
        //     zipCode,
        //     phone
        // } = this.props.user;
        return (
            <Fragment>
                {/* <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.profile" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx> */}
                {/* </Row> */}
                <Row>
                    <Colxx xxs="12" className="mb-4">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Colxx sm="12" md="6">
                                        <FormGroup>
                                            <Label for="company">Company</Label>
                                            <Input type="text" id="company" value={''} readOnly={true}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="brand">Brand</Label>
                                            <Input type="text" id="lastName" value={''} readOnly={true}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="lastName">Email</Label>
                                            <Input type="text" id="email" value={''} readOnly={true}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="phone">Phone Number</Label>
                                            <Input type="text" id="phone" value={''} readOnly={true}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="zipCode">ZIP Code</Label>
                                            <Input type="text" id="zipCode" value={''} readOnly={true}/>
                                        </FormGroup>
                                    </Colxx>

                                    <Colxx sm="12" md="6">
                                        <FormGroup>
                                            <Label for="street">Street</Label>
                                            <Input type="text" id="street" value={''} readOnly={true}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="city">City</Label>
                                            <Input type="text" id="city" value={''} readOnly={true}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="state">State</Label>
                                            <Input type="text" id="state" value={''} readOnly={true}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="startDate">Start Date</Label>
                                            <Input type="text" id="startDate" value={''} readOnly={true}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="expireDate">Expire Date</Label>
                                            <Input type="text" id="expireDate" value={''} readOnly={true}/>
                                        </FormGroup>
                                    </Colxx>
                                </Row>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

                <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
            </Fragment>
        )
    }
}

export default SiteInfo;

// const mapStateToProps = ({ auth }) => {
//     const { user } = auth;
//     return { user };
// };

// export default connect(
//     mapStateToProps,
//     {}
// )(SiteInfo);
