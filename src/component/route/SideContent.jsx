import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';


const myData = [
  {
    id: "1",
    nameHeader: "MONITOR",
    subMenu: [{ id: "1.1", name: "배치실행결과", dir: "/batchRslt" }
            , { id: "1.2", name: "비정상TRAN체크", dir: "/" }
            , { id: "1.3", name: "SOD/EOD", dir: "/profile" }]
  },
  {
    id: "2",
    nameHeader: "LOOKUP",
    subMenu: [{ id: "2.1", name: "공통코드TABLE", dir: "/comcodelist" }
            , { id: "2.2", name: "점포코드 조회", dir: "/codes2" }
            , { id: "2.3", name: "POS서버 조회", dir: "/"}
            , { id: "2.4", name: "전문 조회", dir: "/lookup-if-data" }]
  },
  {
    id: "3",
    nameHeader: "WORK",
    subMenu: [{ id: "3.1", name: "서버 HELPDOWN", dir: "/" }
            , { id: "3.2", name: "POS HELPDOWN" , dir: "/"}
            , { id: "3.3", name: "신규점포 등록", dir: "/" }]
  }
];

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(0),
  },
  nested: {
      paddingLeft: theme.spacing(4),
  },
  headmenu: {
    backgroundColor: 'black',
    color: 'white',
    paddingRight: theme.spacing(1),
  },
});

class SideContent extends Component {
    
  state = { settings: [ { id: "1", open: true, }
                      , { id: "2", open: true, }
                      , { id: "3", open: true, }],
            selected: null };

  handleClick = id => {
    this.setState(state => ({
      ...state,
      settings: state.settings.map(item =>
        item.id === id ? { ...item, open: !item.open, select: !item.select } : item
      )
    }));
  };

  updateSelected(selectedIndex) {
    this.setState({ 
      selected: selectedIndex 
    });
  }


  render() {
    const { settings } = this.state;
    const { selected } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          {myData.map(each => (
            <React.Fragment key={each.id}>
              <ListItem
              button
              onClick={() => this.handleClick(each.id)}
              disablepadding="true"
              className={classes.headmenu}
              >
                <ListItemIcon>
                    {
                        {
                            1: <DesktopMacIcon style={{ color: 'white' }} />,
                            2: <LibraryBooksIcon style={{ color: 'white' }} />,
                            3: <AssignmentReturnedIcon style={{ color: 'white' }} />
                        }[each.id]
                    }
                </ListItemIcon>
                <ListItemText inset primary={each.nameHeader} />
                {settings.find(item => item.id === each.id).open
                  ? <ExpandLess />
                  : <ExpandMore />}
              </ListItem>
                <Divider />
              <Collapse
                in={settings.find(item => item.id === each.id).open}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding="true" >
                  {each.subMenu.map(subData => (
                    <ListItem 
                    key={subData.id}
                    button
                    onClick = { ()=> this.updateSelected(subData.id)}
                    selected={selected=== subData.id}
                    className={classes.nested}
                    >
                      <Link to={subData.dir}>
                        <ListItemText inset primary={subData.name} />
                      </Link>
                      
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  }
}
export default withStyles(styles, {withTheme: true})(SideContent);
