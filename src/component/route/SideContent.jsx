import React, {Component} from 'react'
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


const myData = [
  {
    id: "1",
    nameHeader: "MONITOR",
    subMenu: [{ id: "1", name: "배치실행결과" }
            , { id: "2", name: "비정상TRAN체크" }
            , { id: "3", name: "SOD/EOD" }]
  },
  {
    id: "2",
    nameHeader: "LOOKUP",
    subMenu: [{ id: "1", name: "공통코드TABLE" }
            , { id: "2", name: "점포코드 조회" }
            , { id: "3", name: "POS서버 조회" }
            , { id: "4", name: "전문 조회" }]
  }
];

class SideContent extends Component {
    
  state = { settings: [{ id: "1", open: true }, { id: "2", open: true }] };

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
              <ListItem button onClick={() => this.handleClick(each.id)} disablePadding>
                <ListItemIcon>
                    <DesktopMacIcon />
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
                <List component="div" disablePadding>
                  {each.subMenu.map(subData => (
                    <ListItem key={subData.id} button>
                      <ListItemText inset primary={subData.name} />
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
