import React, {Component, Fragment} from 'react';
import {Row, Card, CardBody, FormGroup, Label, Input} from "reactstrap";
import {Colxx, Separator} from "../../components/common/CustomBootstrap";
import { Table } from 'reactstrap';
import ApiService from "../../ApiService";
// import Breadcrumb from "../../../containers/navs/Breadcrumb";
// import {connect} from "react-redux";

class SiteInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
             codes: []
        }
    }

    componentDidMount() {
        this.reloadComCodeList();
    }

    reloadComCodeList = () => {
        ApiService.fetchCodesDetail('00000')
        .then( res => {

            this.setState({
                codes: res.data.data
            });
        })
        .catch(err => {
            console.log('reloadComCodeList() Error!', err);
        })
    }


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
                                <FormGroup>
                                            <Label for="company">Company</Label>
                                            <Input type="text" id="company" value={''} readOnly={true}/>
                                </FormGroup>   
                                   
                                </Row>
                                <Table>
                                <thead>
                                    <tr>
                                    <th>코드</th>
                                    <th>코드명</th>
                                    <th>사용유무</th>
                                    <th>등록자</th>
                                    <th>등록일자</th>
                                    <th>수정자</th>
                                    <th>수정일자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.codes.map( code => 
                                <tr key={code.MEDCD}>
                                    <td component="th" scope="code">{code.MEDCD}</td>
                                    <td>{code.MEDCD_NM}</td>
                                    <td>{code.USE_YN}</td>
                                    <td>{code.CHG_ID}</td>
                                    <td>{code.CHG_DT}</td>   
                                    <td>{code.REG_ID}</td>
                                    <td>{code.REG_DT}</td>    
                                </tr>
                                )}
                                </tbody>
                                </Table>
                            </CardBody>
                            
                        </Card>
                        
                    </Colxx>
                </Row>
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