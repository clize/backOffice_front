import React, { Component } from 'react';
import SearchCard from './FormContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Selector from './SelectorComponent'



export default class IfDataComponent extends Component {
    useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    
    state = {
        myData : [
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
    }

    render() {
        return (
                <div className={this.useStyles.root}>
                    <h1>전문 조회</h1>
                    <Selector  selectorData = {this.state.myData}/>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <SearchCard/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SearchCard selectorData = {this.state.myData}/>
                        </Grid>
                    </Grid>
                </div>

                
                
        );
    }
}
