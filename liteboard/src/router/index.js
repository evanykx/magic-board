import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../redux/action/userActions';
import UserLogin from '../view/user/login';
import HomeIndex from '../view/home/index';

class AppRouter extends Component {
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={ UserLogin } />
                    <Route path="/" component={ HomeIndex } /> 
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        store: state.store,
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppRouter);