import React, {Component} from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import BasicForm from './forms/BasicForm';
import WrappedForm from './forms/WrappedForm';
import HorizontalForm from './forms/HorizontalForm';
class Page extends Component {
    componentDidMount(){
        console.log(this.props.location.key)
    }
    render() {
        return (
            <div style={{height:'100%',padding:'20px'}} key={this.props.location.key}>
                <Switch>
                    <Route path='/app/form/basicForm' component={BasicForm}></Route>
                    <Route path='/app/form/wrappedForm' component={WrappedForm}></Route>
                    <Route path='/app/form/horizontalForm' component={HorizontalForm}></Route>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Page);