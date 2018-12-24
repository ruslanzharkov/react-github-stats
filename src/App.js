import React, { Component } from 'react';
import HomePage from './containers/Home/Home';
import StarredContainer from './containers/Starred/StarredContainer'
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
                        <Route exact path="/another" component={HomePage}/>
                        <Route path="/" component={StarredContainer}/>
                    </Switch>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}

export default App;