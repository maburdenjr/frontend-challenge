import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App.jsx';

const store = configureStore();

const BowlingScoreSheet = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
});

render(<BowlingScoreSheet />, document.getElementById('app'));