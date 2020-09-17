import React, { Component } from 'react';
//import {makeStyles} from '@material-ui/core/styles';
import DatePickerC from "./DatePickerComponent";
import BatchRsltDataTable from "./RsltTableComponent";

class BatchRsltComponent extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.reloadBatchRslt();
    }

    reloadBatchRslt = () => {
        this.setState =({
            date: this.state.date
        });
    }

    render() {
        return (
            <div>
                <h1>배치실행결과</h1>
                    <DatePickerC />
                <div>
                    <BatchRsltDataTable />
                </div>
            </div>
                
        );
    }
}

export default BatchRsltComponent;