import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root: {
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
}));

export default function FormContent(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                 전문 조회 결과
                </Typography>
                <Typography variant="h5" component="h2">
                {bull} 종류: {props.selectedKind} - {props.selectedService} 
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                 여기에 각 전문 소스 명 표시 
                </Typography>
                <Typography variant="body2" component="p">
                뿌려지는 전문 데이터들..
                <br />
                뿌려지는 전문 데이터들...
                <br />
                뿌려지는 전문 데이터들....
                <br />
                뿌려지는 전문 데이터들.....
                <br />
                Parsed result of requested data.....
                <br />
                Parsed result of requested data.......
                <br />
                {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        </div>
    )
}
