import React, { Component } from 'react';


import Typography from '@material-ui/core/Typography'


class DashBoardComponent extends Component {


    render() {
        return(
            <div>
                <Typography variant="h4" style={style}> DASHBOARD </Typography>
            </div>
        )
    }
    
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default DashBoardComponent;