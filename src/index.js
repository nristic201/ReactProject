import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SidebarMenu from './components/Sidebar'
import { CalendarContainer } from './containers/CalendarContainer';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <SidebarMenu />
                <div id='main-content'>
                    <Route path='/workout' component={App} />
                    <Route path='/calendar' component={CalendarContainer} />
                </div>
            </div>
        </Router>

    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
