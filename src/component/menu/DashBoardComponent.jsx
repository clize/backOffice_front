import React, { Component } from 'react';
import Chart from "react-google-charts";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography'

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
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cardRoot: {
      
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

class DashBoardComponent extends Component {


    render() {
        const { classes } = this.props;
        return(
            <div className= {classes.root}>
                <Typography variant="h4" > DASHBOARD </Typography>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Chart
                              //width={'500px'}
                              height={'300px'}
                              chartType="Bar"
                              loader={<div>Loading Chart</div>}
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
                                  title: 'Company Performance',
                                  subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                },
                              }}
                              // For tests
                              rootProps={{ 'data-testid': '2' }}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map((row) => (
                                    <TableRow key={row.name}>
                                      <TableCell component="th" scope="row">
                                        {row.name}
                                      </TableCell>
                                      <TableCell align="right">{row.calories}</TableCell>
                                      <TableCell align="right">{row.fat}</TableCell>
                                      <TableCell align="right">{row.carbs}</TableCell>
                                      <TableCell align="right">{row.protein}</TableCell>
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