import React, { Component } from 'react';
import SearchCard from './FormContent';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FormHelperText from '@material-ui/core/FormHelperText';
//import Selector from './SelectorComponent'


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cardRoot: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    card:{
      padding: theme.spacing(2),
    }
  });

class IfDataComponent extends Component {    
    constructor(props){
        super(props);
        this.state = {
            myData : [
                {
                    //id:"1",
                    kind: "Card",
                    service: ["Tran","IRT","Sum","Monitor"]
                },
                // {
                //     id:"1",
                //     kind: "Card",
                //     service: "IRT",
                // },
                // {
                //     id:"1",
                //     kind: "Card",
                //     service: "Sum",
                // },
                // {
                //     id:"4",
                //     kind: "Card",
                //     service: "Monitor",
                // },
                {
                    //id:"5",
                    kind: "Pay",
                    service: ["IRT","Tran"]
                },
                // {
                //     id:"6",
                //     kind: "Pay",
                //     service: "Tran",
                // },
                {
                    //id:"7",
                    kind: "SKU",
                    service: ["IRT",]
                },
                {
                    //id:"8",
                    kind: "Mobile Gift",
                    service: ["Tran","Sum"]
                },
                // {
                //     //id:"9",
                //     kind: "Mobile Gift",
                //     service: "Sum",
                // },
            ],
            service: '',
            kind: '',
        };
    };

    handleChange = (event) => {
        this.setState(()=> {
            return {
                service: event.target.value,
                kind: event.target.value,
            }
        })

    };

    render() {
        const { classes } = this.props;

        return (
                <div className={classes.root}>
                    <h1>전문 조회</h1>
                    <div>
                        <FormControl className={classes.margin}>
                            <InputLabel id="demo-simple-select-helper-label">System</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={this.state.kind}
                                onChange={this.handleChange}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                {this.state.myData.map(each => (
                                        <MenuItem value={each.kind}>{each.kind}</MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>유관계 종류별</FormHelperText>
                            </FormControl>
                            <FormControl className={classes.margin}>
                            <InputLabel id="demo-simple-select-helper-label">Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={this.state.service}
                                onChange={this.handleChange}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                {this.state.myData.map(each => 
                                    each.service.map(subService => (
                                        <MenuItem value={each.kind}>{subService}</MenuItem>    
                                    ))
                                )}
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
                    <div>
                        <Grid>
                            <SearchCard selectedService = {this.state.service} selectedKind = {this.state.kind} />
                        </Grid>
                    </div>

                    
                </div>

        );
    }
}

export default withStyles(styles, { withTheme: true })(IfDataComponent);