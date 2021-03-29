import React, { useState,useEffect } from 'react';
import ApiService from "../../ApiService";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  const [error, setError] = React.useState(null);
  const [codes, setCodes] = React.useState(null);
  const [loading, setLoading] = React.useState(false);


    const fetchCode = async () => {
        try {
        setError(null);
        setCodes(null);
        setLoading(true);
        ApiService.fetchCodes().then(res => setCodes(res.data))

        } catch(e) {
            setError(e);
        }
        setLoading(false);
            
        };

    useEffect(() => {
        fetchCode();
      }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!codes) return null;

  console.log('reloadComCodeList :'+ codes);

  return (
    <TableContainer component={Paper}>
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
                     {codes.map( code  => 
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

// const useStyles = makeStyles({
//     table: {
//       minWidth: 650,
//     },
//   });

// export default ComCodeListComponent;