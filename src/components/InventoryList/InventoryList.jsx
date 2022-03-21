import "./InventoryList.scss";
import "../../components/InventoryCard/InventoryCard.scss";
import SearchImg from "../../assets/icons/search-24px.svg";
import React from "react";
import InventoryCard from "../InventoryCard/InventoryCard";
import SortIcon from "../../assets/icons/sort-24px.svg";
import InventoryModal from "../InventoryModal/InventoryModal";
import { Link } from "react-router-dom";

export default class InventoryList extends React.Component {
  state = {
    inventoryName: null,
  };

  inventoryNameForModal = (inventoryName) => {
    this.setState({ inventoryName: inventoryName });
  };

  render() {
    return (
      <div className="inventoryList__container">
        <div className="inventoryList__wrapper">
          <div className="inventorylist">
            <header className="inventorylist__header">
              <h2 className="inventorylist__title">Inventory</h2>
              <form className="inventorylist__search">
                <img
                  className="inventorylist__search-img"
                  src={SearchImg}
                  alt="magnifying icon"
                />
                <input
                  className="inventorylist__search-title"
                  type="text"
                  placeholder="Search..."
                />
              </form>
              <Link className="Link__item" to="/addItem">
                <p className="inventorylist__search-add">+Add New Item</p>
              </Link>
            </header>
          </div>
          <div className="inventoryCardtableandDesktop__Header">
            <h4 className="inventoryCardtableandDesktop__hitem">
              INVENTORY ITEM
              <img
                className="sortingimg"
                src={SortIcon}
                alt="sorting icon"
              ></img>
            </h4>
            <h4 className="inventoryCardtableandDesktop__hcategory">
              CATEGORY
              <img
                className="sortingimg"
                src={SortIcon}
                alt="sorting icon"
              ></img>
            </h4>
            <h4 className="inventoryCardtableandDesktop__hstatus">
              STATUS
              <img
                className="sortingimg"
                src={SortIcon}
                alt="sorting icon"
              ></img>
            </h4>
            <h4 className="inventoryCardtableandDesktop__hqty">
              QTY
              <img
                className="sortingimg"
                src={SortIcon}
                alt="sorting icon"
              ></img>
            </h4>
            <h4 className="inventoryCardtableandDesktop__hwarehouse">
              WAREHOUSE
              <img
                className="sortingimg"
                src={SortIcon}
                alt="sorting icon"
              ></img>
            </h4>
            <h4 className="inventoryCardtableandDesktop__haction">ACTIONS</h4>
          </div>
          <ul>
            {this.props.inventory.map((inventorycard) => {
              return (
                <InventoryCard
                  inventoryNameForModal={this.inventoryNameForModal}
                  handleInventoryDelete={this.props.handleInventoryDelete}
                  handleInventoryModalToggle={
                    this.props.handleInventoryModalToggle
                  }
                  itemName={inventorycard.itemName}
                  id={inventorycard.id}
                  category={inventorycard.category}
                  status={inventorycard.status}
                  quantity={inventorycard.quantity}
                  warehouseName={inventorycard.warehouseName}
                />
              );
            })}
          </ul>
          {this.props.isModalOpen && (
            <InventoryModal
              name={this.state.inventoryName}
              inventoryName={this.state.inventoryName}
              handleInventoryDelete={this.props.handleInventoryDelete}
              handleInventoryModalToggle={this.props.handleInventoryModalToggle}
            />
          )}
        </div>
      </div>
    );
  }
}
