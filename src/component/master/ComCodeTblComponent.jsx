import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DoneIcon from '@material-ui/icons/Done';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  success: {
    backgroundColor: 'green',
    color: 'white',
  },
  ing: {
    backgroundColor: 'yellow',
  },
  icon: {
    backgroundColor: 'white',
  },
});


  export default function ComCodeDataTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>코드</TableCell>
              <TableCell align="right">코드명</TableCell>
              <TableCell align="right">시작일</TableCell>
              <TableCell align="right">사용유무</TableCell>
              <TableCell align="right">등록자</TableCell>
              <TableCell align="right">등록일자</TableCell>
              <TableCell align="right">수정자</TableCell>
              <TableCell align="right">수정일자</TableCell>
              <TableCell align="right">상세보기&nbsp;(%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.codes.map( code => 
                <TableRow key={code.medcd}>
                    <TableCell component="th" scope="code">{code.medcd}</TableCell>
                    <TableCell align="center">{code.medcd_nm}</TableCell>
                    <TableCell align="right">{code.use_yn}</TableCell>
                    <TableCell align="right">{code.chg_id}</TableCell>
                    <TableCell align="right">{code.chg_dt}</TableCell>   
                    <TableCell align="right">{code.reg_id}</TableCell>
                    <TableCell align="right">{code.reg_dt}</TableCell>    
                </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }