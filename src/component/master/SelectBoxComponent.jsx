import 'date-fns';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import TextField from '@material-ui/core/TextField';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import CodeListComponent from "./CodeListComponent";



const useStyles = makeStyles((theme) => ({
    container: {
      gridGap: theme.spacing(1),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  }));

 class SelectBoxComponent extends Component {

  render() {

    // const classes = useStyles();

  return (
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        className={useStyles.container}
        container
        direction="row"
        justify="flex-start"
        alignItems="baseline"
        >
        <TextField id="filed_code" label="Code" />
        <TextField id="filed_codenm" label="Code명" />

        {/* <Button size="small" variant="contained"  endIcon={<SearchSharpIcon />} onClick={CodeListComponent.fetchCode} > 검색 </Button> */}
        <Button size="small" variant="contained"  endIcon={<SearchSharpIcon />} 
        onClick={function(e){
          e.preventDefault();
          this.props.onBtnClick('1111');
          
        }.bind(this)} > 검색 </Button>

      </Grid>

    // </MuiPickersUtilsProvider>
  );

      }

 }

  export default SelectBoxComponent;

// export default function SelectBoxComponent() {
//    const classes = useStyles();

//   // const [selectedDate, setSelectedDate] = React.useState(new Date());

//   // const handleDateChange = (date) => {
//   //   setSelectedDate(date);
// //  };

//   return (
//     // <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Grid
//         className={classes.container}
//         container
//         direction="row"
//         justify="flex-start"
//         alignItems="baseline"
//         >
//         <TextField id="filed_code" label="Code" />
//         <TextField id="filed_codenm" label="Code명" />

//         {/* <Button size="small" variant="contained"  endIcon={<SearchSharpIcon />} onClick={CodeListComponent.fetchCode} > 검색 </Button> */}
//         <Button size="small" variant="contained"  endIcon={<SearchSharpIcon />} onClick={function(e){
//           e.preventDefault();
//           this.props.onBtnClick('1111');
          
//         }.bind(this)} > 검색 </Button>

//       </Grid>

//     // </MuiPickersUtilsProvider>
//   );
// }