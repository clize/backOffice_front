import React, {Component, Fragment} from 'react';
import {Row, Card, CardBody, FormGroup, Label, Input} from "reactstrap";
import {Colxx, Separator} from "../../components/common/CustomBootstrap";
import { Table } from 'reactstrap';
import ApiService from "../../ApiService";
import ComCodeModal from "./ComCodeModal";
// import Breadcrumb from "../../../containers/navs/Breadcrumb";
// import {connect} from "react-redux";

class ComCodeList extends Component {

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
                <Row>
                    <Colxx xxs="12">
                        {/* <Breadcrumb heading="menu.profile" match={this.props.match} /> */}
                        공통코드
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs="12" className="mb-4">
                        <Card>
                            <CardBody>
                                <Row>
                                <FormGroup>
                                            <Label for="company">코드입력</Label>
                                            <Input type="text" id="company" value={''}/>
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
                                    <th>상세보기</th>
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
                                    <td><ComCodeModal mcode={code.MEDCD} 
                                    mcode_nm={code.MEDCD_NM} 
                                    buttonLabel={"상세"}></ComCodeModal></td>
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

export default ComCodeList;

// const mapStateToProps = ({ auth }) => {
//     const { user } = auth;
//     return { user };
// };

// export default connect(
//     mapStateToProps,
//     {}
// )(SiteInfo);