import React, { Component } from 'react';
import HomePage from './containers/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/index';

const store = configureStore();
class App extends Component {
    render() {
        return (
            <div>
              <Provider store={store}>
                <BrowserRouter>
                  <Switch>
                        <Route exact path="/" component={HomePage}/>
                    </Switch>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}

export default App;