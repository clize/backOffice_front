import React, { Component } from 'react';
import ApiService from "../../ApiService";
import BatchRsltDataTable from "./ComCodeTblComponent";
import CodeListComponent from "./CodeListComponent";
import SelectBoxComponent from "./SelectBoxComponent";

import StickyHeadTable from "./CodeListComponent";

class ComCodeComponent extends Component {

    render() {

        var comcd='E00001';
        return (
            <div>
                <h1>공통코드</h1>
                    {/* <SelectBoxComponent onBtnClick={function(_comcd){
                        this.setState({
                            comcd: _comcd
                        })
                        console.log('comcd() Error!',_comcd,comcd);
                    }.bind(this)}  > </SelectBoxComponent> */}
                <div>
                    {/* <CodeListComponent name="react"/> */}
                    <StickyHeadTable name={comcd}/>
                    {/* <BatchRsltDataTable /> */}
                </div>
            </div>    
                
        );
    }

}

export default ComCodeComponent;
