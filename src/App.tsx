import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, message } from 'antd';
import { Provider } from 'mobx-react';
import TestView from './pages/test';
import stores from './store';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button type={'primary'} onClick={()=>message.success("We are running App")}> Hello Button</Button>
          {/* <RenameOption model={new RenameOptionModel()}/> */}
          <Provider testStore={stores.testStore}>
              <TestView />
          </Provider>
        </header>
      </div>
    );
  }
}

export default App;

