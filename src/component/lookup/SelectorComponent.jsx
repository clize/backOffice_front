import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import FormHelperText from '@material-ui/core/FormHelperText';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const myData = [
    {
        id:"1",
        kind: "Card",
        service: "Tran",
    },
    {
        id:"2",
        kind: "Card",
        service: "IRT",
    },
    {
        id:"3",
        kind: "Card",
        service: "Sum",
    },
    {
        id:"4",
        kind: "Card",
        service: "Monitor",
    },
    {
        id:"5",
        kind: "Pay",
        service: "IRT",
    }
    ,
    {
        id:"6",
        kind: "Pay",
        service: "Tran",
    },
    {
        id:"7",
        kind: "SKU",
        service: "IRT",
    },
    {
        id:"8",
        kind: "Mobile Gift",
        service: "Tran",
    },
    {
        id:"9",
        kind: "Mobile Gift",
        service: "Sum",
    },
]

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [server, setServer] = React.useState('');
  const handleChange = (event) => {
    setServer(event.target.value);
    setAge(event.target.value)
  };
  
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-simple-select-helper-label">Servers</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={server}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {myData.map(each => (
                  <MenuItem value={each.kind}>{each.kind}</MenuItem>
          ))}
          {/* <MenuItem value={10}>CENTER</MenuItem>
          <MenuItem value={20}>STORE</MenuItem>
          <MenuItem value={30}>STAT</MenuItem> */}
        </Select>
        <FormHelperText>서버별         </FormHelperText>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-simple-select-helper-label">Service</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {myData.map(each => (
                  <MenuItem value={each.kind}>{each.service}</MenuItem>
          ))}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>서비스별</FormHelperText>
      </FormControl>
    </div>
  );
}