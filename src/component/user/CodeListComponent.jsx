import React, { Component } from 'react';
import ApiService from "../../ApiService";
import StickyHeadTable from "./TabSampleComponent"


class CodeListComponent extends Component {

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
        ApiService.fetchCodes()
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
        console.log("this.statecodes");
        console.log(this.state.codes);
        return(
            <div>
                <StickyHeadTable/>
  
            </div>
        )
    }

}

export default CodeListComponent;