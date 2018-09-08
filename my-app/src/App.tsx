//import CircularProgress from '@material-ui/core/CircularProgress';
//import Dropzone from 'react-dropzone';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/icons/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import * as React from 'react';

//import Loader from 'react-loader-spinner';
import './App.css';


//const urlPath = username =>
 // `https://api.github.com/users/${username}`

 interface IState {
  //imageFiles: any[],
  //results: any
  //dropzone: any
  username: string,
  returnValue: any
} 

export default class App extends React.Component<{}, IState> {
//export default class App extends React.Component<{}> {

  constructor(props: any) {
    super(props)
    this.state = {
     // imageFiles: [],
     // results: "",
     // dropzone: this.onDrop.bind(this)
     username: "",
     returnValue: ""
    }
  }

/*   public onDrop(files: any) {
    this.setState({
      imageFiles: files,
      results: ""
    })
    const file = files[0]
    const reader = new FileReader();
    reader.onload = (readerEvt) => {
        const binaryString = readerEvt.target!!.result; // !! checks if not null
        this.upload(btoa(binaryString)) // converts binary string to base64 to make the string smaller to send to the server
    };

    reader.readAsBinaryString(file);
  }
 */
public search(){
  fetch("https://api.github.com/users/" + this.state.username).then(d=>d.json())
  //fetch(urlPath(this.props.username)).then(d=>d.json())
  .then(d=> {
    this.setState({
      returnValue: d
    })
  })
}

/*   public upload(base64String: string) {
    fetch('http://api.open-notify.org/iss-now.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        file: base64String,
      })
    })
    .then((response : any) => { // callback function
      if (!response.ok) {
        this.setState({results: response.statusText})
      }
      else {
        response.json().then((data:any) => this.setState({results: data[0].class}))
      }
      return response
    })
  } */

  public render() {
    {this.search()}

    if (!this.state.returnValue) return (

    <div className = "Button">
        <h2> no data entered! </h2> 
    <Button variant="contained" color="primary"> Check user </Button>
    
    </div>
    
    ) 
    if (this.state.returnValue.message) return (/* Rate limit message (max of 60 reqests per hour)  */
      <h2>{this.state.returnValue.message}</h2>
    )
    return (
      <div className="container-fluid">
        <div className="centreText">
{/*           <div className="dropZone">
            <Dropzone onDrop={this.state.dropzone} style={{position: "relative"}}>
              <div style={{height: '50vh'}}>
                {
                  this.state.imageFiles.length > 0 ? 
                    <div>{this.state.imageFiles.map((file) => <img className="image" key={file.name} src={file.preview} /> )}</div> :
                    <p>Try dropping some files here, or click to select files to upload.fghjk</p>
                }  
              </div>
            </Dropzone> */}
          </div>
          <h2>{this.state.returnValue.name}
          <img src={this.state.returnValue.avatar_url} alt="Smiley face" height="250" width="250">
            </img>
            <br></br>
              profile url: {this.state.returnValue.html_url}
              <br></br>
              profile creation date: {this.state.returnValue.created_at}
              <br></br>
              last repo update: {this.state.returnValue.updated_at}
          </h2>
          <h2> Check another user! </h2> 
          <div id = "userInput">
{/*            <TextField id="name" label="Name" value={this.state.username} onChange={e => this.setState({ username: e.target.value, returnValue: "" }) }/>
 */}          {/* <input type="text" id="inputField"></input> */}
            <TextField id="name" label="Name" />

          <Button variant="contained" color="primary" onClick={() => {
            this.setState( {
              username: (document.getElementById("name") as HTMLInputElement).value,
              returnValue: ""
            })
            //console.log( (document.getElementById("name") as HTMLInputElement).value ) 
          }
          }> Check user </Button> 
          </div>
{/*           <div  className="dank">
          {
            this.state.results === "" && this.state.imageFiles.length > 0 ?   
            <CircularProgress thickness={3} /> :
            <p>{this.state.results}</p>
          }
          </div> */}
        </div>
      //</div>
    );
  }
}