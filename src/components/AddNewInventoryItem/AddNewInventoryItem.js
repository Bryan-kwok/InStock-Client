import axios from "axios";
import { Component } from "react";
import back_arrow from "../../assets/icons/arrow_back-24px.svg"
import "./AddNewInventoryItem.scss";
import { Link } from "react-router-dom";


class AddNewInventoryItem extends Component{
    ///The state of inStock is actually the opposite if checking for false or true. This is because the 
    ///disable={} function takes 'true' if you want to disable an element, and 'false' if you 
    ///want to enable it.
    state= {
        inStock: false
    };

    ///When client clicks either the 'In stock' or 'Out of Stock' buttons, change the state of inStock 
    ///accordingly. There's prob a way to get this to one line, but hey, it works.
    changeStockAvailabilityFalse = ()=>{
            this.setState({inStock:true});
    }

    changeStockAvailabilityTrue = ()=>{
            this.setState({inStock:false});
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const itemName = form.itemNameBox.value;
        const description = form.descriptionBox.value;
        const category = form.itemCategory.value;
        const status = !this.state.inStock;
        const quantity = form.quantityBox.value || 0;
        const warehouse = form.selectWarehouse.value;

        if(!(itemName&&description&&category&&warehouse)){
            return alert("Would you kindly, fill in the rest of the form first.")
        }

        axios.post("https://instock-api.onrender.com/inventory",{
            itemName:itemName,
            description:description,
            category:category,
            status:status,
            quantity:quantity,
            warehouseName:warehouse
        })
        .then(response=>{
            console.log(response)
            this.handleAlert()
        })
    }

    handleAlert = ()=>{
        alert("Item submitted successfully")
        window.location = '/inventory'
    }

    render(){
        return(
            <div className="bigger__wrapper">
                <div className="addItem__container">
                    <div className="header__wrapper">
                        <Link to="/inventory">
                            <img className="header__backArrow" src={back_arrow} alt="Back arrow icon"/>
                        </Link>
                        <h1 className="header__title">Add New Inventory Item</h1>
                    </div>
                    <form id="addItem__form" className="addItem__form" onSubmit={this.handleSubmit}>
                        <div className="addItem__wrapper">
                            <div className="addItem__wrapper-left">
                                <h2 className="addItem__wrapper-title">Item Details</h2>
                                <h3 className="addItem__wrapper-label">Item Name</h3>
                                <textarea className="addItem__uploadName menus" placeholder="Item name" name="itemNameBox" type="text"></textarea>
                                <h3 className="addItem__wrapper-label">Description</h3>
                                <textarea className="addItem__uploadDescription menus menus-description" placeholder="Please enter a brief item description..." name="descriptionBox" type="text"></textarea>
                                <h3 className="addItem__wrapper-label">Category</h3>
                                <select className="menus" name="itemCategory" id="itemCategory" placeholder="Please select">
                                    <option value="" disabled selected>Please Select</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Gear">Gear</option>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Health">Health</option>
                                </select>
                            </div>
                            <div className="addItem__wrapper-right">
                                <h2 className="addItem__wrapper-title">Item Availability</h2>
                                <h3 className="addItem__wrapper-label">Status</h3>
                                <div className="addItem__inputForm">
                                    <input type="radio" name="stockOrNoStock" value="InStock"  onClick={this.changeStockAvailabilityTrue}></input>
                                    <label className="button__label" for="InStock">In Stock</label>
                                    <input type="radio" name="stockOrNoStock" value="OutofStock" onClick={this.changeStockAvailabilityFalse}></input>
                                    <label className="button__label" for="OutofStock">Out of Stock</label>
                                    <h3 className="addItem__wrapper-label">Quantity</h3>
                                    <textarea className="addItem__quantity menus" name="quantityBox" placeholder="0" disabled={this.state.inStock}></textarea>
                                    <h3 className="addItem__wrapper-label">Warehouse</h3>
                                    <select className="menus" name="selectWarehouse" id="selectWarehouse" placeholder="Please Select">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="San Fran">San Fran</option>
                                        <option value="Santa Monica">Santa Monica</option>
                                        <option value="Seattle">Seattle</option>
                                        <option value="Miami">Miami</option>
                                        <option value="Manhattan">Manhattan</option>
                                    </select>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                    <div className="addItem__buttonWrapper">
                        <Link to="/inventory">
                            <button className="addItem__cancelButton">Cancel</button>
                        </Link>
                        <button className="addItem__addButton" 
                                type="submit"
                                form="addItem__form">+ Add item</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNewInventoryItem;