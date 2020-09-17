import React, { Component } from 'react';
import ApiService from "../../ApiService";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';



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
        ApiService.fetchCodesDetail('C0001')
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

                <Typography variant="h4" style={style}> ComCode List </Typography>
                {/* <Table className={classes.table} aria-label="simple table"> */}
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>코드</TableCell>
                            <TableCell>코드명</TableCell>
                            <TableCell align="right">사용유무</TableCell>
                            <TableCell align="right">등록자</TableCell>
                            <TableCell align="right">등록일자</TableCell>
                            <TableCell align="right">수정자</TableCell>
                            <TableCell align="right">수정일자</TableCell> 
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.codes.map( code => 
                        <TableRow key={code.MEDCD}>
                            <TableCell component="th" scope="code">{code.MEDCD}</TableCell>
                            <TableCell align="center">{code.MEDCD_NM}</TableCell>
                            <TableCell align="right">{code.USE_YN}</TableCell>
                            <TableCell align="right">{code.CHG_ID}</TableCell>
                            <TableCell align="right">{code.CHG_DT}</TableCell>   
                            <TableCell align="right">{code.REG_ID}</TableCell>
                            <TableCell align="right">{code.REG_DT}</TableCell>    
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
  
            </div>
        )
    }

}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default CodeListComponent;