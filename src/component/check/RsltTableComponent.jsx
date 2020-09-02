import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(seq, name, comment, startDt, carbs, price) {
  return {
    seq,
    name,
    comment,
    startDt,
    carbs,
    price,
    servers: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.comment}</TableCell>
        <TableCell align="right">{row.startDt}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Servers
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.servers.map((serverRow) => (
                    <TableRow key={serverRow.date}>
                      <TableCell component="th" scope="row">
                        {serverRow.date}
                      </TableCell>
                      <TableCell>{serverRow.customerId}</TableCell>
                      <TableCell align="right">{serverRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(serverRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    carbs: PropTypes.number.isRequired,
    startDt: PropTypes.string.isRequired,
    servers: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(1, 'preSOD', 'pre SOD 배치결과', '2020-08-24', 24, 4.0, 3.99),
  createData(2, 'SOD', 'SOD 배치결과', '2020-08-24', 37, 4.3, 4.99),
  createData(3, 'EOD', 'EOD 배치결과', '2020-08-24', 24, 6.0, 3.79),
  createData(4, 'POS-PGM', 'POS 프로그램 다운로드', '2020-08-24', 67, 4.3, 2.5),
  createData(5, 'OS', 'CPU/MEMORY/DISK', '2020-08-24', 49, 3.9, 1.5),
];

export default function BatchRsltDataTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>순번</TableCell>
            <TableCell align="right">배치명</TableCell>
            <TableCell align="right">시작일</TableCell>
            <TableCell align="right">진행상태</TableCell>
            <TableCell align="right">진행내역&nbsp;(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
