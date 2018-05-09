// import { Button } from 'antd';
import * as React from 'react';
import './App.css';
import Hello from './components/Hello';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <Button type="primary" >Button</Button> */}
        <Hello name="TypeScript" />
      </div>
    );
  }
}

export default App;
