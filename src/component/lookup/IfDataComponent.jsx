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

    render() {
        return (
                <div className={this.useStyles.root}>
                    <h1>전문 조회</h1>
                    <Selector/>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <SearchCard />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SearchCard />
                        </Grid>
                    </Grid>
                </div>

                
                
        );
    }
}
