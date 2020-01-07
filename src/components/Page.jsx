import React, {Component} from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Buttons from './ui/Buttons';
import Icons from './ui/Icons';
import Spins from './ui/Spins';
import Echarts from './charts/Echarts';
import BasicTable from './tables/BasicTable';
import AdvancedTables from './tables/AdvancedTables';
import SearchTable from './tables/SearchTable';
import SelectTable from './tables/SelectTable';
import SortTable from './tables/SortTable';
import AsynchronousTable from './tables/AsynchronousTable';
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
                <Route path='/app/ui/buttons' component={Buttons}></Route>
                <Route path='/app/ui/icons' component={Icons}></Route>
                <Route path='/app/ui/spins' component={Spins}></Route>
                <Route path='/app/charts/echarts' component={Echarts}></Route>
                <Route path='/app/table/basicTable' component={BasicTable}></Route>
                <Route path='/app/table/advancedTables' component={AdvancedTables}></Route>
                <Route path='/app/table/searchTable' component={SearchTable}></Route>
                <Route path='/app/table/selectTable' component={SelectTable}></Route>
                <Route path='/app/table/asynchronousTable' component={AsynchronousTable}></Route>
                <Route path='/app/table/sortTable' component={SortTable}></Route>
                <Route path='/app/form/basicForm' component={BasicForm}></Route>
                <Route path='/app/form/wrappedForm' component={WrappedForm}></Route>
                <Route path='/app/form/horizontalForm' component={HorizontalForm}></Route>
            </div>
        )
    }
}

export default withRouter(Page);