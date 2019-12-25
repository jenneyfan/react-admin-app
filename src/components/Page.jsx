import React, {Component} from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import BasicTable from './tables/BasicTable';
import FixedTable from './tables/FixedTable';
import EditableTable from './tables/EditableTable';
import ExpandedTable from './tables/ExpandedTable';
import SearchTable from './tables/SearchTable';
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
                    <Route path='/app/table/basicTable' component={BasicTable}></Route>
                    <Route path='/app/table/fixedTable' component={FixedTable}></Route>
                    <Route path='/app/table/editableTable' component={EditableTable}></Route>
                    <Route path='/app/table/expandedTable' component={ExpandedTable}></Route>
                    <Route path='/app/table/searchTable' component={SearchTable}></Route>
                    <Route path='/app/form/basicForm' component={BasicForm}></Route>
                    <Route path='/app/form/wrappedForm' component={WrappedForm}></Route>
                    <Route path='/app/form/horizontalForm' component={HorizontalForm}></Route>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Page);