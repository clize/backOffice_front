import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FormHelperText from '@material-ui/core/FormHelperText';

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
  const [service, setService] = React.useState('');
  const [server, setServer] = React.useState('');
  const handleChange = (event) => {
    setServer(event.target.value);
    setService(event.target.value)
  };
  
  return (
    <div>
      
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
        </Select>
        <FormHelperText>서버별</FormHelperText>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-simple-select-helper-label">Service</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={service}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {myData.map(each => (
                  <MenuItem value={each.kind}>{each.service}</MenuItem>
          ))}
        </Select>
        <FormHelperText>서비스별</FormHelperText>
      </FormControl>
      <FormControl className={classes.margin} >
        <TextField
            id="outlined-primary"
            label="Search"
            variant="outlined"
            color="primary"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                ),
            }}
            helperText="조회하고 싶은 전문을 붙여넣으세요"
        />
      </FormControl>
    </div>
  );
}