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
  }
});


function createData(seq, name, comment, startDt, status, percent, servers) {
  return {
    seq,
    name,
    comment,
    startDt,
    status,
    percent,
    servers,
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
        <TableCell align="right">
          {
            row.percent === 100
            ? <Chip className={classes.success} size="small" label="완료" deleteIcon={<DoneIcon className={classes.icon}/>}/>
            : <Chip className={classes.ing} size="small" label="진행중" />
          }
        </TableCell>
        <TableCell align="right">{row.percent}</TableCell>
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
                    <TableCell>날짜</TableCell>
                    <TableCell>점포명</TableCell>
                    <TableCell align="right">프로세스ID</TableCell>
                    <TableCell align="right">프로세스명</TableCell>
                    <TableCell align="right">배치상태</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.servers.map((serverRow) => (
                    <TableRow key={serverRow.strCode}>
                      <TableCell component="th" scope="row">
                        {serverRow.date}
                      </TableCell>
                      <TableCell>{serverRow.strName}</TableCell>
                      <TableCell align="right">{serverRow.procId}</TableCell>
                      <TableCell align="right">{serverRow.procName}</TableCell>
                      <TableCell align="right">
                        {
                          serverRow.stsInfo === 1 
                          ? <Chip color="primary" size="small" label="완료" deleteIcon={<DoneIcon />}/>
                          : ( serverRow.stsInfo === 0
                            ? <Chip size="small" label="대기" />
                            : <Chip color="secondary" size="small" label="ERROR" />)
                        }
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
    status: PropTypes.number.isRequired,
    startDt: PropTypes.string.isRequired,
    servers: PropTypes.arrayOf(
      PropTypes.shape({
        strCode: PropTypes.string.isRequired,
        procId: PropTypes.string.isRequired,
        procName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(1, 'preSOD', 'pre SOD 배치결과', '2020-08-24', 24, 100,
  [
    { strCode: '9030', strName: '흑석점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '7777', strName: '웅앵점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '4444', strName: '따리점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 1},
  ]),
  createData(2, 'SOD', 'SOD 배치결과', '2020-08-24', 37, 66.6,
  [
    { strCode: '9030', strName: '흑석점', procId: 'ed_sod_run', procName: '점포 영업 영업개시 처리결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '7777', strName: '웅앵점', procId: 'ed_sod_run', procName: '점포 영업 영업개시 처리결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '4444', strName: '따리점', procId: 'ed_sod_run', procName: '점포 영업 영업개시 처리결과', date: '2020-09-17', stsInfo: 2},
  ]),
  createData(3, 'EOD', 'EOD 배치결과', '2020-08-24', 24, 55.5,
  [
    { strCode: '9030', strName: '흑석점', procId: 'ed_eod_trn', procName: '트란분해 체크 결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '7777', strName: '웅앵점', procId: 'ed_eod_trn', procName: '트란분해 체크 결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '4444', strName: '따리점', procId: 'ed_eod_trn', procName: '트란분해 체크 결과', date: '2020-09-17', stsInfo: 2},
    { strCode: '9030', strName: '흑석점', procId: 'ed_eod_chk', procName: '일마감 체크 결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '7777', strName: '웅앵점', procId: 'ed_eod_chk', procName: '일마감 체크 결과', date: '2020-09-17', stsInfo: 2},
    { strCode: '4444', strName: '따리점', procId: 'ed_eod_chk', procName: '일마감 체크 결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '9030', strName: '흑석점', procId: 'ed_eod_close', procName: 'Deadline 체크 결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '7777', strName: '웅앵점', procId: 'ed_eod_close', procName: 'Deadline 체크 결과', date: '2020-09-17', stsInfo: 0},
    { strCode: '4444', strName: '따리점', procId: 'ed_eod_close', procName: 'Deadline 체크 결과', date: '2020-09-17', stsInfo: 0},
  ]),
  createData(4, 'POS-PGM', 'POS 프로그램 다운로드', '2020-08-24', 67, 4.3,
  [
    { strCode: '9030', strName: '흑석점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '7777', strName: '웅앵점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '4444', strName: '따리점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 2},
  ],),
  createData(5, 'OS', 'CPU/MEMORY/DISK', '2020-08-24', 49, 30,
  [
    { strCode: '9030', strName: '흑석점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '7777', strName: '웅앵점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 1},
    { strCode: '4444', strName: '따리점', procId: 'ed_sod_pre', procName: '점포 영업전처리결과', date: '2020-09-17', stsInfo: 2},
  ]),
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
