import React, { Component } from 'react';
import Chart from "react-google-charts";
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';

import { Doughnut } from 'react-chartjs-2';
import Clock from './ClockComponent';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
      minWidth: 120,
    },

    paper: {
      minWidth: 275,
      minHeight: 320,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    success: {
        backgroundColor: '#BFB8EB',
        color: 'white',
    },
    
  });

const boardData = [
    {id: 1, title: "서버별 배치 결과", content: "내용"},
    {id: 2, title: "시간대별 AMS LOG", content: "내용"},
    {id: 3, title: "일자별 거래 건수", content: "내용"},
    {id: 4, title: "일중 마스터 현황", content: "내용"},
    {id: 5, title: "유형별 AMS LOG", content: "내용"},
    {id: 6, title: "중요 업무 이력", content: "내용"}
];

const doughnutData = {
    datasets: [
      {
        label: 'AMS 유형',
        data: [12, 10, 8],
        backgroundColor: [
            '#E7E7E7',
            '#AFAFAF',
            '#BFB8EB'
        ],
      },
    ],
    labels: ['Type1', 'Type2', 'Type3',],
  }

  function createData(seq, name, startDt, status) {
        return { seq, name, startDt, status };
    }
  
  function createWorkLogData(seq, regdate, title) {
      return { seq, regdate, title};
    }
  
  const rows = [
    createData(1, 'pre SOD', '2020-08-24', 100),
    createData(2, 'SOD', '2020-08-24', 66.6),
    createData(3, 'EOD', '2020-08-24', 55.5),
    createData(4, 'POS PGM', '2020-08-24', 4.3),
  ];
  const workLogRows=[
    createWorkLogData(1, '2020-10-29', 'Project 일정'),
    createWorkLogData(2, '2020-10-24', 'Config 정보' ),
    createWorkLogData(3, '2020-10-21', '중앙서버 전환 장애대응메뉴얼'),
    createWorkLogData(4, '2020-10-20', 'DailyCheck List'),
    createWorkLogData(5, '2020-10-20', '서버 계정정보'),
  ];

class DashBoardComponent extends Component {


    render() {
        const { classes } = this.props;
        return(
            <div className= {classes.root}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography variant="h4" > DASHBOARD </Typography>
                  <Clock/>
                </Grid>
                
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle2" > 일자 별 거래 건수 </Typography>
                            <Chart
                              height={'300px'}
                              chartType="Bar"
                              loader={
                                <div align="center"
                                    justify="center">
                                        Loading Chart
                                </div>}
                              data={[
                                ['일자', '건 수'],
                                ['10/1', 810    ],
                                ['10/2', 1170   ],
                                ['10/3', 660    ],
                                ['10/4', 1030   ],
                                ['10/5', 1120   ],
                                ['10/6', 1000   ],
                                ['10/7', 990    ],
                              ]}
                              options={{
                                // Material design options
                                colors: ['#AFAFAF', '#BFB8EB'],
                                chart: {
                                  subtitle: '10/1 - 10/7',
                                },
                                bar: { groupWidth: '70%' },
                                legend: { position: 'none' },
                              }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" > 일중 마스터 현황 </Typography>
                                <Table className={classes.table} size="small" aria-label="simple table" style={{tableLayout: 'auto'}}>
                                    <TableHead>
                                      <TableRow>
                                        <TableCell>배치명</TableCell>
                                        <TableCell>시작일</TableCell>
                                        <TableCell>진행상태</TableCell>
                                        <TableCell>진행내역&nbsp;(%)</TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {rows.map((row) => (
                                        <TableRow key={row.seq}>
                                          <TableCell>{row.name}</TableCell>
                                          <TableCell>{row.startDt}</TableCell>
                                          <TableCell>
                                          {
                                            row.status === 100
                                            ? <Chip className={classes.success} size="small" label="완료" deleteIcon={<DoneIcon className={classes.icon}/>}/>
                                            : <Chip className={classes.ing} size="small" label="진행중" />
                                          }
                                          </TableCell>
                                          <TableCell>{row.status}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant="subtitle2" > 시간대별 AMS LOG </Typography>
                        <Chart
                              height={'300px'}
                              chartType="Bar"
                              loader={
                                <div align="center"
                                    justify="center">
                                        Loading Chart
                                </div>}
                              data={[
                                ['Year', 'Sales', 'Expenses', 'Profit'],
                                ['2014', 1000, 400, 200],
                                ['2015', 1170, 460, 250],
                                ['2016', 660, 1120, 300],
                                ['2017', 1030, 540, 350],
                              ]}
                              options={{
                                // Material design options
                                colors: ['#E7E7E7', '#AFAFAF', '#BFB8EB'],
                                chart: {
                                },
                              }}
                              // For tests
                              rootProps={{ 'data-testid': '2' }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" > 서버별 배치결과 </Typography>
                            <Table className={classes.table} size="small" aria-label="simple table" style={{tableLayout: 'auto'}}>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>배치명</TableCell>
                                    <TableCell>시작일</TableCell>
                                    <TableCell>진행상태</TableCell>
                                    <TableCell>진행내역&nbsp;(%)</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map((row) => (
                                    <TableRow key={row.seq}>
                                      <TableCell>{row.name}</TableCell>
                                      <TableCell>{row.startDt}</TableCell>
                                      <TableCell>
                                      {
                                        row.status === 100
                                        ? <Chip className={classes.success} size="small" label="완료" deleteIcon={<DoneIcon className={classes.icon}/>}/>
                                        : <Chip className={classes.ing} size="small" label="진행중" />
                                      }
                                      </TableCell>
                                      <TableCell>{row.status}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                        </Paper>
                    </Grid>
                    <Grid item xs
                    >
                        <Paper className={classes.paper}>
                            <Typography variant="h6" > AMS LOG 유형 </Typography>
                            <Doughnut
                                data={doughnutData}
                                style={{display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',}}/>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                        <Typography variant="h6" > 중요업무이력 </Typography>
                        <Table className={classes.table} size="small" aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                    <TableCell align="right">등록일</TableCell>
                                    <TableCell align="right">TITLE</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {workLogRows.map((row) => (
                                    <TableRow key={row.seq}>
                                      <TableCell align="right">{row.regdate}</TableCell>
                                      <TableCell align="right">{row.title}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                        </Paper>
                    </Grid>                  
                </Grid>
                    
            </div>
        )
    }
    
}

export default withStyles(styles, {withTheme: true}) (DashBoardComponent);