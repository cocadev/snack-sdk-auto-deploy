import React, { Component } from 'react';
import './App.css';
import { SnackSession } from 'snack-sdk';
import Request from "request-promise";
import { username, password, appId, files, dependencies, sdkVersion } from './data';

class App extends Component {

  state = {
    url: '',
    saveUrl: null,
  };

  _save = async () => {
    await Request.post({
      "headers": { "Content-Type": "application/json" },
      "url": "https://expo.io/--/api/v2/auth/loginAsync",
      "body": `{"username":"${username}","password":"${password}"}`
    }, (error, response, body) => {
      if (error) {
        return console.error(error);
      }
      var result = JSON.parse(body).data;
      this.setState({ user: result })
    })
      .catch(function (err) {
        console.error(err);
      });

    let session = new SnackSession({
      files,
      dependencies,
      sdkVersion,
      sessionId: appId,
      verbose: true,
      name: appId,
      user: this.state.user,
      isDraft: true,
    });
    await session.sendCodeAsync(files);

    await session.startAsync();
    let saveResult = await session.saveAsync();
    await session.stopAsync();

    this.setState({
      saveUrl: saveResult.url,
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.url}</div>

        <div>
          <a href="#" onClick={this._save}>
            Save
          </a>
        </div>

        <div>Save url: {this.state.saveUrl}</div>

      </div>
    );
  }
}

export default App;