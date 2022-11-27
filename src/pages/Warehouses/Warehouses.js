import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import WarehouseDetails from "../../components/WareHouseDetails/WareHouseDetails";


class Warehouses extends Component{

    

    render() {
        return(
            <Switch>
                <Route path="/" exact />
                <Route path='/:warehouseId' exact render={(rProps)=>this.props.inventory && this.props.warehouses && <WarehouseDetails rProps={rProps} inventory={this.props.inventory} warehouses={this.props.warehouses} />} />
                <Route path='/:warehouseId/edit' render={<EditWarehouse warehouses={this.props.warehouses} />} />
            </Switch>
        )
    }
}

export default Warehouses;