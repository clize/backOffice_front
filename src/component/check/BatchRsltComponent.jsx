import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import ApiService from "../../ApiService";
import BatchRsltDataTable from "./RsltTableComponent"

class BatchRsltComponent extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            date: new Date().toLocaleTimeString
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
                    <form noValidate>
                        <TextField
                            id="datetime-local"
                            label="배치 검색"
                            type="datetime-local"
                            defaultValue= {this.state.date}
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