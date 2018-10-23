import React, { Component } from 'react';
import HomePage from './containers/Home/Home';
import StarredPage from './containers/Starred/Starred'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends Component {
    render() {
        return (
            <div>
              <Provider store={store}>
                <BrowserRouter>
                  <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/starred" component={StarredPage}/>
                    </Switch>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}

export default App;