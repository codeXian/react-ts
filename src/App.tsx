// import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.less';
import Loading from './components/Loading';

const LoadableBasicLayout = Loadable({
  loader: () => import('./routes/BasicLayout'),
  loading: Loading,
});

const LoadableIndexPage = Loadable({
  loader: () => import('./routes/IndexPage'),
  loading: Loading,
});

class App extends React.PureComponent {
  public render() {
    return (
      <div className="App">
        {
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={LoadableBasicLayout} />
              <Route path="/index" component={LoadableIndexPage} />
            </Switch>
          </BrowserRouter>
        }
      </div>
    );
  }
}

export default App;
