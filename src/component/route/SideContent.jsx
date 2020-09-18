import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
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
    subMenu: [{ id: "1", name: "배치실행결과", dir: "/batchRslt" }
            , { id: "2", name: "비정상TRAN체크", dir: "/" }
            , { id: "3", name: "SOD/EOD", dir: "/profile" }]
  },
  {
    id: "2",
    nameHeader: "LOOKUP",
    subMenu: [{ id: "1", name: "공통코드TABLE", dir: "/comcodelist" }
            , { id: "2", name: "점포코드 조회", dir: "/codes2" }
            , { id: "3", name: "POS서버 조회", dir: "/"}
            , { id: "4", name: "전문 조회", dir: "/lookup-if-data" }]
  },
  {
    id: "3",
    nameHeader: "WORK",
    subMenu: [{ id: "1", name: "서버 HELPDOWN", dir: "/" }
            , { id: "2", name: "POS HELPDOWN" , dir: "/"}
            , { id: "3", name: "신규점포 등록", dir: "/" }]
  }
];

class SideContent extends Component {
    
  state = { settings: [{ id: "1", open: true }, { id: "2", open: true }, { id: "3", open: true }] };

  handleClick = id => {
    this.setState(state => ({
      ...state,
      settings: state.settings.map(item =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    }));
  };

  useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
      },
  }));

  render() {
    const { settings } = this.state;
    return (
      <div style={this.useStyles.nested}>
        <List component="nav">
          {myData.map(each => (
            <React.Fragment key={each.id}>
              <Divider />
              <ListItem button onClick={() => this.handleClick(each.id)} disablepadding>
                <ListItemIcon>
                    {
                        {
                            1: <DesktopMacIcon />,
                            2: <LibraryBooksIcon />,
                            3: <AssignmentReturnedIcon />
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
                <List component="div" disablePadding >
                  {each.subMenu.map(subData => (
                    <ListItem key={subData.id} button>
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
export default SideContent;
