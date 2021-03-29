import React, { useState,useEffect } from 'react';
import ApiService from "../../ApiService";

//  import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

const columns = [
  { id: 'medcd', label: '코드', minWidth: 100 },
  { id: 'medcdNm', label: '코드명', minWidth: 200 },
  { id: 'useYn', label: '사용유무', minWidth: 80 },
  {
    id: 'regId',
    label: '등록자',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'regDt',
    label: '등록일',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'chgId',
    label: '수정자',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'chgDt',
    label: '수정일',
    minWidth: 170,
    align: 'right',
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

// const useStyles = makeStyles((theme) => ({
//   container: {
//     gridGap: theme.spacing(1),
//   },
//   root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
// }));


export default function StickyHeadTable(props) {

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [error, setError] = useState(null);
  const [codes, setCodes] = useState(null);
  const [loading, setLoading] = useState(false);

  const [codeNm, setCodeNm] = useState(null);

  console.log('CodeListComponent name !',props.name);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleBtnClick = (e) => {
    console.log('reloadComCodeList() Error!', codeNm);
    ApiService.fetchCodesDetail(codeNm).then(res => setCodes(res.data))
  }

  const handleChangeBox= (e) => {
    ApiService.fetchCodesDetail(e.target.value).then(res => setCodes(res.data))
  };

  const handleChangeType= (e) => {
    setCodeNm(e.target.value);
  };

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

  return (   

<Paper className={classes.root}>
{/* <TextField id="filed_code" label="Code" onChange={handleChangeBox}/> */}
{/* <TextField id="filed_code" name="filedCode" label="Code" /> */}
{/* <form onSubmit={handleChangeBox}>

</form> */}

<Grid
        className={useStyles.container}
        container
        direction="row"
        justify="flex-start"
        alignItems="baseline"
        >

        <TextField id="filedCode" label="Code" onChange={handleChangeType}/>
        <TextField id="filed_codenm" label="Code명" />
        <Button size="small" variant="contained"  endIcon={<SearchSharpIcon onClick={handleBtnClick} />} >검색 </Button>
        </Grid>

        
{/* <input type="text" name="filed_Code" label="Code" onChange={handleChangeType}/> */}
{/* <Button size="small" variant="contained"  onClick={handleBtnClick} > 검색 </Button> */}
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {codes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.medcd}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={codes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}