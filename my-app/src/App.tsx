//import CircularProgress from '@material-ui/core/CircularProgress';
//import Dropzone from 'react-dropzone';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/icons/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

//import blue from '@material-ui/core/colors/blue';

import * as React from 'react';

//import Loader from 'react-loader-spinner';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
  typography: {
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
  },
});

interface IState {
  username: string,
  returnValue: any,
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: "kk",
      returnValue: "",
    }
  }

  public search(user: String) {
    fetch("https://api.github.com/users/" + user).then(d => d.json())
      .then(d => {
        this.setState({
          returnValue: d
        })
      })
  }

  public changeState() {
    this.search((document.getElementById("name") as HTMLInputElement).value);
  }

  public render() {
    if (this.state.returnValue == "") {
      return (
        <MuiThemeProvider theme={theme}>
          <h3 style={{ textAlign: "center" }}> Find out more about a Github user by entering a name below! </h3>
          <div style={{ textAlign: "center" }}>
            <TextField id="name" label="Name" />
            <Button variant="contained" style={{ textAlign: "center" }} color="primary" onClick={e => this.search((document.getElementById("name") as HTMLInputElement).value)}
            > Check user </Button>
          </div>
        </MuiThemeProvider>
      );
    }
    if (this.state.returnValue.message == "Not Found") { /* when the username does not exist */
      return (
        <MuiThemeProvider theme={theme}>
          <h3 style={{ textAlign: "center" }}> Username does not exist. Find another Github user below! </h3>
          <div style={{ textAlign: "center" }}>
            <TextField id="name" label="Name" />
            <Button variant="contained" style={{ textAlign: "center" }} color="primary" onClick={e => this.search((document.getElementById("name") as HTMLInputElement).value)}
            > Check user </Button>
          </div>
        </MuiThemeProvider>

      );
    }
    if (this.state.returnValue.message && this.state.returnValue.documentation_url == ("https://developer.github.com/v3/#rate-limiting")) return (/* Rate limit message (max of 60 reqests per hour)  */
      <h2>{this.state.returnValue.message}</h2>
    )
    return (
      <MuiThemeProvider theme={theme}>
        <div className="container-fluid">
          <div className="centreText">
          </div>
          <div id="details">
            <a href={this.state.returnValue.html_url}>
              <img src={this.state.returnValue.avatar_url} height="225" width="225"></img>
            </a>
            <Typography variant="display3" gutterBottom>{this.state.returnValue.login}</Typography>
            <Typography variant="headline" gutterBottom>{this.state.returnValue.name}</Typography>

            <List component="info" style={{ margin: "1px" }}>
              <ListItem button style={{ width: "30%" }} >
                <a href={this.state.returnValue.html_url}>
                <ListItemText primary={"profile url: " + (this.state.returnValue.html_url)} style={{fontSize: "13px" }} />
                </a>
              </ListItem>
              <ListItem button style={{ width: "30%" }} >
                <ListItemText primary={"followers: " + (this.state.returnValue.followers)} />
              </ListItem>
              <ListItem button style={{ width: "30%" }}>
                <ListItemText primary={"profile creation date: " + (this.state.returnValue.created_at)} />
              </ListItem>
              <ListItem button style={{ width: "30%" }}>
                <ListItemText primary={"last repo update: " + (this.state.returnValue.updated_at)} />
              </ListItem>
            </List>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <h3 style={{ textAlign: "center" }}> Find out more about a Github user by entering a name below! </h3>
        <div style={{ textAlign: "center", paddingBottom: "3%" }}>
          <TextField id="name" label="Name" />
          <Button variant="contained" style={{ textAlign: "center" }} color="primary" onClick={e => this.search((document.getElementById("name") as HTMLInputElement).value)}
          > Check user </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}