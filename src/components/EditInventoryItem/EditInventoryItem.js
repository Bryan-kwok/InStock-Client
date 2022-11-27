import { Component } from "react";
import "./EditInventoryItem.scss"
import back_arrow from "../../assets/icons/arrow_back-24px.svg"
import axios from "axios";
import { Link } from "react-router-dom";

class EditInventoryItem extends Component{

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



    ///The axios POST request to edit an inventory item. Sends all the relevant data.
    handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const itemName = form.itemNameBox.value;
        const description = form.descriptionBox.value;
        const category = form.itemCategory.value;
        const status = !this.state.inStock;
        const warehouse = form.selectWarehouse.value;

        if(!(itemName&&description&&category&&status&&warehouse)){
            return alert("Would you kindly, fill in the rest of the form first.")
        }

        axios.post("https://instock-api.onrender.com/inventory/editItem",{
            itemName:itemName,
            description:description,
            category:category,
            status:status,
            warehouse:warehouse
        })
        .then(response=>{
            console.log(response)
            this.handleAlert()
        })
    }

    handleAlert = ()=>{
        alert("Item edited successfully")
        window.location = '/inventory'
    }


    render(){
        return(
            <div className="bigger__wrapper">
                <div className="editItem__container">
                    <div className="header__wrapper">
                        <Link to="/inventory">
                            <img className="header__backArrow" src={back_arrow} alt="Back arrow icon"/>
                        </Link>
                        <h1 className="header__title">Edit Inventory Item</h1>
                    </div>
                        <form id="editItem__form" className="editItem__form" onSubmit={this.handleSubmit}>
                            <div className="editItem__wrapper">
                                <div className="editItem__wrapper-left">
                                    <h2 className="editItem__wrapper-title">Item Details</h2>
                                    <h3 className="editItem__wrapper-label">Item Name</h3>
                                    <textarea className="editItem__uploadName menus" placeholder="Item name" name="itemNameBox" type="text"></textarea>
                                    <h3 className="editItem__wrapper-label">Description</h3>
                                    <textarea className="editItem__uploadDescription menus menus-description" placeholder="Please enter a brief item description..." name="descriptionBox" type="text"></textarea>
                                    <h3 className="editItem__wrapper-label">Category</h3>
                                    <select className="menus" name="itemCategory" id="itemCategory" placeholder="Please select">
                                        <option value="" disabled selected>Please Select</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Gear">Gear</option>
                                        <option value="Apparel">Apparel</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Health">Health</option>
                                    </select>
                                </div>
                                <div className="editItem__wrapper-right">
                                    <h2 className="editItem__wrapper-title">Item Availability</h2>
                                    <h3 className="editItem__wrapper-label">Status</h3>
                                    <div className="editItem__inputform">
                                        <input type="radio" name="stockOrNoStock" value="InStock"  onClick={this.changeStockAvailabilityTrue}></input>
                                        <label className="button__label" for="InStock">In Stock</label>
                                        <input type="radio" name="stockOrNoStock" value="OutofStock" onClick={this.changeStockAvailabilityFalse}></input>
                                        <label className="button__label" for="OutofStock">Out of Stock</label>
                                        <h3 className="editItem__wrapper-label">Warehouse</h3>
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
                    <div className="editItem__buttonWrapper">
                        <Link to="/inventory">
                            <button className="editItem__cancelButton">Cancel</button>
                        </Link>
                        <button className="editItem__addButton"
                                type="submit"
                                form="editItem__form"
                                >Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditInventoryItem;