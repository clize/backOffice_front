import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import ApiService from "../../ApiService";
import BatchRsltDataTable from "./RsltTableComponent"

class BatchRsltComponent extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            batchRslt: []
            ,date: new Date().toLocaleTimeString
        }
    }

    componentDidMount() {
        this.reloadBatchRslt();
    }

    reloadBatchRslt = () => {
        ApiService.fetchCodes()
        .then( res => {

            this.setState({
                batchRslt: res.data.data
            });
        })
        .catch(err => {
            console.log('reloadBatchRslt() Error!', err);
        })
    }

    render() {
        return (
            <div>
                <h1>배치실행결과</h1>
                    <form noValidate>
                        <TextField
                            id="datetime-local"
                            label="배치 검색"
                            type="datetime-local"
                            className="batchRsltTimePicker"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                <div>
                    <BatchRsltDataTable/>
                </div>
            </div>
                
        );
    }
}

export default BatchRsltComponent;