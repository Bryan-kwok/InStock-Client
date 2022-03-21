import Header from "./components/Header/Header";
import "./App.scss";
import { Component } from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import InventoryList from "./components/InventoryList/InventoryList";
import axios from "axios";
import AddNewWarehouse from "./components/addNewWarehouse/addNewWarehouse";
import EditWarehouse from "./components/editWarehouse/editWarehouse";
import WarehouseDetails from "./components/WareHouseDetails/WareHouseDetails";
import AddNewInventoryItem from "./components/AddNewInventoryItem/AddNewInventoryItem";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import Footer from "./components/footer/footer";
class App extends Component {
  state = {
    warehouses: null,
    inventory: null,
    isModalOpen: false,
    warehouseToDelete: null,
    inventoryToDelete: null,
  };

  loadInventory = () => {
    axios
      .get("http://localhost:8080/inventory")
      .then((response) => {
        this.setState({
          inventory: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  loadSingleWarehouse = () => {
    axios.get("http://localhost:8080/ware");
  };

  loadWarehouses = () => {
    axios
      .get("http://localhost:8080/warehouses")
      .then((response) => {
        this.setState({
          warehouses: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // get all inventory items on load
    this.loadInventory();

    // get all warehouses on load
    this.loadWarehouses();
  }

  componentDidUpdate() {
    if (this.state.isModalOpen === true) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0 });
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  handleWarehouseDelete = () => {
    axios
      .delete(
        `http://localhost:8080/warehouses/deletewarehouse/${this.state.warehouseToDelete}`
      )
      .then((res) => {
        this.setState({ isModalOpen: false });
        this.loadWarehouses();
      })
      .catch((err) => console.log(err));
  };

  handleInventoryDelete = () => {
    console.log("inventoryDelete");
    console.log("delete", this.state.inventoryToDelete);
    axios
      .delete(
        `http://localhost:8080/warehouses/deleteitem/${this.state.inventoryToDelete}`
      )
      .then((res) => {
        this.setState({ isModalOpen: false });
        this.loadInventory();
      })
      .catch((err) => console.log(err));
  };

  handleWarehouseModalToggle = (e) => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    e.target.parentNode.parentNode.parentNode.id.length === 36
      ? this.setState({
          warehouseToDelete: e.target.parentNode.parentNode.parentNode.id,
        })
      : this.setState({ warehouseToDelete: null });
  };

  handleInventoryModalToggle = (id) => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    id.length === 36
      ? this.setState({ inventoryToDelete: id })
      : this.setState({ inventoryToDelete: null });
    console.log("hi");
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(renderProps) => (
              <WarehouseList
                handleWarehouseDelete={this.handleWarehouseDelete}
                isModalOpen={this.state.isModalOpen}
                handleWarehouseModalToggle={this.handleWarehouseModalToggle}
                inventory={this.state.inventory}
                renderProps={renderProps}
                warehouses={this.state.warehouses}
              />
            )}
          />
          <Route path="/warehouses/add-new" exact component={AddNewWarehouse} />
          <Route path="/warehouses/add-new" component={AddNewWarehouse} />
          <Route
            path="/warehouses/:warehouseId/edit"
            render={(rProps) => (
              <EditWarehouse
                rProps={rProps}
                warehouses={this.state.warehouses}
              />
            )}
          />
          <Route
            path="/warehouses/:warehouseId"
            exact
            render={(rProps) => (
              <WarehouseDetails
                handleInventoryDelete={this.handleInventoryDelete}
                handleInventoryModalToggle={this.handleInventoryModalToggle}
                rProps={rProps}
                isModalOpen={this.state.isModalOpen}
                inventory={this.state.inventory}
                warehouses={this.state.warehouses}
              />
            )}
          />
          <Route
            path="/warehouses"
            render={(renderProps) => (
              <WarehouseList
                handleWarehouseDelete={this.handleWarehouseDelete}
                isModalOpen={this.state.isModalOpen}
                handleWarehouseModalToggle={this.handleWarehouseModalToggle}
                inventory={this.state.inventory}
                renderProps={renderProps}
                warehouses={this.state.warehouses}
              />
            )}
          />
          <Route
            path="/inventory"
            render={() =>
              this.state.inventory && (
                <InventoryList
                  isModalOpen={this.state.isModalOpen}
                  handleInventoryDelete={this.handleInventoryDelete}
                  handleInventoryModalToggle={this.handleInventoryModalToggle}
                  inventory={this.state.inventory}
                />
              )
            }
          />
          <Route path="/addItem" exact component={AddNewInventoryItem} />
          <Route path="/editItem" exact component={EditInventoryItem} />
          <Route
            path="/itemDetails/:itemId"
            render={(renderProps) =>
              this.state.inventory && (
                <InventoryItemDetails
                  {...renderProps}
                  InventoryItemDetails={this.state.inventory}
                />
              )
            }
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
