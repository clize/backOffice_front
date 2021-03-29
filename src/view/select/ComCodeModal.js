import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Draggable from 'react-draggable';

import {Row, Card, CardBody, FormGroup, Label, Input} from "reactstrap";
import {Colxx, Separator} from "../../components/common/CustomBootstrap";
import { Table } from 'reactstrap';
import ApiService from "../../ApiService";

import "../../index.css";
import { throwStatement } from '@babel/types';

class ComCodeModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        codes: [],
        modal: false,
        // mcode: this.props.mcode
      };
        console.log('constructor() start1!');
       this.mcode = this.props.mcode;
       this.mcode_nm = this.props.mcode_nm;
    //   console.log('constructor() start2!',this.mcode);
      this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.reloadComCodeList();
        console.log('reloadComCodeList() start1!');
    }

    // componentWillReceiveProps(nextProps){
    //     console.log('componentWillReceiveProps() start1!',nextProps);
    // }

    reloadComCodeList = () => {
        // console.log('reloadComCodeList() start2!',this.mcode);
        ApiService.fetchCodesDetail(this.mcode)
        .then( res => {

            this.setState({
                codes: res.data
            });
        })
        .catch(err => {
            console.log('reloadComCodeList() Error!', err);
        })
    }
  
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  
    render() {
        console.log('render() start1!');
      return (
        <div modal-content ie>
          <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          // position={null}
          // grid={[125, 125]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <Modal isOpen={this.state.modal} 
                 toggle={this.toggle} 
                 className={this.props.className}
                 contentClassName="custom-modal-style"
                //  modalClassName="modal-dialog"
           >
            <ModalHeader toggle={this.toggle} className="handle">Title : {this.mcode_nm}
            </ModalHeader>
            <ModalBody>
            <Colxx  >
                <Label for="company">코드입력</Label>
                <Input className="mb-2" type="text" id="company"  /></Colxx>
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
                                <tr key={code.medcd}>
                                    <td component="th" scope="code">{code.medcd}</td>
                                    <td>{code.medcd_nm}</td>
                                    <td>{code.use_yn}</td>
                                    <td>{code.chg_id}</td>
                                    <td>{code.chg_dt}</td>   
                                    <td>{code.reg_id}</td>
                                    <td>{code.reg_dt}</td>    
                                    
                                </tr>
                                )}
                                </tbody>
                                </Table>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
          </Draggable>
        </div>
      );
    }
  }
  
  export default ComCodeModal;

