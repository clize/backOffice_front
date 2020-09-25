import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles((theme) => ({
    container: {
      gridGap: theme.spacing(1),
    },
  }));
  


export default function MaterialUIPickers() {
    const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="flex-start"
        alignItems="baseline"
        >
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="배치 실행일"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="배치 실행시간"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <Button size="small" variant="contained"  endIcon={<SearchSharpIcon />}> 검색 </Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}